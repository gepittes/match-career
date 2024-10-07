"use client"
import { GraduationCap, MessageCircleHeart, MousePointerClick } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { AnimateImage, AnimateListItem, AnimateSpan, AnimateTitle, AnimateTitle2, TitleY } from "../ui/AnimateMotion";

const items = [
    {
      icon: <MousePointerClick size={27} />,
      title: '1. Clique em "Começar o Teste Agora"',
      description: "Após clicar no botão, você será redirecionado diretamente para o WhatsApp, onde Caio, o assistente virtual do Match Career, estará esperando para guiá-lo pelo teste.",
    },
    {
      icon: <MessageCircleHeart size={27}/>,
      title: '2. Responda as Perguntas no WhatsApp',
      description: "O Caio fará perguntas simples para entender suas preferências e habilidades. Basta responder no seu tempo, de forma rápida e fácil, sem complicação.",
    },
    {
      icon: <GraduationCap size={27}/>,
      title: "3. Receba Seu Resultado por Email",
      description: "Assim que terminar, Caio enviará o resultado do seu teste diretamente para o seu email, mostrando as áreas de conhecimento e carreiras que mais combinam com você!",
    },
  ];

export default function Steps() {
  return (
    <section>
      <motion.h3
      {...TitleY}
      {...AnimateTitle2}
      className="text-3xl md:text-4xl font-bold md:leading-tight mb-14 text-center">
        Como {""}
        <span className="bg-primary bg-clip-text text-transparent">
          funciona
        </span>{" "}
        o teste vocacional?
      </motion.h3>
      <div className="flex flex-wrap justify-between items-center gap-8">
        <div>
          <ul className="lg:max-w-[643px] space-y-8">
            {items.map((item, index) => (
              <motion.li key={index}
              {...AnimateListItem}
            transition={{ ...AnimateListItem.transition, delay: index * 0.2 }}
              className="flex flex-wrap justify-center items-center gap-6">
                <div className="p-6 rounded-full text-[#FD3078] bg-[#FF675C1A]">
                  {item.icon}
                </div>
                <div className="texto lg:max-w-[543px] space-y-5 gap-6">
                  <h5
                  className="text-xl font-semibold">{item.title}</h5>
                  <p className="md:text-xl mb-6 leading-7">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
        {...AnimateImage}
        className="w-full md:w-auto">
          <Image
            src="/images/ilustracao-lapis.png"
            alt="Ilustração Lápis"
            width={422}
            height={542}
            className="md:max-w-full max-w-80 mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
