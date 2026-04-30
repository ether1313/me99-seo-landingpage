import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import RegistrationSection from "./components/RegistrationSection";
import BonusSection from "./components/BonusSection";
import GamesSection from "./components/GamesSection";
import ProvidersSeoSection from "./components/ProvidersSeoSection";
import PromotionsSection from "./components/PromotionsSection";
import PaymentSection from "./components/PaymentSection";
import ResponsibleSection from "./components/ResponsibleSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <RegistrationSection />
        <BonusSection />
        <GamesSection />
        <ProvidersSeoSection />
        <PromotionsSection />
        <PaymentSection />
        <ResponsibleSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}