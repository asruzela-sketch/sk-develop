import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LandInfoSection } from "@/components/LandInfoSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ValueSection } from "@/components/ValueSection";
import { ConceptSection } from "@/components/ConceptSection";
import { EnvironmentSection } from "@/components/EnvironmentSection";
import { JourneySection } from "@/components/JourneySection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { FoundersSection } from "@/components/FoundersSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LandInfoSection />
        <ProjectSection />
        <ValueSection />
        <ConceptSection />
        <EnvironmentSection />
        <JourneySection />
        <DeveloperSection />
        <FoundersSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
