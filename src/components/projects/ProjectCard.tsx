"use client";

import { motion } from "framer-motion";
import { X, ExternalLink, Code } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  year: string;
  role: string;
  color: string;
  description: string;
  techStack: string[];
  videoUrl?: string;
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "p1",
    title: "Online Banking Website",
    year: "2026",
    role: "UI/UX Designer",
    color: "from-blue-600 to-indigo-900",
    description: "A responsive banking UI with real-time balance updates and secure authentication. Engineered for performance and flawless mobile-first user experience.",
    techStack: ["React", "Firebase", "Tailwind"],
    videoUrl: "/card1.mp4",
    githubUrl: "https://github.com/TenZ001/Banking-Website.git"
  },
  {
    id: "p2",
    title: "Product Showcase Website",
    year: "2026",
    role: "UI/UX Engineer",
    color: "from-neon-purple to-neon-pink",
    description: "Design system and component library focusing on extreme glassmorphism and soft spatial shadows. Adopted by over 50 internal projects.",
    techStack: ["React", "Framer Motion", "CSS Variables"],
    videoUrl: "/card2.mp4",
  },
  {
    id: "p3",
    title: "Pharmacy Management Website",
    year: "2025",
    role: "Frontend Dev",
    color: "from-neon-pink to-red-500",
    description: "Experimental e-commerce experience utilizing dark mode aesthetics and micro-interactions to drive 40% higher conversion rates.",
    techStack: ["Next.js", "Shopify API", "WebGL"],
    videoUrl: "/card3.mp4",
    githubUrl: "https://github.com/TenZ001/cure-cart25.git"
  },
  {
    id: "p4",
    title: "Interactive Portfolio Website",
    year: "2026",
    role: "Technical Designer",
    color: "from-blue-500 to-cyan-400",
    description: "Three.js powered interactive storytelling platform for digital artists. Real-time shader compilation and 3D asset hosting.",
    techStack: ["Three.js", "React Three Fiber", "GLSL"],
    videoUrl: "/card4.mp4",
    githubUrl: "https://github.com/TenZ001/Portfolio.git"
  }
];

export function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      onClick={onClick}
      className="relative w-[300px] h-[400px] md:w-[400px] md:h-[550px] shrink-0 rounded-[2.5rem] cursor-pointer overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 group"
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      data-interactive="true"
    >
      <motion.div
        layoutId={`project-bg-${project.id}`}
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
      />

      {/* Video playing on the card itself */}
      <motion.div layoutId={`project-media-${project.id}`} className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        ) : null}
      </motion.div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <motion.p layoutId={`project-role-${project.id}`} className="text-sm font-mono text-white/70 mb-2 uppercase tracking-widest">{project.role}</motion.p>
        <motion.h2 layoutId={`project-title-${project.id}`} className="text-3xl md:text-5xl font-bold text-white tracking-tight">{project.title}</motion.h2>
        <motion.p layoutId={`project-year-${project.id}`} className="text-white/50 mt-2 font-mono">{project.year}</motion.p>
      </div>
    </motion.div>
  );
}

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
    >
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <motion.div
        layoutId={`project-container-${project.id}`}
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0a0a0a] rounded-[2rem] overflow-y-auto overflow-x-hidden border border-white/10 shadow-2xl flex flex-col z-10 hidden-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-3 rounded-full bg-black/50 hover:bg-white/20 backdrop-blur-md transition-colors z-20"
          data-interactive="true"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* TOP: Media Preview (Video or Image) */}
        <motion.div layoutId={`project-media-${project.id}`} className="w-full h-[40vh] md:h-[50vh] relative bg-black shrink-0 overflow-hidden">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            />
          ) : project.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-90" />
          ) : (
            <motion.div layoutId={`project-bg-${project.id}`} className={`w-full h-full bg-gradient-to-br ${project.color} opacity-30`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        </motion.div>

        {/* BOTTOM: Details area */}
        <div className="px-8 md:px-12 pb-12 pt-6 relative z-10">
          <motion.h2 layoutId={`project-title-${project.id}`} className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
            {project.title}
          </motion.h2>
          <motion.p layoutId={`project-role-${project.id}`} className="text-neon-blue font-mono text-sm tracking-widest uppercase mb-6">
            {project.role} • {project.year}
          </motion.p>

          {/* Moved Buttons immediately below title/role */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {project.liveUrl && (
              <a href={project.liveUrl} data-interactive="true" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-interactive="true" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/10 hover:bg-white/20 transition-colors">
                <Code className="w-5 h-5" /> GitHub
              </a>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-3xl mb-8"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 flex items-center gap-3 flex-wrap"
          >
            <span className="text-white/40 font-mono text-sm mr-2">TECH:</span>
            {project.techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm font-mono text-white/80">
                {tech}
              </span>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
