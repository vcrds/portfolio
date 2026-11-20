"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { duration, ease } from "../../lib/motion";

/**
 * Hidden offset for the line. 100% isn't enough: with a tight line-height
 * the glyphs overflow the line box, so at 100–105% the tops of the letters
 * still poke out of the mask before the animation starts.
 */
const HIDDEN_Y = "125%";

export const maskedLineVariants: Variants = {
  hidden: { y: HIDDEN_Y },
  visible: {
    y: "0%",
    transition: { duration: duration.slow, ease: ease.out },
  },
};

interface MaskedLineProps {
  children: ReactNode;
  className?: string;
}

/**
 * One line of text that slides up from behind a mask (transform only).
 * Driven by a parent's variants ("hidden" → "visible"), so the stagger
 * lives in the parent.
 */
export default function MaskedLine({ children, className = "" }: MaskedLineProps) {
  return (
    // Padding + matching negative margin grow the clip box past the glyphs
    // without changing the layout.
    <span className="block overflow-hidden py-[0.12em] -my-[0.12em]">
      <motion.span variants={maskedLineVariants} className={`block ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}
