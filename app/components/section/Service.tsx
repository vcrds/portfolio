"use client";

import { motion } from "framer-motion";
import CardService from "../CardService";
import Container from "../Container";
import Title from "../Title";

export default function Service() {
  return (
    <>
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100,
          }}
          className="absolute bottom-0 left-0 w-full h-[70%] z-0 bg-black-normal"
        ></motion.div>

        <Container as="div" style="relative z-10">
          <div className="flex flex-col gap-12">
            <Title titleText="Serviços" />
            <div className="grid gap-6 sm:max-w-[560px] lg:max-w-none lg:grid-cols-3 lg:items-end lg:gap-8">
              <CardService
                title="Desenvolvimento Frontend"
                text="Interfaces modernas usando React, Next.js e Tailwind, com foco em experiência de usuário e responsividade."
                height="300"
              >
                <div
                  style={{ backgroundImage: "url(./free_pen.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>

              <CardService
                title="Desenvolvimento Mobile"
                text="Apps Flutter cross-platform com alto desempenho e animações fluídas, desde protótipo até produção."
                height="350"
              >
                <div
                  style={{ backgroundImage: "url(./computer.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>

              <CardService
                title="Backend e APIs"
                text="APIs robustas em Node.js/Express, integração com bancos SQL/NoSQL, autenticação e deploy em nuvem."
                height="300"
              >
                <div
                  style={{ backgroundImage: "url(./world-search.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>
            </div>

            {/* {moreService && (
            <div className="flex flex-wrap justify-center items-start gap-12">
              <CardService
                title="Design intuitivo "
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                height="300"
              >
                <div
                  style={{ backgroundImage: "url(./free_pen.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>

              <CardService
                title="Design intuitivo "
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                height="350"
              >
                <div
                  style={{ backgroundImage: "url(./computer.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>

              <CardService
                title="Design intuitivo "
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                height="300"
              >
                <div
                  style={{ backgroundImage: "url(./world-search.svg)" }}
                  className="w-[60px] h-[60px] bg-no-repeat"
                />
              </CardService>
            </div>
          )} */}
          </div>

          {/* Botão ver mais serviços */}
          {/* <Button onClick={OpenMoreServices}>
          {moreService ? "Ver menos" : "Ver todos serviços "}
        </Button> */}
        </Container>
      </section>
    </>
  );
}
