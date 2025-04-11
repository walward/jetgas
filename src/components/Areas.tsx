
import React from "react";
import { MapPin } from "lucide-react";
import { responsiveHoverClass } from "@/hooks/use-mobile";

const Areas = () => {
  const regions = [
    {
      title: "Zona Sul",
      neighborhoods: [
        "Vila Mariana", "Saúde", "Jabaquara", "Ipiranga", "Sacomã", 
        "Paraíso", "Moema", "Campo Belo", "Brooklin", "Santo Amaro", 
        "Campo Grande", "Campo Limpo", "Socorro", "Cursino", "Jardim Ângela", 
        "Jardim São Luiz", "Aeroporto", "Interlagos"
      ],
      image: "/lovable-uploads/d4dd2b5b-96f5-4163-9906-5e64009d61eb.webp" // Converted to WebP
    },
    {
      title: "Zona Oeste",
      neighborhoods: [
        "Itaim Bibi", "Vila Olímpia", "Morumbi", "Vila Andrade", 
        "Vila Sônia", "Jardim Europa", "Jardim Paulista", "Cidade Jardim", 
        "Lapa", "Alto de Pinheiros", "Alto da Lapa", "Pinheiros"
      ],
      image: "/lovable-uploads/94277785-8910-4a80-8d00-aa7c98556850.webp" // Converted to WebP
    },
    {
      title: "Grande São Paulo",
      neighborhoods: [
        "Alphaville", "Barueri", "Santana de Parnaíba", "Cotia", 
        "Mogi das Cruzes", "Caieiras"
      ],
      image: "/lovable-uploads/f4f3335a-920a-4888-82b2-0678946aeaa8.webp" // Converted to WebP
    },
  ];

  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto iphone-safe-container">
        <div className="text-center mb-16">
          <h2 className="section-title uppercase">ÁREAS DE ATENDIMENTO</h2>
          <p className="section-subtitle">
            Atuamos em São Paulo capital e Grande São Paulo com atendimento rápido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-custom ${responsiveHoverClass}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={region.image} 
                  alt={`Região ${region.title}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-primary mobile-text-wrap">
                    {region.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {region.neighborhoods.map((neighborhood, i) => (
                    <div key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2 flex-shrink-0"></span>
                      <span className="text-muted text-sm sm:text-base mobile-text-wrap">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl overflow-hidden">
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src="/lovable-uploads/b2f0a3a7-6b33-45f6-afe6-62f30447378f.webp" 
                alt="Mapa de atendimento" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase">ATENDIMENTO AMPLO</h3>
              <p className="text-muted mb-6">
                Nossa equipe de técnicos especializados está estrategicamente distribuída
                pela cidade de São Paulo e região, garantindo um atendimento rápido e eficiente
                para todos os nossos clientes.
              </p>
              <p className="text-muted mb-6 mobile-text-wrap">
                Não encontrou sua região? Entre em contato para verificar disponibilidade
              </p>
              <a
                href="https://wa.me/5511978025373?text=Olá,%20gostaria%20de%20verificar%20se%20vocês%20atendem%20na%20minha%20região.%20Pode%20me%20ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <span>Verificar disponibilidade</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
