"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative z-10 bg-transparent">
      {/* Background blur overlay that applies when section is scrolled into */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-5xl w-full"
      >
        <motion.p variants={item} className="text-xl md:text-3xl text-white/50 mb-8 font-mono">
          👋 Hi, I&apos;m Viraj
        </motion.p>
        
        <motion.h2 variants={item} className="text-4xl md:text-6xl font-black mb-12 text-white leading-tight">
          I design and build interactive digital experiences that feel <span className="text-neon-pink">fast</span>, <span className="text-neon-purple">intuitive</span>, and <span className="text-neon-blue">alive</span>.
        </motion.h2>

        <motion.p variants={item} className="text-2xl md:text-4xl text-white/80 leading-relaxed font-light mb-16">
          I don&apos;t just create interfaces — I craft experiences that users can feel. Focusing on motion, usability, and real-time interaction.
        </motion.p>

        <motion.div variants={item} className="border-l-2 border-white/20 pl-8">
          <p className="text-xl text-white/50 mb-4 font-mono">Currently exploring:</p>
          <ul className="text-2xl text-white space-y-4 font-light">
            <li>• Real-time UI systems</li>
            <li>• Interactive 3D web <span className="text-neon-blue">(WebGL/Three.js)</span></li>
            <li>• Performance-driven frontend architecture</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
