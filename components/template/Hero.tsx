import React from "react";
import EmailStyles from "./EmailStyles";
import { Img } from "@react-email/components";

const { gradient, lista } = EmailStyles();

const Hero = () => {
  return (
    <section>
      <div className="text-center ">
        <h1 className=" text-3xl font-bold leading-normal">
          Deu Match! seu perfil é o "{" "}
          <span className="bg-clip-text text-transparent" style={gradient}>
            Explorador Tecnológico {/* Passar atributo de acordo com o teste */}
          </span>
          "
        </h1>
        <p className="font-medium text-lg max-w-[1080px]">
          Você se encaixa no perfil do "Explorador Tecnológico". Isso significa
          que você tem uma paixão pelo mundo da tecnologia, inovação e resolução
          de problemas complexos. Suas principais características incluem:{" "}
          {/* Texto de acordo com o teste */}
        </p>
      </div>
      <div className="flex flex-wrap-reverse justify-between mt-14">
        <div>
          <Img
            id="trophy"
            src="https://png.pngtree.com/png-clipart/20240315/original/pngtree-3d-cute-student-character-bring-a-grade-a-result-png-image_14596162.png"
            alt="Ilustração Segurando Troféu"
            width={440}
            height={440}
          />
        </div>
        <ul className="p-0 max-w-[750px] flex flex-col justify-evenly">
          {lista.map((item, index) => (
            <li key={index} className="flex items-center my-2 gap-4">
              <Img src="/images/icon-check.png" alt="" width={60} height={57} />
              {item.textoLista}
            </li>
          ))}
        </ul>
      </div>
      <style>
        {`@media (max-width: 600px) {
          img#trophy {
            width: 100% !important; height: auto !important;
        }}`}
      </style>
    </section>
  );
};

export default Hero;
