
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Areas from "@/components/Areas";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TextOverride from "@/components/TextOverride";
import { trackPageView } from "@/utils/gtm";

const Index = () => {
  // Handle anchor scroll when page loads with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          // Decode the hash to handle special characters like "ç"
          const decodedHash = decodeURIComponent(hash);
          const element = document.querySelector(decodedHash);
          if (element) {
            const headerOffset = 80; // Fixed header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    };

    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  useEffect(() => {
    trackPageView('/', 'JetGas - Página Inicial');

    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=0');
      }

      document.body.style.overflowX = "hidden";
      document.documentElement.style.overflowX = "hidden";
      document.body.style.width = "100%";
      document.documentElement.style.width = "100%";
      document.body.style.position = "relative";
      document.documentElement.style.position = "relative";
    }

    return () => {
      if (isMobile) {
        document.body.style.overflowX = "";
        document.documentElement.style.overflowX = "";
        document.body.style.width = "";
        document.documentElement.style.width = "";
        document.body.style.position = "";
        document.documentElement.style.position = "";
      }
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden max-w-[100vw]">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Areas />
      <CTA />
      <Footer />
      <WhatsAppButton />
      <TextOverride />
    </div>
  );
};

export default Index;
