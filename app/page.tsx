import About from "@/components/About";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1236px] p-5 lg:p-0 space-y-14 overflow-hidden md:overflow-visible">
      <Hero />
      <About />
    </div>
  );
}
