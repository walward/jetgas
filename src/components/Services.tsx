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
  // Dados dos cards de serviço
  const serviceCards = [
    {
      title: "Manutenção Preventiva",
      description:
        "Evite surpresas! Realizamos a manutenção preventiva do seu aquecedor para garantir o bom funcionamento e prolongar a vida útil.",
      icon: Flame,
    },
    {
      title: "Conserto e Reparo",
      description:
        "Aquecedor com defeito? Nossa equipe está pronta para diagnosticar e reparar qualquer problema, com peças de qualidade e garantia.",
      icon: Wrench,
    },
    {
      title: "Instalação de Aquecedores",
      description:
        "Instalação segura e eficiente de aquecedores de todas as marcas e modelos, seguindo as normas técnicas e garantindo a sua segurança.",
      icon: ShieldCheck,
    },
    {
      title: "Regulagem de Temperatura",
      description:
        "Ajuste preciso da temperatura do seu aquecedor para garantir o máximo de conforto e economia, evitando o desperdício de gás e energia.",
      icon: Settings,
    },
    {
      title: "Limpeza e Descontaminação",
      description:
        "Removemos sujeiras, impurezas e resíduos que podem comprometer o desempenho do seu aquecedor, garantindo a qualidade da água e a sua saúde.",
      icon: Fan,
    },
    {
      title: "Substituição de Peças",
      description:
        "Trocamos peças danificadas ou desgastadas por peças originais e compatíveis, garantindo o perfeito funcionamento do seu aquecedor.",
      icon: ThermometerSnowflake,
    },
  ];
  
  // Dados das marcas de aquecedores
  const brands = [
    {name: "Rinnai", logo: "/lovable-uploads/fe2c375d-66c1-49e4-926e-03917769e4c0.png"},
    {name: "Bosch", logo: "/lovable-uploads/0fa806b9-9b40-4faf-903f-a648c9536f8f.png"},
    {name: "Komeco", logo: "/lovable-uploads/75699ea2-9a73-41d4-9bd5-98d40c85304f.png"},
    {name: "Lorenzetti", logo: "/lovable-uploads/3b9e7037-08d2-43ad-98a6-e2c267c81ac8.png"},
    {name: "Orbis", logo: "/lovable-uploads/f8d50a30-8de6-4d12-a1a8-6824a903d549.png"},
    {name: "Rheem", logo: "/lovable-uploads/07804fa2-a3c4-4afa-8e30-0d1257054e8f.png"},
    {name: "Cumulus", logo: "/lovable-uploads/87207c08-bff1-463e-aa35-b51790cf768b.png"},
    {name: "Inova", logo: "/lovable-uploads/061254c6-8865-4bc2-b722-35f507b1f455.png"},
    {name: "Mondial", logo: "/lovable-uploads/3a6547b8-fad1-4f4e-bb7f-66ed666e5170.png"},
    {name: "Acqtec", logo: "/lovable-uploads/72a94254-5899-4852-96a6-49c5297ac1d6.png"},
    {name: "Junkers", logo: "/lovable-uploads/e88748bf-8f26-431b-a591-1b87b072afeb.png"},
    {name: "Jacuzzi", logo: "/lovable-uploads/a0ae8602-1e07-4a6e-8fb8-872a4dbdf928.png"},
    {name: "Fujinox", logo: "/lovable-uploads/cfb5934a-baf7-44c7-bd6a-a61c23ec5317.png"},
    {name: "Cardal", logo: "/lovable-uploads/dc4920ce-76a9-4575-83f0-99222ec21ddd.png"},
    {name: "Fame", logo: "/lovable-uploads/1ab11a58-3da9-4d40-9bba-67de7670d75c.png"},
    {name: "Corona", logo: "/lovable-uploads/0a90c52f-cdc2-4875-b04a-18ba3eb9221f.png"},
    {name: "AquaHot", logo: "/lovable-uploads/a7f517dc-9965-4100-b19f-17635db50adb.png"},
    {name: "Cod", logo: "/lovable-uploads/5965c3ba-7287-484f-a13d-e11c02bee785.png"},
    {name: "Cad", logo: "/lovable-uploads/c6c5cb1e-8a21-4a83-b15e-436a8e38b8c6.png"},
    {name: "Yume", logo: "/lovable-uploads/c03ffcdb-57d8-41a5-bf5a-5314a4984fcf.png"}
  ];

  // Plugin para autoplay do carrossel com delay de 2 segundos (mais rápido)
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title uppercase">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para manutenção e reparo de aquecedores a gás
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm card-hover"
            >
              <div className="mb-4">
                <card.icon className="h-8 w-8 text-primary mb-2" />
                <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
              </div>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-primary mb-4 uppercase">
              Trabalhamos com todas as marcas
            </h3>
            <p className="text-muted max-w-3xl mx-auto">
              Nossa equipe é especializada no reparo e manutenção das principais
              marcas de aquecedores do mercado
            </p>
          </div>

          <div className="px-4 md:px-10 py-6">
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
              <CarouselContent>
                {brands.map((brand, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 md:basis-1/3 lg:basis-1/5 flex items-center justify-center p-4"
                  >
                    <img
                      src={brand.logo}
                      alt={`Logo ${brand.name}`}
                      className="h-16 object-contain grayscale hover:grayscale-0 transition-all mx-auto"
                    />
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
