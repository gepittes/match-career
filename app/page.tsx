import About from "@/components/About";
import { Hero } from "@/components/Hero";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1236px] p-5 lg:p-0 space-y-28 overflow-hidden md:overflow-visible">
      <Hero />
      <About />
      <Steps />
    </div>
  );
}
