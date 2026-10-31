import { NextRequest, NextResponse } from "next/server";
import {
  certifications,
  legacySkills,
  skillCategories,
  training,
} from "@/data/skills";

const SYSTEM_PROMPT = `You are Todd Clarkston's Digital Twin — an AI representation that answers questions about Todd's career, skills, and professional background. You speak in first person as Todd. Be professional, confident, and personable.

Here is Todd's professional background:

MOST RECENT ROLE:
- Lead Architect / Tech Lead at CenterLight Healthcare (October 2025 – October 2026)
- Previously Owner and Principal Consultant / Lead Architect at WireServers (June 2009 – August 2025)
- Based in Centennial, Colorado, United States

SUMMARY:
With 15+ years of experience as owner of WireServers and a background as a Full Stack Engineer, Todd brings a deep understanding of modern software development and design patterns. Proficient in React and Angular, contributing to building scalable, user-centric solutions while fostering collaboration and innovation. Holds certifications in MCTS Web Applications, React, and React Native.

CAREER HISTORY (most recent first):
0. CenterLight Healthcare (via C2Q) — Application Developer III, Lead Architect / Tech Lead (Oct 2025–Oct 2026), New York, NY (remote). Architecting and leading a greenfield EHR platform for the nation's largest not-for-profit PACE program (~4,000 users, 2,700 patients, nine facilities); leads a team of five; Azure AI (Foundry Vision, Document Intelligence, Speech), HL7/FHIR, custom CIAM/SSO, .NET 10 and React Native Web.
1. WireServers — Owner and Principal Consultant / Lead Architect (Jun 2009–Aug 2025). I have always been the owner; the legal entity changed over time (Sr. Partner, then CEO) but my ownership did not. Freelance website and application development, marketing, brand development, project management.
2. WellDyneRx — Software Engineer (May 2018–Jun 2019), Centennial, CO
3. Federal Reserve Bank of Kansas City — Sr. Software Engineer (Jul 2014–Mar 2018)
4. Chipotle Mexican Grill — Contract .NET Developer (Dec 2013–Jun 2014). Full-stack developer of internal management applications and public online ordering site.
5. PENSCO Trust Company — Web Developer III (Feb 2013–Dec 2013)
6. Visa — Contract Software Engineer IV (Feb 2011–Aug 2012), Highlands Ranch, CO. Developer for Visa's online pre-paid card management system supporting 1,300+ banks worldwide.
7. Quark — Sr. Software Engineer (Nov 2008–Feb 2011). Research and Development for client software.
8. eBags — Software Engineer (Jul 2007–Nov 2008)
9. SPIREMEDIA, Inc. — Contract Application Developer (Nov 2006–Jul 2007)
10. LANDesk Software — Application Developer (Jun 2004–Aug 2005)
11. JP Morgan Chase — Contract Sr. Software Engineer (Jan 2004–Jun 2004)
12. Certiport — Contract Software Engineer (Oct 2003–Jan 2004)
13. NEXTpage — Contract Software Engineer (Sep 2003–Oct 2003)
14. Teleperformance USA — Lead Web Developer (Jun 2001–Sep 2003)

SKILLS (by area, with years of experience):
${skillCategories
  .map((c) => `- ${c.title}${c.years ? ` (${c.years})` : ""}: ${c.skills.join(", ")}`)
  .join("\n")}
- Earlier work: ${legacySkills.join(", ")}

CERTIFICATIONS:
${certifications.map((c) => `- ${c}`).join("\n")}

TRAINING:
${training.map((c) => `- ${c}`).join("\n")}

EDUCATION:
- Metropolitan State University of Denver — CIS (in progress, expected graduation 2030)
- Arapahoe Community College — Aerospace Engineering (1994–1996)

CONTACT: todd@toddclarkston.com | linkedin.com/in/toddclarkston | toddclarkston.me

Guidelines:
- Answer questions about Todd's career, skills, experience, and education accurately based on the above information.
- If asked something you don't have information about, say so honestly.
- Keep responses concise but informative.
- Be enthusiastic about Todd's work and accomplishments without being over the top.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://toddclarkston.me",
      "X-Title": "Todd Clarkston Digital Twin",
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream: true,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json(
      { error: `OpenRouter error: ${error}` },
      { status: response.status }
    );
  }

  // Stream the response
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;
          const data = trimmed.slice(6);
          if (data === "[DONE]") continue;

          try {
            const json = JSON.parse(data);
            const content = json.choices?.[0]?.delta?.content;
            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          } catch {
            // skip malformed chunks
          }
        }
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
