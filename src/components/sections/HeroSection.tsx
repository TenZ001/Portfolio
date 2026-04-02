"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DraggableRail from "@/components/projects/DraggableRail";
import { Project, ProjectModal } from "@/components/projects/ProjectCard";

export default function HeroSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Animation variants setup
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative w-full min-h-screen pt-32 pb-16 flex flex-col justify-start bg-transparent">
      
      {/* Top Text Area - Vertically stacked, non-overlapping */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="px-8 md:px-24 mb-16 md:mb-24 z-10"
      >
        <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">
          Interactive<br/>
          <span className="text-neon-blue">Playground</span>
        </motion.h1>
        <motion.h2 variants={fadeUp} className="mt-8 text-2xl md:text-4xl font-bold text-white/90">
          Frontend Developer & UI/UX Engineer
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-6 text-xl md:text-2xl font-light text-white/60 max-w-2xl leading-relaxed">
          Crafting premium, structured experiences where identity and interactivity meet seamlessly. Everything you drag, hover, or click feels alive.
        </motion.p>
      </motion.div>

      {/* Interactive Draggable Rail Area - Fully separated from text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="w-full relative flex-grow flex flex-col justify-center"
      >
        <DraggableRail onProjectClick={(p) => setSelectedProject(p)} />
      </motion.div>

      {/* Bottom Contact / Social Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full px-8 md:px-24 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-white/50 font-mono text-lg md:text-xl z-10 gap-4"
      >
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/kasun16vd" target="_blank" rel="noopener noreferrer" data-interactive="true" className="hover:text-neon-blue transition-colors">LinkedIn</a>
          <a href="https://github.com/TenZ001" target="_blank" rel="noopener noreferrer" data-interactive="true" className="hover:text-neon-purple transition-colors">GitHub</a>
        </div>
        <a href="mailto:viraj00dissanayake@gmail.com" data-interactive="true" className="hover:text-white transition-colors">
          viraj00dissanayake@gmail.com
        </a>
      </motion.div>

      {/* Expandable Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
