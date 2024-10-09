import Image from "next/image";

const ImagesMatch = () => {
  const img = [
    {
      src: "/images/estudante-no-computador.png",
      alt: "Estudante no computador",
      height: 551,
      width: 410,
      position: "relative",
      classes: "top-0 left-0 w-[300px] h-auto sm:w-[350px] md:w-[410px]",
    },
    {
      src: "/images/gruaduation-icon.png",
      alt: "Ícone de Graduação",
      width: 238,
      height: 238,
      position: "absolute",
      classes: "top-0 left-[-2rem] md:top-0 md:left-[-9rem] w-[150px] h-[150px] md:w-[238px] md:h-[238px]",
      floatAnimation: "animate-float1",
    },
    {
      src: "/images/certificate.png",
      alt: "Ícone de Certificado",
      width: 132,
      height: 135,
      position: "absolute",
      classes: "top-[-2rem] right-[-2rem] md:top-[-6rem] md:left-[14rem] w-[100px] h-[100px] md:w-[132px] md:h-[135px]",
      floatAnimation: "animate-float2",
    },
    {
      src: "/images/learning-online.png",
      alt: "Ícone de Aprendizado Online",
      width: 148,
      height: 148,
      position: "absolute",
      classes: "hidden md:block w-[120px] h-[120px] md:w-[148px] md:h-[148px]",
      floatAnimation: "animate-float3",
    },
  ];

  return (
    <div className="relative flex justify-center md:justify-start items-center">
      {img.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`object-cover ${image.position} ${image.floatAnimation} ${image.classes}`}
        />
      ))}
    </div>
  );
};

export default ImagesMatch;
