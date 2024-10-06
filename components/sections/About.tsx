import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function About() {
  return (
    <section>
      <div className="flex md:justify-between gap-8 place-content-center flex-wrap-reverse">
        <div className="relative">
          <Image
            src="/images/ilustracao-segurando-trofeu.png"
            alt="Ilustração segurando troféu"
            width={440}
            height={400}
            className="md:max-w-full max-w-80"
          />
        </div>
        <div className="flex flex-col justify-center gap-6 md:w-1/2 ">
          <h3 className="text-3xl md:text-4xl font-bold md:leading-tight">
            Conheça as áreas que <br />
            <span className="bg-primary bg-clip-text text-transparent">
              combinam
            </span>{" "}
            com você!
          </h3>
          <p className="md:text-xl mb-6 leading-7">
            Nosso teste vocacional é baseado na teoria das Múltiplas
            Inteligências de Howard Gardner, o que significa que ele é projetado
            para explorar suas habilidades de forma ampla e profunda. Com ele,
            você descobrirá quais são as suas inteligências predominantes e como
            elas podem te guiar na escolha da carreira perfeita
          </p>
          <Button
            variant={"primary"}
            size={"default"}
            className="md:text-xl font-semibold md:w-3/5 py-0"
          >
            Fazer teste agora!
          </Button>
        </div>
      </div>
    </section>
  );
}
