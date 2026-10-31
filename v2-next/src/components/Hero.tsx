"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise pt-24 pb-28">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase mb-6">
            Lead Software Architect &bull; Full Stack Engineer &bull; Azure &amp; AI
          </p>
        </motion.div>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8"
        >
          <span className="block">Todd</span>
          <span className="block gradient-text glow-text">Clarkston</span>
        </motion.h1>

        <motion.p
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building enterprise-grade software for over two decades &mdash; from
          a Federal Reserve Bank and Fortune 500 clients to a greenfield EHR
          platform for 4,000 users and AI products of my own.
        </motion.p>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#journey"
            className="px-8 py-3.5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
          >
            Explore My Journey
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-border hover:border-muted text-foreground rounded-full font-medium transition-all duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border-2 border-muted rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-muted rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
