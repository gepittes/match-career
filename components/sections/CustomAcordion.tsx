"use client";
import AccordionComponent from "../ui/AcordionComponent";
import { AnimateButton, AnimateTitle, AnimateTitle2, TitleY } from "../ui/AnimateMotion";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col mx-auto">
      <motion.h3
        {...TitleY}
        {...AnimateTitle2}
        
        className="text-3xl md:text-4xl font-bold leading-normal text-center mb-14"
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
          variant={"primary"}
          size={"default"}
          className="md:text-xl font-semibold w-full md:w-2/5 py-0 mx-auto my-5 "
        >
          Fazer teste agora!
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
