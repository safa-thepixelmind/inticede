import HeroSection from "@/app/components/HeroSection";
import About from "./components/About";
import ConnectSection from "./components/ConnectSection";
import EventsSection from "./components/EventsSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ExploreSection from "./components/ExploreSection";
import TrustedBySection from "./components/TrustedBySection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <About />
      <ExpertiseSection />
      <TrustedBySection />
      <ExploreSection />
      <EventsSection />
      <ConnectSection />
    </div>
  );
}
