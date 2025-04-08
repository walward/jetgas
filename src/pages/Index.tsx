import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Areas from "@/components/Areas";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  // Prevent horizontal scrolling on mobile
  useEffect(() => {
    let touchStartX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const touchEndX = e.touches[0].clientX;
      const diffX = touchStartX - touchEndX;
      
      // If horizontal scroll detected and page has horizontal overflow
      if (Math.abs(diffX) > Math.abs(window.innerWidth - document.documentElement.clientWidth)) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <Areas />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
