import About from "./components/About/About";
import DroneSection from "./components/DroneSection/DroneSection";
import Explore from "./components/Explore/Explore";
import GetStarted from "./components/GetStarted/GetStarted";
import Hero from "./components/Hero/Hero";
import WhatsNew from "./components/WhatsNew/WhatsNew";
import World from "./components/World/World";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <Explore />
        <div className="gradient-03 z-0" />
      </div>
      <DroneSection />
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
        <World />
      </div>
    </div>
  );
}
