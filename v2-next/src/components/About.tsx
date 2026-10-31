"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <section id="about" className="relative py-12 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10">
            Enterprise Scale, <span className="gradient-text">Startup Speed</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted text-lg leading-relaxed">
              I&apos;ve been a full stack engineer for 20+ years, including 15+
              years as owner of{" "}
              <span className="text-foreground font-medium">WireServers</span>,
              a consultancy that has served about 40 clients.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Proficient in React, Angular, Next.js, and .NET, I contribute to
              building scalable, user-centric solutions while fostering
              collaboration and innovation across every team I lead.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="mx-auto w-fit rounded-full p-1 bg-gradient-to-br from-accent via-purple-400 to-cyan-400 glow">
              <div className="rounded-full bg-background p-2">
                <Image
                  src="/images/TC-44.jpg"
                  alt="Portrait of Todd Clarkston"
                  width={280}
                  height={280}
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-14 -mx-2 flex flex-wrap"
        >
          {[
            { value: "20+", label: "Years", detail: "Enterprise software delivery" },
            { value: "4,000", label: "EHR users", detail: "2,700 patients · 9 facilities" },
            { value: "1,000", label: "Examiners", detail: "Federal Reserve, all 50 states" },
            { value: "99%", label: "AI extraction", detail: "100 documents / < 1 minute" },
            { value: "70+", label: "OSS components", detail: "400+ npm downloads" },
            { value: "~40", label: "Clients", detail: "Through WireServers" },
          ].map((stat) => (
            <div key={stat.label} className="w-1/2 p-2 md:w-1/3 lg:w-1/6">
              <div className="h-full p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all duration-300">
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-cyan-400">
                  {stat.label}
                </p>
                <p className="mt-2 text-muted text-sm">{stat.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
