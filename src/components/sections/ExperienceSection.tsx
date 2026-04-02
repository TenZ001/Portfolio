"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "UI/UX Designer & Frontend Developer",
    company: "Personal Projects",
    year: "2024 - Present",
    description: "Designed and built responsive web applications using HTML, CSS, and JavaScript. Created interactive 3D experiences using Three.js and optimized UI for usability and accessibility."
  },
  {
    role: "Web Development Projects",
    company: "University Coursework",
    year: "2023 - 2024",
    description: "Developed multiple web apps and dashboards as part of coursework. Focused on clean code, responsive layouts, and incorporating user-centered design principles."
  },
  {
    role: "Design & Prototyping",
    company: "Self-Learning",
    year: "2022 - 2023",
    description: "Practiced UI/UX design and prototyping in Figma. Built high-fidelity mockups and translated them into functional web pages for learning purposes."
  }
];

export default function ExperienceSection() {
  return (
    <section className="min-h-screen py-24 px-8 lg:px-24 relative z-10 flex flex-col justify-center max-w-6xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        className="text-4xl md:text-7xl font-bold mb-20 text-white"
      >
        Experience
      </motion.h2>

      <div className="relative border-l border-white/20 ml-4 md:ml-8">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            className="mb-16 relative pl-12 md:pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute top-1 -left-[9px] w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
            
            <div className="group cursor-default" data-interactive="true">
              <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                {exp.role}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-2 mb-6">
                <span className="text-xl md:text-2xl font-light text-white/80">{exp.company}</span>
                <span className="text-sm font-mono text-neon-pink px-3 py-1 bg-white/5 border border-white/10 rounded-full w-max">
                  {exp.year}
                </span>
              </div>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-3xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
