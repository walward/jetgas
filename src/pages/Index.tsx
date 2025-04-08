
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
    const handleTouchMove = (e: TouchEvent) => {
      if (Math.abs(window.innerWidth - document.documentElement.clientWidth) > 0) {
        e.preventDefault();
      }
    };

    document.body.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      document.body.removeEventListener('touchmove', handleTouchMove);
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
