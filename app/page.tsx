import About from "@/components/sections/About";
import CustomAccordion from "@/components/sections/CustomAcordion";
import { Hero } from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import Steps from "@/components/sections/Steps";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1236px] p-5 lg:p-0 space-y-28 overflow-hidden md:overflow-visible">
      <Hero />
      <About />
      <Steps />
      <CustomAccordion />
      <Footer />
    </div>
  );
}
