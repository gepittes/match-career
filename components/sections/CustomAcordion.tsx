// pages/index.tsx
import AccordionComponent from "../ui/AcordionComponent";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div className="flex flex-col mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold leading-normal text-center mb-14">
        Tire suas{" "}
        <span className="bg-primary bg-clip-text text-transparent">
          dúvidas
        </span>{" "}
        sobre o teste vocacional
      </h3>
      <AccordionComponent />
      <Button
        variant={"primary"}
        size={"default"}
        className="md:text-xl font-semibold w-full md:w-2/5 py-0 mx-auto my-5 "
      >
        Fazer teste agora!
      </Button>
    </div>
  );
};

export default Home;
