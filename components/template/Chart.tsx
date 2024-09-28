import { Img } from "@react-email/components";
import EmailStyles from "./EmailStyles";
import ImagesTeste from "./ImagesTeste";

const { gradient } = EmailStyles();

const Chart = () => {
  return (
    <section
      style={{
        backgroundImage: "url()" /* url do Blob de fundo */,
        backgroundSize: "container",
        backgroundPosition: "right",
      }}
    >
      <div className="flex gap-8">
        <div>
          <h3>
            Confira o {""}
            <span className="bg-clip-text text-transparent" style={gradient}>
              resultado {""}
            </span>
            do seu teste!
          </h3>
          <Img
            src="https://www.artmajeur.com/medias/standard/a/d/adrianoferraz/artwork/11003779_fundo-sem-nada.jpg?v=1523399177"
            alt=""
            width={500}
            height={460}
          />
        </div>
        <div className="relative">
          <ImagesTeste />
        </div>
      </div>
    </section>
  );
};

export default Chart;
