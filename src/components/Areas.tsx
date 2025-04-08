
import React from "react";
import { MapPin } from "lucide-react";

const Areas = () => {
  const regions = [
    {
      title: "Zona Norte",
      neighborhoods: ["Santana", "Tucuruvi", "Vila Guilherme", "Jaçanã", "Mandaqui"],
    },
    {
      title: "Zona Sul",
      neighborhoods: ["Santo Amaro", "Moema", "Campo Belo", "Brooklin", "Jabaquara"],
    },
    {
      title: "Zona Leste",
      neighborhoods: ["Tatuapé", "Mooca", "Penha", "Itaquera", "São Miguel"],
    },
    {
      title: "Zona Oeste",
      neighborhoods: ["Pinheiros", "Lapa", "Butantã", "Perdizes", "Vila Leopoldina"],
    },
    {
      title: "Centro",
      neighborhoods: ["Bela Vista", "Santa Cecília", "República", "Consolação"],
    },
    {
      title: "Grande São Paulo",
      neighborhoods: ["Guarulhos", "Osasco", "Santo André", "São Bernardo", "Diadema"],
    },
  ];

  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Áreas de Atendimento</h2>
          <p className="section-subtitle">
            Atuamos em São Paulo capital e Grande São Paulo com atendimento rápido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-custom card-hover"
            >
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-secondary mr-2" />
                <h3 className="text-xl font-bold text-primary">
                  {region.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {region.neighborhoods.map((neighborhood, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2"></span>
                    <span className="text-muted">{neighborhood}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted mb-6">
            Não encontrou sua região? Entre em contato para verificar disponibilidade
          </p>
          <a
            href="https://wa.me/551144445555?text=Olá,%20gostaria%20de%20verificar%20se%20vocês%20atendem%20minha%20região"
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
    </section>
  );
};

export default Areas;
