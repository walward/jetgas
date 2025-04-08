
import React from "react";
import { Flame, Wrench, ShieldCheck, Settings, Fan, ThermometerSnowflake, ChevronLeft, ChevronRight } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

  const brands = [
    {name: "Rinnai", logo: "/lovable-uploads/061254c6-8865-4bc2-b722-35f507b1f455.png"},
    {name: "Bosch", logo: "/lovable-uploads/5965c3ba-7287-484f-a13d-e11c02bee785.png"},
    {name: "Chama", logo: "/lovable-uploads/a0ae8602-1e07-4a6e-8fb8-872a4dbdf928.png"},
    {name: "Cosmopolita", logo: "/lovable-uploads/3b9e7037-08d2-43ad-98a6-e2c267c81ac8.png"},
    {name: "Cumulus", logo: "/lovable-uploads/1ab11a58-3da9-4d40-9bba-67de7670d75c.png"},
    {name: "Equibrás", logo: "/lovable-uploads/cfb5934a-baf7-44c7-bd6a-a61c23ec5317.png"},
    {name: "General Heater", logo: "/lovable-uploads/75699ea2-9a73-41d4-9bd5-98d40c85304f.png"},
    {name: "Harman", logo: "/lovable-uploads/72a94254-5899-4852-96a6-49c5297ac1d6.png"},
    {name: "Heliotek", logo: "/lovable-uploads/07804fa2-a3c4-4afa-8e30-0d1257054e8f.png"},
    {name: "Inova", logo: "/lovable-uploads/fe2c375d-66c1-49e4-926e-03917769e4c0.png"},
    {name: "Junkers", logo: "/lovable-uploads/0a90c52f-cdc2-4875-b04a-18ba3eb9221f.png"},
    {name: "Kent", logo: "/lovable-uploads/dc4920ce-76a9-4575-83f0-99222ec21ddd.png"},
    {name: "Komeco", logo: "/lovable-uploads/0fa806b9-9b40-4faf-903f-a648c9536f8f.png"},
    {name: "Lorenzetti", logo: "/lovable-uploads/a7f517dc-9965-4100-b19f-17635db50adb.png"},
    {name: "Nordik", logo: "/lovable-uploads/3a6547b8-fad1-4f4e-bb7f-66ed666e5170.png"},
    {name: "Orbis", logo: "/lovable-uploads/c6c5cb1e-8a21-4a83-b15e-436a8e38b8c6.png"},
    {name: "Rheem", logo: "/lovable-uploads/f8d50a30-8de6-4d12-a1a8-6824a903d549.png"},
    {name: "Sakura", logo: "/lovable-uploads/cad5431e-25c1-4f0b-8aa7-6e15b602d113.png"},
    {name: "Thermotini", logo: "/lovable-uploads/e88748bf-8f26-431b-a591-1b87b072afeb.png"},
    {name: "Yume", logo: "/lovable-uploads/c03ffcdb-57d8-41a5-bf5a-5314a4984fcf.png"}
  ];

  // Plugin para autoplay do carrossel com delay de 2 segundos (mais rápido)
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

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
          
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              plugins={[plugin.current]}
              className="w-full relative"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="py-4">
                {brands.map((brand, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/6">
                    <div className="p-4 bg-white rounded-lg shadow-sm h-24 flex items-center justify-center">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logo`} 
                        className="max-h-20 max-w-full object-contain" 
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 -translate-x-1/2" />
              <CarouselNext className="absolute right-0 translate-x-1/2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
