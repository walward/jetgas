
import React from "react";
import { Flame, Wrench, ShieldCheck, Settings, Fan, ThermometerSnowflake } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-12 w-12 text-secondary" />,
      title: "Manutenção Preventiva",
      description:
        "Evite problemas com manutenções periódicas que prolongam a vida útil do seu aquecedor e mantêm sua eficiência.",
    },
    {
      icon: <Settings className="h-12 w-12 text-secondary" />,
      title: "Reparo de Aquecedores",
      description:
        "Diagnóstico preciso e reparos profissionais para todos os modelos e marcas de aquecedores residenciais e comerciais.",
    },
    {
      icon: <Flame className="h-12 w-12 text-secondary" />,
      title: "Instalação de Aquecedores",
      description:
        "Instalação técnica e segura do seu novo equipamento, com orientações sobre uso e manutenção.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-secondary" />,
      title: "Revisão de Segurança",
      description:
        "Verificação completa do sistema para evitar vazamentos e garantir o funcionamento seguro do equipamento.",
    },
    {
      icon: <Fan className="h-12 w-12 text-secondary" />,
      title: "Troca de Peças",
      description:
        "Substituição de componentes com peças originais e de qualidade, mantendo a eficiência do sistema.",
    },
    {
      icon: <ThermometerSnowflake className="h-12 w-12 text-secondary" />,
      title: "Higienização Completa",
      description:
        "Limpeza profunda que melhora a qualidade do aquecimento e prolonga a vida útil do equipamento.",
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Nossos Serviços Especializados</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas em manutenção, instalação e reparo de aquecedores para sua casa ou empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-custom p-8 card-hover"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-muted">{service.description}</p>
              <div className="mt-6">
                <a
                  href="https://wa.me/5511978025373?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-semibold inline-flex items-center hover:underline"
                >
                  Saiba mais
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
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
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-8">
            Trabalhamos com todas as marcas de aquecedores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 flex items-center justify-center text-primary font-bold">Rinnai</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 flex items-center justify-center text-primary font-bold">Lorenzetti</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 flex items-center justify-center text-primary font-bold">Komeco</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 flex items-center justify-center text-primary font-bold">Bosch</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 flex items-center justify-center text-primary font-bold">Orbis</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="h-12 flex items-center justify-center text-primary font-bold">Cumulus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
