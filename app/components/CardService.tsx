"use client";

import { ReactNode, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";

/**
 * Tailwind can't generate classes from interpolated strings (`h-[${x}]`),
 * so every height maps to a literal class. Min-height, not height: the
 * card grows with its content instead of clipping it.
 * The "350" card is only taller when cards sit side by side (lg+).
 */
const HEIGHT_CLASS: Record<string, string> = {
  "300": "lg:min-h-[300px]",
  "350": "lg:min-h-[350px]",
};

interface cardProps {
  title: string;
  children: ReactNode;
  text: string;
  height: string;
}

export default function CardService({
  title,
  children,
  text,
  height,
}: cardProps) {
  const selectedHeight = height;
  const shouldReduceMotion = useReducedMotion();
  const magnetic = useMagnetic({ distance: 25, stiffness: 300, damping: 30 });

  const hoverVariants = useMemo(
    () => ({
      y: shouldReduceMotion ? 0 : -10,
      scale: shouldReduceMotion ? 1 : 1.02,
      rotateY: shouldReduceMotion ? 0 : 5,
      rotateX: shouldReduceMotion ? 0 : -2,
    }),
    [shouldReduceMotion],
  );

  return (
    <motion.div
      ref={magnetic.ref as React.RefObject<HTMLDivElement>}
      style={{ x: magnetic.x, y: magnetic.y }}
      onMouseMove={magnetic.handleMouseMove}
      onMouseLeave={magnetic.handleMouseLeave}
      whileHover={hoverVariants}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
      }}
      className={`w-full px-6 pb-8 pt-12 rounded-lg bg-400 flex flex-col items-center text-center box-shadow ${
        HEIGHT_CLASS[selectedHeight] ?? HEIGHT_CLASS["300"]
      } cursor-pointer`}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 5,
          rotateZ: shouldReduceMotion ? 0 : 5,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="gpu-accelerated"
      >
        {children}
      </motion.div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <h3 className="text-[24px] leading-tight text-white-light font-semibold text-balance">
          {title}
        </h3>

        <p className="text-[16px] leading-relaxed text-white-dark max-w-[268px]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
