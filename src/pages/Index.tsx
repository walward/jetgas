
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

  // Update touch handling and viewport settings for mobile
  useEffect(() => {
    // Track page view when component mounts
    trackPageView('/', 'JetGas - Página Inicial');
    
    // Set viewport meta tag for proper iOS display
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=0');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=0';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
    
    // Add viewport-fit meta tag for iOS notches
    if (!document.querySelector('meta[name="viewport-fit"]')) {
      const viewportFitMeta = document.createElement('meta');
      viewportFitMeta.name = 'viewport-fit';
      viewportFitMeta.content = 'cover';
      document.getElementsByTagName('head')[0].appendChild(viewportFitMeta);
    }
    
    // Update overflow styles to prevent horizontal scrolling
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.width = "100%";
    document.documentElement.style.width = "100%";
    document.body.style.position = "relative";
    document.documentElement.style.position = "relative";
    
    // Force a layout recalculation after a slight delay to fix any iOS rendering issues
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.display = "none";
      // This forces a layout recalculation
      void document.body.offsetHeight;
      document.body.style.display = "";
    }, 50);
    
    return () => {
      // Reset styles when component unmounts
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
      document.body.style.width = "";
      document.documentElement.style.width = "";
      document.body.style.position = "";
      document.documentElement.style.position = "";
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
