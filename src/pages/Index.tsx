
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
  // Prevent horizontal scrolling on mobile with stronger approach
  useEffect(() => {
    // Apply styles directly to html and body elements
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.documentElement.style.width = '100%';
    document.documentElement.style.position = 'relative';
    
    document.body.style.overflow = 'auto';
    document.body.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.position = 'relative';
    document.body.style.touchAction = 'pan-y';
    document.body.style.msTouchAction = 'pan-y';
    document.body.style.WebkitOverflowScrolling = 'touch';
    
    // Block horizontal touch moves
    const handleTouchMove = (e) => {
      if (Math.abs(e.touches[0].clientX - e.touches[0].startClientX) > 10) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      // Reset styles
      document.documentElement.style = '';
      document.body.style = '';
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
