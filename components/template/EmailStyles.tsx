const fontPoppins = {
  fontFamily: "Poppins, sans-serif",
};

const gradient = {
  backgroundImage: "linear-gradient(268deg, #FF675C 2.54%, #FD3078 97.92%)",
};

const lista = [
  { textoLista: "Curiosidade e entusiasmo por descobrir soluções tecnológicas." },
  { textoLista: "Valorização da lógica e pensamento analítico." },
  { textoLista: "Capacidade de resolver desafios tecnológicos com eficiência." },
  { textoLista: "Vontade de experimentar e aprender continuamente em tecnologia." },
];

export default function EmailStyles() {
  return {
    fontPoppins,
    gradient,
    lista
  };
}
