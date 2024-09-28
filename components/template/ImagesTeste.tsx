import { Img } from "@react-email/components";

const ImagesTeste = () => {
  const img = [
    {
      src: "https://png.pngtree.com/png-clipart/20240316/original/pngtree-3d-cute-student-character-bring-an-idea-png-image_14598418.png",
      alt: "Ícone de Formatura",
      height: 400,
      width: 300,
      position: "relative",
      top: "0",
      left: "0",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/010/137/215/non_2x/certificate-illustration-3d-free-png.png",
      alt: "Ícones de Livros",
      width: 120,
      height: 120,
      position: "absolute",
      top: "-4rem",
      left: "-3rem",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/010/137/215/non_2x/certificate-illustration-3d-free-png.png",
      alt: "Ícone de Aprendizado Online",
      width: 120,
      height: 120,
      position: "absolute",
      top: "-3rem",
      left: "-14rem",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/010/137/215/non_2x/certificate-illustration-3d-free-png.png",
      alt: "Ícone de Certificado",
      width: 120,
      height: 120,
      position: "absolute",
      top: "10rem",
      left: "16rem",
    },
  ];

  return (
    <div className=" relative flex">
      {img.map((image, index) => (
        <Img
          key={index}
          style={{ top: image.top, left: image.left }}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={`object-cover ${image.position}`}
        />
      ))}
    </div>
  );
};

export default ImagesTeste;
