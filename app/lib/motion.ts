/**
 * Motion tokens shared across the site.
 *
 * Rules:
 * - Reveals use `ease.out` (fast start, long settle — reads as "physical").
 * - Wipes/state changes use `ease.inOut`.
 * - Hover/feedback stays at `duration.fast`; nothing on load exceeds `duration.slow`.
 * - Only animate transform and opacity.
 */

export const ease = {
  /** Expo-like out curve for entrances. */
  out: [0.22, 1, 0.36, 1],
  /** Symmetric curve for transitions between states. */
  inOut: [0.7, 0, 0.3, 1],
} as const;

/** Same curves for CSS / Tailwind arbitrary values. */
export const cssEase = {
  out: "cubic-bezier(0.22, 1, 0.36, 1)",
  inOut: "cubic-bezier(0.7, 0, 0.3, 1)",
} as const;

export const duration = {
  fast: 0.2,
  base: 0.5,
  slow: 0.75,
} as const;

export const stagger = {
  tight: 0.06,
  base: 0.08,
} as const;

/** Springs reserved for pointer-driven motion (magnetic, drag). */
export const spring = {
  pointer: { stiffness: 260, damping: 26, mass: 0.6 },
} as const;
