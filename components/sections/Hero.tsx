"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import ImagesMatch from "../ui/ImagesMatch";
import { motion } from "framer-motion";
import {
  AnimateButton,
  AnimateContainer,
  AnimateImage,
  AnimateP,
  AnimateSpan,
  AnimateTitle,
} from "../ui/AnimateMotion";

export const Hero = () => {
  return (
    <section className="md:mt-24">
      <div className="flex flex-col">
        <div className="flex md:justify-between gap-8 place-content-center relative flex-wrap ">
          <motion.div className="flex flex-col justify-center gap-6 md:w-1/2">
            <motion.div {...AnimateContainer} {...AnimateSpan}>
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={316}
                height={118}
                className="w-full max-w-[120px] md:max-w-[280px]"
                priority
              />
            </motion.div>
            <motion.h1
              {...AnimateContainer}
              {...AnimateTitle}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Dê match com a{" "}
              <span className="bg-primary bg-clip-text text-transparent">
                carreira
              </span>{" "}
              dos seus sonhos!
            </motion.h1>
            <motion.p
              {...AnimateContainer}
              {...AnimateP}
              className="text-base sm:text-lg md:text-xl leading-7"
            >
              Escolher a profissão certa nunca foi tão fácil e divertido. Faça
              nosso teste vocacional grátis e deixe a paixão pelos estudos te
              guiar na direção de um futuro promissor. Descubra as opções que a
              Unidesc oferece para você brilhar no mercado de trabalho.
            </motion.p>
            <motion.div {...AnimateContainer} {...AnimateButton} className="w-full">
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

          </motion.div>
          <motion.div {...AnimateImage} className="relative">
            <ImagesMatch />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
