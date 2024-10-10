"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { AnimateButton, AnimateContainerXR, AnimateImage, AnimateP, AnimateTitle } from "../ui/AnimateMotion";

export default function About() {
  return (
    <section>
      <div className="flex md:justify-between gap-8 place-content-center flex-wrap-reverse">
        <motion.div
          {...AnimateImage}
          className="relative"
        >
          <Image
            src="/images/ilustracao-segurando-trofeu.png"
            alt="Ilustração segurando troféu"
            width={440}
            height={400}
            className="md:max-w-full max-w-80"
          />
        </motion.div>
        <div className="flex flex-col justify-center gap-6 md:w-1/2">
          <motion.h3
            {...AnimateContainerXR}
            {...AnimateTitle}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
          >
            Conheça as áreas que <br />
            <span className="bg-primary bg-clip-text text-transparent">
              combinam
            </span>{" "}
            com você!
          </motion.h3>
          <motion.p
            {...AnimateContainerXR}
            {...AnimateP}
            className="text-base sm:text-lg md:text-xl leading-7"
          >
            Nosso teste vocacional é baseado na teoria das Múltiplas
            Inteligências de Howard Gardner, o que significa que ele é projetado
            para explorar suas habilidades de forma ampla e profunda. Com ele,
            você descobrirá quais são as suas inteligências predominantes e como
            elas podem te guiar na escolha da carreira perfeita.
          </motion.p>
          <motion.div
            {...AnimateContainerXR}
            {...AnimateButton}
            className="w-full"
          >
              <Button
                asChild
                variant={"primary"}
                size={"default"}
                className="font-medium py-0 z-10 w-full md:w-3/5"
              >
                <Link href="https://wa.me/5561981088070?text=Ol%C3%A1,%20gostaria%20de%20realizar%20o%20teste%20vocacional" target="_blank">
                  Começar o teste agora!
                </Link>
              </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
