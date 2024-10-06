import Image from "next/image";

const ImagesMatch = () => {
  const img = [
    {
      src: "/images/estudante-no-computador.png",
      alt: "Estudante no computador",
      height: 551,
      width: 410,
      position: "relative",
      top: "0",
      left: "0",
    },
    {
      src: "/images/gruaduation-icon.png",
      alt: "Ícone de Graduação",
      width: 238,
      height: 238,
      position: "absolute",
      top: "0",
      left: "-9rem",
      floatAnimation: "animate-float1",
    },
    {
      src: "/images/certificate.png",
      alt: "Ícone de Certificado",
      width: 132,
      height: 135,
      position: "absolute",
      top: "-6rem",
      left: "14rem",
      floatAnimation: "animate-float2",
    },
    {
      src: "/images/learning-online.png",
      alt: "Ícone de Aprendizado Online",
      width: 148,
      height: 148,
      position: "absolute",
      top: "18rem",
      left: "-7rem",
      floatAnimation: "animate-float3",
    },
  ];

  return (
    <div className=" relative flex">
      {img.map((image, index) => (
        <Image
          key={index}
          style={{ top: image.top, left: image.left }}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`object-cover ${image.position} ${image.floatAnimation} md:max-w-full max-w-60`}
        />
      ))}
    </div>
  );
};

export default ImagesMatch;
