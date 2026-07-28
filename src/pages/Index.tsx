import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LandInfoSection } from "@/components/LandInfoSection";
import { ValueSection } from "@/components/ValueSection";
import { ConceptSection } from "@/components/ConceptSection";
import { EnvironmentSection } from "@/components/EnvironmentSection";
import { LocationVideoSection } from "@/components/LocationVideoSection";
import { TransportSection } from "@/components/TransportSection";
import { JourneySection } from "@/components/JourneySection";
import locationAerial from "@/assets/location-aerial.jpg";

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
        <section className="w-full">
          <img src={locationAerial} alt="Аэрофото участка под строительство" loading="lazy" className="w-full h-auto block" />
        </section>
        <ValueSection />
        <ConceptSection />
        <LocationVideoSection />
        <TransportSection />
        {/* <EnvironmentSection /> */}
        <JourneySection />
        
        {/* Временно скрыты - можно вернуть, раскомментировав */}
        {/* <DeveloperSection /> */}
        {/* <FoundersSection /> */}
        {/* <ContactsSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
