import Image from "next/image";
import { Button } from "./ui/button";
import ImagesMatch from "./ui/ImagesMatch";

export const Hero = () => {
  return (
    <section className="container mx-auto max-w-[1140px] mt-24">
      <div className="flex flex-col">
        <div className="flex md:justify-between gap-8 place-content-center p-5 lg:p-0 relative flex-wrap">
          <div className="flex flex-col justify-center gap-4 md:w-1/2 ">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={216}
              height={100}
              priority
            />
            <h1 className="text-3xl font-bold leading-normal">
              Dê match com a{" "}
              <span className="bg-primary bg-clip-text text-transparent">
                carreira
              </span>{" "}
              dos seus sonhos!
            </h1>
            <p>
              Escolher a profissão certa nunca foi tão fácil e divertido. Faça
              nosso teste vocacional grátis e deixe a paixão pelos estudos te
              guiar na direção de um futuro promissor. Descubra as opções que a
              Unidesc oferece para você brilhar no mercado de trabalho.
            </p>
            <Button
              variant={"primary"}
              size={"default"}
              className="text-base font-semibold md:w-3/5 py-0"
            >
              Começar o teste agora!
            </Button>
          </div>
          <div className="relative">
            <ImagesMatch />
          </div>
        </div>
      </div>
    </section>
  );
};
