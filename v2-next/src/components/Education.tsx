"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    school: "Metropolitan State University of Denver",
    degree: "Computer Information Systems",
    period: "Expected 2030",
  },
  {
    school: "Arapahoe Community College",
    degree: "Aerospace Engineering",
    period: "1994 – 1996",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <section id="education" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Education
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Academic <span className="gradient-text">Foundation</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 group"
            >
              <span className="text-accent font-mono text-xs tracking-widest uppercase">
                {edu.period}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2 group-hover:text-accent transition-colors">
                {edu.school}
              </h3>
              <p className="text-muted">{edu.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
