import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactWidget from '@/components/FloatingContactWidget';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingContactWidget />
    </div>
  );
}

