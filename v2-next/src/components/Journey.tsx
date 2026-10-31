"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "CenterLight Healthcare (via C2Q)",
    roles: [
      {
        title: "Application Developer III – Lead Architect / Tech Lead",
        period: "Oct 2025 – Oct 2026",
      },
    ],
    description:
      "Architecting and leading a greenfield Electronic Health Record platform for the nation's largest not-for-profit PACE program, serving about 4,000 users and 2,700 patients across nine facilities. Leading a team of five, with Azure AI, HL7/FHIR, and a custom CIAM/SSO server.",
    highlight: true,
  },
  {
    company: "WireServers",
    roles: [
      {
        title: "Owner & Principal Consultant / Lead Architect",
        period: "Jun 2009 – Aug 2025",
      },
    ],
    description:
      "Owned and led a technology company (the legal entity changed over the years, my ownership never did) delivering freelance development, marketing, brand development, and project management solutions. Ran alongside the employment roles below.",
  },
  {
    company: "Federal Reserve Bank of Kansas City",
    roles: [{ title: "Sr. Software Engineer", period: "Jul 2014 – Mar 2018" }],
    description:
      "Developed critical financial systems at one of the twelve Federal Reserve Banks.",
  },
];

const earlierCareer = [
  { company: "WellDyneRx", dates: "2018 – 2019" },
  { company: "Chipotle Mexican Grill", dates: "2013 – 2014" },
  { company: "Pensco Trust", dates: "2013" },
  { company: "Visa, Inc.", dates: "2011 – 2012" },
  { company: "Quark, Inc.", dates: "2008 – 2011" },
  { company: "eBags, Inc.", dates: "2007 – 2008" },
  { company: "SpireMedia", dates: "2006 – 2007" },
  { company: "LANDesk", dates: "2004 – 2006" },
  { company: "J.P. Morgan Chase", dates: "2004" },
  { company: "Certiport", dates: "2003 – 2004" },
  { company: "Teleperformance USA", dates: "2001 – 2003" },
  { company: "Alorica", dates: "2000 – 2001" },
];

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-transparent" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 w-2.5 h-2.5 rounded-full -translate-x-1 ${
          exp.highlight
            ? "bg-accent shadow-lg shadow-accent/50"
            : "bg-border group-hover:bg-accent/60"
        } transition-colors duration-300`}
      />

      <div
        className={`p-6 rounded-2xl border transition-all duration-300 ${
          exp.highlight
            ? "bg-surface border-accent/20 glow"
            : "bg-surface/50 border-border hover:border-accent/20"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <h3
            className={`text-xl font-bold tracking-tight ${
              exp.highlight ? "gradient-text" : ""
            }`}
          >
            {exp.company}
          </h3>
        </div>

        <div className="space-y-1 mb-4">
          {exp.roles.map((role, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3"
            >
              <span className="text-foreground font-medium text-sm">
                {role.title}
              </span>
              <span className="text-muted font-mono text-xs">
                {role.period}
              </span>
            </div>
          ))}
        </div>

        <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <section id="journey" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Career
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            The <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.company} exp={exp} index={i} />
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-border p-6">
          <p className="text-muted font-mono text-xs uppercase tracking-widest mb-3">
            Earlier roles · 2000 – 2019
          </p>
          <p className="text-muted text-sm leading-7">
            {earlierCareer.map((e) => `${e.company} (${e.dates})`).join("  ·  ")}
          </p>
        </div>
      </div>
    </section>
  );
}
