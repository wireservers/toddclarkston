"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted text-lg mb-12 leading-relaxed">
            Whether you need a technical co-founder, a senior engineer, or
            strategic leadership for your next project &mdash; I&apos;m ready to talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <a
            href="mailto:todd@toddclarkston.com"
            className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/toddclarkston"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-border hover:border-accent text-foreground rounded-full font-medium transition-all duration-200"
          >
            LinkedIn
          </a>
        </motion.div>

        <p className="text-muted text-sm font-mono">todd@toddclarkston.com</p>
      </div>
    </section>
  );
}
