import type { TargetAndTransition, Transition, Variants } from "framer-motion";
import { duration, ease, stagger } from "../../lib/motion";

const TITLE_LINE_COUNT = 2;

/**
 * Hero intro: greeting → title lines → photo → scroll cue.
 * The cue's delay is derived from when the title finishes, so changing a
 * duration or the line count doesn't throw the sequence off.
 */
const titleStart = 0.1;
const titleEnd =
  titleStart + (TITLE_LINE_COUNT - 1) * stagger.base + duration.slow;

export const heroTimeline = {
  greeting: 0,
  title: titleStart,
  photo: 0.25,
  // Starts as the title settles (minus 0.15s of overlap).
  cue: titleEnd - 0.15,
} as const;

export const greetingVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.base,
      ease: ease.out,
      delay: heroTimeline.greeting,
    },
  },
};

export const titleVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: heroTimeline.title,
      staggerChildren: stagger.base,
    },
  },
};

export const photoVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.out,
      delay: heroTimeline.photo,
    },
  },
};

export const cueVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.base,
      ease: ease.out,
      delay: heroTimeline.cue,
    },
  },
};

/**
 * Scroll-arrow bob: 3 cycles, then it stops. An endless loop in the
 * reader's peripheral vision tires the eye and keeps pulling attention
 * away from the text. A few cycles are enough to say "there's more below".
 */
export const cueBob: { animate: TargetAndTransition; transition: Transition } =
  {
    animate: { y: [0, 6, 0] },
    transition: {
      duration: 1.6,
      ease: ease.inOut,
      repeat: 2,
      repeatDelay: 0.6,
      delay: heroTimeline.cue + duration.base,
    },
  };

export const photoParallax = {
  range: [0, 500] as [number, number],
  y: [0, 150] as [number, number],
  fadeRange: [0, 300] as [number, number],
  opacity: [1, 0.3] as [number, number],
};
