"use client";

import Container from "../Container";
import SmallLink from "../SmallLink";
import Title from "../Title";

export default function AboutMe() {
  return (
    <Container style="py-24 md:py-32 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-end">
      <div className="flex flex-col gap-6">
        <Title titleText="Sobre mim" />
        <h2 className="resize-about-text max-w-[660px] font-bold text-white-light">
          Vinicius Cardoso, 25 anos, desenvolvedor full stack.
        </h2>
        <SmallLink textSmall="Falar comigo" linkSmall="/#contato" />
      </div>

      <p className="resize-text text-gray-7 max-w-[577px]">
        Sou desenvolvedor full stack com experiência em React, Flutter, Node.js
        e atualmente estudando Ruby. Moro em Colombo-PR, sou casado com Larissa
        e adoro abraçar novos projetos que me tiram do comodismo. No tempo
        livre, sou músico, fotógrafo e videomaker.
      </p>
    </Container>
  );
}
