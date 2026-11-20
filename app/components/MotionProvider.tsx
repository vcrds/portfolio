"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * reducedMotion="user": when the OS asks for reduced motion, Framer Motion
 * skips transform animations site-wide and keeps opacity fades.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
