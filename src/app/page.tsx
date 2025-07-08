import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import About from "./components/About";
import ExpertiseSection from "./components/ExpertiseSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen px-[38px] sm:px-[38px] md:px-[38px]">
      <Navbar />
      <HeroSection />
      <About />
      <ExpertiseSection />
    </div>
  );
}
