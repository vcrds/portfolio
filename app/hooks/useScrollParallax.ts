"use client";

import {
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface ScrollParallaxOptions {
  /** scrollY range (px) mapped to the movement. */
  range: [number, number];
  /** Vertical travel (px) across `range`. */
  y: [number, number];
  /** scrollY range (px) and opacity for the fade. */
  fadeRange?: [number, number];
  opacity?: [number, number];
}

/**
 * Parallax tied to window scroll. Movement turns off under reduced motion.
 * The fade stays, because it's opacity, not movement.
 * Unclamped: values keep extrapolating past the range (opacity < 0 → invisible).
 */
export function useScrollParallax({
  range,
  y,
  fadeRange = range,
  opacity = [1, 1],
}: ScrollParallaxOptions): { y: MotionValue<number> | number; opacity: MotionValue<number> } {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const yValue = useTransform(scrollY, range, y, { clamp: false });
  const opacityValue = useTransform(scrollY, fadeRange, opacity, { clamp: false });

  return { y: reduceMotion ? 0 : yValue, opacity: opacityValue };
}
