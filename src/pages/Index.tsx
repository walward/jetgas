
import React, { useEffect, useRef } from "react";
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
  // Prevent horizontal scrolling on mobile with type-safe approach
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
    
    // Store initial touch position
    let touchStartX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
      }
    };
    
    // Block horizontal touch moves
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touchCurrentX = e.touches[0].clientX;
        if (Math.abs(touchCurrentX - touchStartX) > 10) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      
      // Reset styles in a type-safe way
      const htmlStyle = document.documentElement.style;
      htmlStyle.overflow = '';
      htmlStyle.height = '';
      htmlStyle.width = '';
      htmlStyle.position = '';
      
      const bodyStyle = document.body.style;
      bodyStyle.overflow = '';
      bodyStyle.height = '';
      bodyStyle.width = '';
      bodyStyle.position = '';
      bodyStyle.touchAction = '';
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
