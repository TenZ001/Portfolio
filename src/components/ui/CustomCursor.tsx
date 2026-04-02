"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const defaultCursorSize = 32;
    const moveCursor = (e: MouseEvent) => {
      // Offset by half the typical size so the center of the dot is at the cursor
      cursorX.set(e.clientX - defaultCursorSize / 2);
      cursorY.set(e.clientY - defaultCursorSize / 2);

      // Simple hit testing for hover state
      const target = e.target as HTMLElement;
      if (target) {
        const isInteractive = target.closest("a, button, [data-interactive='true'], input, textarea");
        setIsHovered(!!isInteractive);

        const isDragTarget = target.closest("[data-draggable='true']");
        setIsDragging(!!isDragTarget);
      }
    };

    const handleMouseDown = () => setIsHovered(true);
    const handleMouseUp = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
      style={{
        x: cursorX,
        y: cursorY,
        width: 60,
        height: 60,
      }}
      animate={{
        scale: isDragging ? 0.8 : isHovered ? 0.4 : 1,
        opacity: isDragging ? 0.5 : 1,
      }}
      transition={{ ease: "circOut", duration: 0.2 }}
    />
  );
}
