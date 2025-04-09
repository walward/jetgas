
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
  // Update touch handling to be less aggressive
  useEffect(() => {
    // We're intentionally not adding touch handlers that could interfere with scrolling
    // The issue was coming from hover effects that are now disabled on mobile
    
    // Update overflow styles to prevent horizontal scrolling only
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    
    return () => {
      // Reset styles when component unmounts
      document.body.style.overflowX = "";
      document.documentElement.style.overflowX = "";
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
