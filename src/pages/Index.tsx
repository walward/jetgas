
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

declare global {
  interface Window {
    initGoogleMaps?: () => void;
  }
}

const Index = () => {
  // Adicionar o script do Google para exibição de resenhas
  useEffect(() => {
    // Definir uma função global que o script do Google Maps pode chamar quando carregado
    window.initGoogleMaps = () => {
      console.log('Google Maps API carregado com sucesso');
      // Disparar um evento personalizado que o componente Testimonials pode escutar
      const event = new Event('google-maps-loaded');
      window.dispatchEvent(event);
    };

    // Criar e adicionar o script do Google Maps
    const script = document.createElement('script');
    // Substitua YOUR_API_KEY pela chave real ou use uma chave de exemplo para desenvolvimento
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-sample-key&libraries=places&callback=initGoogleMaps";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Limpar o script e a função global quando o componente for desmontado
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete window.initGoogleMaps;
    };
  }, []);

  return (
    <div className="min-h-screen">
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
