import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LandInfoSection } from "@/components/LandInfoSection";
import { ValueSection } from "@/components/ValueSection";
import { ConceptSection } from "@/components/ConceptSection";
import { EnvironmentSection } from "@/components/EnvironmentSection";
import { JourneySection } from "@/components/JourneySection";
import { SberFinancingSection } from "@/components/SberFinancingSection";
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
        <ValueSection />
        <ConceptSection />
        <EnvironmentSection />
        <JourneySection />
        <SberFinancingSection />
        {/* Временно скрыты - можно вернуть, раскомментировав */}
        {/* <DeveloperSection /> */}
        {/* <FoundersSection /> */}
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
