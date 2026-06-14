import { Nav } from "@/components/marketing/Nav";
import { HeroSection } from "@/components/marketing/HeroSection";
import { ArchitectureSection } from "@/components/marketing/ArchitectureSection";
import { DifferentiatorsSection } from "@/components/marketing/DifferentiatorsSection";
import { ResearchSection } from "@/components/marketing/ResearchSection";
import { DetectorPoolSection } from "@/components/marketing/DetectorPoolSection";
import { Footer } from "@/components/marketing/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ArchitectureSection />
        <DifferentiatorsSection />
        <ResearchSection />
        <DetectorPoolSection />
      </main>
      <Footer />
    </>
  );
}