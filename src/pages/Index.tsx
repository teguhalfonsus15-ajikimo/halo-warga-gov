import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CitizenSection } from "@/components/CitizenSection";
import { GovernmentSection } from "@/components/GovernmentSection";
import { PartnersSection } from "@/components/PartnersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <section id="studi-kasus">
          <CaseStudiesSection />
        </section>
        <section id="warga">
          <CitizenSection />
        </section>
        <section id="pemerintah">
          <GovernmentSection />
        </section>
        <section id="mitra">
          <PartnersSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;