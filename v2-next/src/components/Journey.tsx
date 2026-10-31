"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience as experiences } from "@/data/experience";

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
  exp: (typeof experiences)[number];
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
          index === 0
            ? "bg-accent shadow-lg shadow-accent/50"
            : "bg-border group-hover:bg-accent/60"
        } transition-colors duration-300`}
      />

      <div
        className={`p-6 rounded-2xl border transition-all duration-300 ${
          index === 0
            ? "bg-surface border-accent/20 glow"
            : "bg-surface/50 border-border hover:border-accent/20"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <h3
            className={`text-xl font-bold tracking-tight ${
              index === 0 ? "gradient-text" : ""
            }`}
          >
            {exp.company}
          </h3>
          <span className="text-muted font-mono text-xs">{exp.dates}</span>
        </div>

        <p className="text-foreground font-medium text-sm">{exp.role}</p>
        <p className="text-muted font-mono text-xs mb-4">{exp.location}</p>

        <p className="text-muted text-base leading-relaxed mb-4">{exp.summary}</p>

        {exp.highlights.length > 0 && (
          <ul className="space-y-3 mb-4">
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {exp.tracks?.map((track) => (
          <div key={track.title} className="mb-4">
            <h4 className="text-foreground font-semibold text-sm mb-2">
              {track.title}
            </h4>
            <ul className="space-y-2">
              {track.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-muted text-sm leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex flex-wrap gap-2 pt-2">
          {exp.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full border border-border text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <section id="journey" className="relative py-12 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10"
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
            <TimelineItem key={exp.id} exp={exp} index={i} />
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
