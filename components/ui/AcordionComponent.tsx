// components/Accordion.tsx
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@radix-ui/react-accordion";
  import { ChevronDown } from "lucide-react";
  
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
      summary: "Como saber qual é a profissão ideal para mim?",
      details:
        "Encontrar a profissão ideal pode ser desafiador, mas algumas etapas podem ajudar na decisão. Primeiro, utilize o Teste Vocacional da Match Career, que identifica suas habilidades e sugere profissões alinhadas a elas. O autoconhecimento é essencial: conheça suas habilidades, interesses, valores e personalidade, independentemente da sua idade. Além disso, pesquise diferentes profissões, analisando o mercado de trabalho, as oportunidades de carreira e as competências necessárias. Por fim, considere consultar profissionais de orientação de carreira, que podem esclarecer dúvidas e oferecer suporte na escolha da profissão.",
    },
  ];
  
  const AccordionComponent: React.FC = () => {
    return (
      <Accordion type="single" collapsible>
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 rounded py-4 px-5 mb-4"
          >
            <AccordionTrigger className="w-full flex justify-between items-center text-left text-lg font-normal text-gray-800">
              <span>{item.summary}</span>
              <ChevronDown
                className={`transition-transform duration-200 `} /* ${
                    item.isOpen ? "rotate-180" : ""
                  } */
              />
            </AccordionTrigger>
            <AccordionContent className="mt-3">
              <p>{item.details}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  
  export default AccordionComponent;
  