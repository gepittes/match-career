"use client";
import Link from "next/link";
import AccordionComponent from "../ui/AcordionComponent";
import { AnimateButton, AnimateTitle2, TitleY } from "../ui/AnimateMotion";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col mx-auto">
      <motion.h3
        {...TitleY}
        {...AnimateTitle2}
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-normal text-center mb-14"
      >
        Tire suas{" "}
        <span className="bg-primary bg-clip-text text-transparent">
          dúvidas
        </span>{" "}
        sobre o teste vocacional
      </motion.h3>
      <AccordionComponent />
      <motion.div
        {...TitleY}
        {...AnimateButton}
        className="w-full text-center"
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
  );
};

export default Home;
