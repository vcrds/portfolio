"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import CardCompanies from "../CardCompanies";
import Container from "../Container";
import Title from "../Title";

export default function Companies() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.08,
          delayChildren: shouldReduceMotion ? 0 : 0.1,
        },
      },
    }),
    [shouldReduceMotion],
  );

  const titleVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 120,
          mass: 0.8,
        },
      } as const,
    }),
    [shouldReduceMotion],
  );

  return (
    <Container style="py-24 md:py-32 flex flex-col gap-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        variants={titleVariants}
        className="animation-container"
      >
        <Title titleText="Empresas" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
        variants={containerVariants}
        className="flex flex-col gap-12 md:gap-16"
      >
        <motion.h2
          variants={titleVariants}
          className="resize-about-text max-w-[900px] font-bold text-white-light"
        >
          Empresas que
          <span className="italic text-blue-light"> confiaram </span>
          em meu serviço
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <CardCompanies textCard="Solvis" imageSrc="solvis" />
          <CardCompanies textCard="BNE" imageSrc="bne" />
          <CardCompanies textCard="Harpia Tech" imageSrc="harpia" />
          <CardCompanies textCard="360 ERP" imageSrc="360" />
        </div>
      </motion.div>
    </Container>
  );
}
