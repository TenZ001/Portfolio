"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Framer Motion", "TypeScript", 
  "Tailwind CSS", "Three.js", "WebGL", "Figma", 
  "UI/UX Design", "Performance Optimization"
];

export default function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-8 lg:p-24 relative z-10 overflow-hidden">
      <div className="max-w-6xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold mb-16 text-white text-center"
        >
          Toolkit
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: i * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: Math.random() * 10 - 5,
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.3)"
              }}
              className="px-6 py-4 md:px-10 md:py-6 rounded-full bg-white/5 border border-white/10 text-xl md:text-3xl font-light text-white backdrop-blur-md cursor-default pointer-events-auto"
              data-interactive="true"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
