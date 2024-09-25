import Image from "next/image"
import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <section className="container mx-auto grid lg:grid-cols-2 py-20 md:py-32 gap-10 bg-slate-400">
      <div className="text-center lg:text-start space-y-6">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={300}
          height={100}
          priority
        />
        <h1>Dê match com a <span>carreira</span> dos seus sonhos!</h1>
        <p>
          Escolher a profissão certa nunca foi tão fácil e divertido. Faça nosso teste vocacional grátis e deixe a paixão pelos estudos te guiar na direção de um futuro promissor. Descubra as opções que a Unidesc oferece para você brilhar no mercado de trabalho.
        </p>
        <Button>Começar o teste agora!</Button>
      </div>

      <div className="flex justify-end">
        <Image
          src="/images/estudante-no-computador.png"
          alt="Background Image"
          width={410}
          height={550}
          priority
        />
      </div>
    </section>
  )
}