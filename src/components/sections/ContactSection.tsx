"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 lg:p-24 relative z-10 bg-transparent">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full text-center flex flex-col items-center"
      >
        <h2 className="text-sm md:text-xl font-mono text-neon-pink tracking-[0.3em] uppercase mb-6">
          What&apos;s next?
        </h2>

        <h3 className="text-5xl md:text-8xl font-black mb-12 text-white">
          Let&apos;s talk
        </h3>

        <motion.a
          href="mailto:[viraj00dissanayake@gmail.com]"
          data-interactive="true"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-12 py-6 rounded-full bg-white/5 border border-white/20 hover:border-neon-pink/50 transition-colors backdrop-blur-md overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 text-2xl md:text-4xl font-light text-white group-hover:text-neon-pink transition-colors">
            viraj00dissanayake@gmail.com
          </span>
        </motion.a>

        <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-white/40 font-mono text-sm border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} Viraj. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/kasun16vd" data-interactive="true" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://github.com/TenZ001" data-interactive="true" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
