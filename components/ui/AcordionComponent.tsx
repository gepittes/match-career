import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateListItem } from "./AnimateMotion";

interface AccordionItemType {
  summary: string;
  details: string;
}

const accordionItems: AccordionItemType[] = [
  {
    summary: "O que é o Teste Vocacional?",
    details:
      "Um teste vocacional te ajuda no processo de escolha profissional, por meio de perguntas simples e intuitivas. Ele relaciona suas competências com possibilidades de carreiras e cursos.",
  },
  {
    summary: "Pra que serve o Teste Vocacional?",
    details:
      "Se você está concluindo o ensino médio e precisa decidir qual carreira vai seguir, o teste gratuito da Match Career é indicado para você. Ele também pode ser feito por adultos que querem mudar de profissão ou encontrar um trabalho adequado às suas habilidades e interesses.",
  },
  {
    summary: "Como fazer o Teste Vocacional?",
    details:
      "Reserve cerca de 10 minutos para concluir o teste. Escolha um momento tranquilo, sem interrupções, para que você possa refletir e responder confortavelmente. Seja sincero ao responder às perguntas, pois isso é fundamental para que o teste ajude a identificar suas habilidades e interesses. Confie em suas impressões ao preencher as respostas. Após completar o teste, analise os resultados com atenção, pois eles indicarão carreiras alinhadas às suas habilidades. Lembre-se de que a escolha de uma carreira também deve considerar seus valores e experiências.",
  },
  {
    summary: "Como funciona o Teste Vocacional?",
    details:
      "O Teste Vocacional da Match Career é baseado na teoria das múltiplas inteligências, que argumenta que cada indivíduo pode apresentar diferentes tipos de inteligência que influenciam suas escolhas profissionais.",
  },
  {
    summary: "Por que fazer o Teste Vocacional?",
    details:
      "Realizar o teste é uma excelente maneira de identificar suas habilidades, interesses e preferências profissionais, independentemente da sua idade ou fase da carreira; ao participar desse processo, você amplia seus horizontes, descobre habilidades em potencial e reescreve sua trajetória, além de promover um importante autoconhecimento que fortalece sua autoconsciência e autoconfiança.",
  },
  {
    summary: "Como saber qual é a profissão ideal para mim?",
    details:
      "Encontrar a profissão ideal pode ser desafiador, mas algumas etapas podem ajudar na decisão. Primeiro, utilize o Teste Vocacional da Match Career, que identifica suas habilidades e sugere profissões alinhadas a elas. O autoconhecimento é essencial: conheça suas habilidades, interesses, valores e personalidade, independentemente da sua idade. Além disso, pesquise diferentes profissões, analisando o mercado de trabalho, as oportunidades de carreira e as competências necessárias. Por fim, considere consultar profissionais de orientação de carreira, que podem esclarecer dúvidas e oferecer suporte na escolha da profissão.",
  },
  {
    summary: "Quando fazer o Teste Vocacional?",
    details:
      "Muitos optam por realizar o teste durante o ensino médio, especialmente ao planejar a entrada na faculdade. No entanto, é importante destacar que esse processo pode ser feito em qualquer fase da vida, seja para facilitar uma mudança de carreira ou para obter maior clareza sobre a trajetória profissional.",
  },
  {
    summary: "Quantas perguntas tem o Teste Vocacional da Match Career?",
    details:
      "O teste da Match Career é composto por 20 perguntas que, por meio das suas respostas, relacionam suas potenciais habilidades com áreas de conhecimento, permitindo que você descubra novas possibilidades de vocação de maneira simples e intuitiva.",
  },
];

const AccordionComponent: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <Accordion type="single" collapsible>
      {accordionItems.map((item, index) => {
        const isOpen = openItem === `item-${index}`;

        return (
          <motion.div
            key={index}
            {...AnimateListItem}
            transition={{ ...AnimateListItem.transition, delay: index * 0.2 }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="border border-gray-200 rounded py-4 px-5 mb-4"
            >
              <AccordionTrigger
                onClick={() => handleToggle(`item-${index}`)}
                className="w-full flex gap-2 justify-between items-center text-left text-lg font-normal text-gray-800"
              >
                <span className="text-base sm:text-lg md:text-xl">
                  {item.summary}
                </span>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                >
                  <ChevronDown />
                </motion.div>
              </AccordionTrigger>
              <AccordionContent className="mt-3">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20, duration: 1 }}
                  style={{ overflow: "hidden" }}
                >
                  <p className="text-base sm:text-lg md:text-xl leading-7">
                    {item.details}
                  </p>
                </motion.div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        );
      })}
    </Accordion>
  );
};

export default AccordionComponent;