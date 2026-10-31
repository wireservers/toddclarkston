"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  certifications,
  coreSkills,
  legacySkills,
  skillCategories,
  training,
} from "@/data/skills";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Skills & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 p-6 rounded-2xl border border-accent/30 bg-surface glow"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Core stack · what I build with now
          </p>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-accent/10 border border-accent/40 text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.6) }}
              className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-baseline justify-between gap-3 mb-4">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                  {cat.title}
                </h3>
                {cat.years && (
                  <span className="font-mono text-xs text-accent shrink-0">{cat.years}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-background border border-border text-muted hover:text-foreground hover:border-accent/40 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 rounded-2xl border border-border p-6">
          <p className="text-muted font-mono text-xs uppercase tracking-widest mb-3">
            Earlier work
          </p>
          <p className="text-muted text-sm leading-7">
            {legacySkills.join("  ·  ")}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface/50 border border-border hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-sm text-muted">{cert}</span>
              </div>
            ))}
          </div>
          <p className="text-muted text-sm mt-6">
            <span className="font-mono text-xs uppercase tracking-widest">
              Training ·{" "}
            </span>
            {training.join("  ·  ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
