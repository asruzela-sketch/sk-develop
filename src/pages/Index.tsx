import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { ValueSection } from "@/components/ValueSection";
import { ConceptSection } from "@/components/ConceptSection";
import { JourneySection } from "@/components/JourneySection";
import { InvestorSection } from "@/components/InvestorSection";
import { DeveloperSection } from "@/components/DeveloperSection";
import { ContactsSection } from "@/components/ContactsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectSection />
        <ValueSection />
        <ConceptSection />
        <JourneySection />
        <InvestorSection />
        <DeveloperSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
