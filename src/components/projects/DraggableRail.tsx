"use client";

import { motion, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ProjectCard, projects, Project } from "./ProjectCard";

export default function DraggableRail({ onProjectClick }: { onProjectClick: (p: Project) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (railRef.current && containerRef.current) {
        // Find total width
        const containerWidth = containerRef.current.offsetWidth;
        const railWidth = railRef.current.scrollWidth;
        // Pad the right side so the last card doesn't hit the absolute edge abruptly
        const leftConstraint = -railWidth + containerWidth - 100; 
        setConstraints({ left: Math.min(leftConstraint, 0), right: 0 });
      }
    };
    
    // Slight delay to ensure fonts and layout have resolved
    setTimeout(updateConstraints, 100);
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const x = useMotionValue(0);
  const xSpring = useSpring(x, { damping: 50, stiffness: 400 });
  const xVelocity = useVelocity(xSpring);
  
  // Transform velocity into a rotation skew effect
  const skew = useTransform(xVelocity, [-2000, 0, 2000], [15, 0, -15]);

  return (
    <div 
      className="w-full overflow-visible py-8 pl-8 md:pl-24"
      ref={containerRef}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={railRef}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        style={{ x }}
        className="flex gap-8 md:gap-12 items-center cursor-grab active:cursor-grabbing w-max pr-[20vw] select-none"
        data-draggable="true"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            style={{ rotateY: skew, transformStyle: "preserve-3d" }}
          >
            <ProjectCard project={project} onClick={() => onProjectClick(project)} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
