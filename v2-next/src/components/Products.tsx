"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    name: "BringThe... Budget",
    role: "Creator · Architect · Full-Stack Engineer",
    url: "https://bringthebudget.com",
    urlLabel: "bringthebudget.com",
    summary:
      "AI-powered personal-finance app that turns Word, PDF, CSV, OFX, text, images, and phone photos into structured accounts, transactions, and debts.",
    highlights: [
      "Azure OpenAI vision, OCR, classification, and summarization with an OpenAI-compatible Llama fallback.",
      "Multi-model fallback and per-call token tracking.",
      "End-to-end on .NET 10, React Native Web, Entity Framework, SQL Server, and Azure.",
    ],
    tags: ["Azure OpenAI", ".NET 10", "React Native Web", "Llama"],
    status: "Beta",
    stat: "99% extraction accuracy · 100 docs / < 1 minute",
  },
  {
    name: "BringThe... Diet",
    role: "Creator · Architect · Full-Stack Engineer",
    url: "https://www.bringthediet.com",
    urlLabel: "bringthediet.com",
    summary:
      "Healthy recipes and diet-planning platform: foods, recipes, diets, meal plans, favorites, and progress tracking.",
    highlights: [
      "Next.js 15 and React 19 web app in a pnpm monorepo with shared TypeScript packages.",
      "Microsoft Entra ID sign-in with MSAL.",
      "Deployed to Azure Web Apps through GitHub Actions.",
    ],
    tags: ["Next.js", "React 19", "Entra ID / MSAL", "Azure"],
    status: "Alpha",
    stat: "",
  },
  {
    name: "Food API",
    role: "Architect · Back-End Engineer",
    url: "https://food-api.wireservers.com",
    urlLabel: "food-api.wireservers.com",
    summary:
      ".NET 10 REST API behind BringTheDiet for foods, nutrients, recipes, diets, and meal plans, running on Azure App Service with Azure Cosmos DB.",
    highlights: [
      "Chose Azure Cosmos DB (MongoDB API) over a relational database so varied USDA FoodData Central records load without schema migrations; nutrients are normalized into their own collections.",
      "Repository pattern with Swagger/OpenAPI and cached document counts that cut Cosmos DB request-unit cost on paginated queries.",
      "Separate dev and production App Services, deployed through Azure DevOps pipelines with Docker.",
    ],
    tags: [".NET 10", "Cosmos DB", "Azure App Service", "REST"],
    status: "Live",
    stat: "In production on Azure App Service",
  },
  {
    name: "React-Natives",
    role: "Creator · Maintainer · Open Source",
    url: "https://reactnatives.dev",
    urlLabel: "reactnatives.dev",
    summary:
      "MIT-licensed cross-platform library of 70+ reusable React Native and web components.",
    highlights: [
      "Built with React Native, NativeWind, Tailwind Variants, and TypeScript.",
      "Reusable theming and developer-focused component APIs.",
      "Published to npm as @wireservers/react-natives.",
    ],
    tags: ["React Native", "NativeWind", "TypeScript", "npm"],
    status: "Open source",
    stat: "400+ npm downloads since Aug 2026 launch",
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <section id="products" className="relative py-12 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            {"// Shipping now"}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Products I <span className="gradient-text">built and run</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-px bg-gradient-to-b from-accent/70 via-border to-cyan-400/50 glow"
            >
              <div className="h-full flex flex-col gap-5 rounded-2xl bg-surface p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="text-sm text-muted mt-1">{p.role}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent/50 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent-hover">
                    {p.status}
                  </span>
                </div>
                {p.stat && (
                  <p className="font-mono text-xs text-cyan-400">{p.stat}</p>
                )}
                <p className="text-muted leading-relaxed">{p.summary}</p>
                <ul className="space-y-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-background border border-accent/40 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-11 items-center font-mono text-sm text-accent-hover hover:text-foreground transition-colors break-all"
                >
                  ↗ {p.urlLabel}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
