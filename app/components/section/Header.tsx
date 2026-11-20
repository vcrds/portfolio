"use client";

import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";
import { useScrollParallax } from "../../hooks/useScrollParallax";
import { spring } from "../../lib/motion";
import MaskedLine from "../motion/MaskedLine";
import {
  cueBob,
  cueVariants,
  greetingVariants,
  photoParallax,
  photoVariants,
  titleVariants,
} from "./Header.motion";

// Real aspect ratio of the file (2428×3300), so space is reserved before it loads.
const PHOTO = {
  src: "/desenvolvedor-vinicius-cardoso.png",
  width: 550,
  height: 748,
  sizes: "(max-width: 640px) 18rem, 34.375rem",
};

const TITLE_LINES = [
  { text: "FULL STACK", className: "" },
  { text: "DEVELOPER", className: "text-transparent text-stroke" },
];

export default function Header() {
  const reduceMotion = useReducedMotion();
  const photo = useScrollParallax(photoParallax);
  const magnetic = useMagnetic({
    distance: 15,
    stiffness: spring.pointer.stiffness,
    damping: spring.pointer.damping,
  });

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center pt-[90px] relative min-h-screen max-sm:justify-center max-sm:pt-[120px] overflow-hidden"
    >
      <motion.p
        variants={greetingVariants}
        className="flex gap-2 subtitle-resize text-gray-7"
      >
        👋, meu nome é<span className="font-bold text-blue-dark">Vinicius</span>{" "}
        e eu sou freelancer
      </motion.p>

      <motion.h1
        variants={titleVariants}
        className="mt-[12px] title-risize text-white-normal font-bold flex flex-col items-center gap-4"
      >
        {TITLE_LINES.map((line) => (
          <MaskedLine key={line.text} className={line.className}>
            {line.text}
          </MaskedLine>
        ))}
      </motion.h1>

      <motion.div
        style={{ y: photo.y }}
        className="absolute image-resize max-sm:relative max-sm:top-[-110px] flex flex-col items-center"
      >
        <motion.div variants={photoVariants} className="w-full">
          <motion.div
            style={{ opacity: photo.opacity }}
            className="group relative [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
          >
            {/* Color is revealed by fading in a second layer (opacity only).
                Same src, so it comes from cache. */}
            <Image
              {...PHOTO}
              priority
              alt="Desenvolvedor front-end vinicius cardoso"
              className="w-full h-auto grayscale"
            />
            <Image
              {...PHOTO}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-auto opacity-0 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] [@media(hover:hover)]:group-hover:opacity-100"
            />
          </motion.div>
        </motion.div>

        <motion.button
          type="button"
          aria-label="Rolar para a próxima seção"
          variants={cueVariants}
          ref={magnetic.ref as React.RefObject<HTMLButtonElement>}
          style={{ x: magnetic.x, y: magnetic.y }}
          onMouseMove={reduceMotion ? undefined : magnetic.handleMouseMove}
          onMouseLeave={magnetic.handleMouseLeave}
          onClick={handleScrollDown}
          className="w-[50px] h-[50px] mt-8 flex justify-center items-center group relative z-10 rounded-full focus-visible:outline focus-visible:outline-1 focus-visible:outline-blue-light"
        >
          <motion.span
            className="block"
            animate={reduceMotion ? undefined : cueBob.animate}
            transition={cueBob.transition}
          >
            <FaAngleDown
              size="18px"
              className="text-gray-6 group-hover:text-blue-light transition-colors duration-200"
            />
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.header>
  );
}
