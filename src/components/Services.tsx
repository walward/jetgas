
import React from "react";
import { Flame, Wrench, ShieldCheck, Settings, Fan, ThermometerSnowflake } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { responsiveHoverClass } from "@/hooks/use-mobile";

const Services = () => {
  // Dados dos cards de serviço
  const serviceCards = [
    {
      title: "Conserto e Reparo",
      description:
        "Aquecedor com defeito? Nossa equipe está pronta para diagnosticar e reparar qualquer problema, com peças de qualidade e garantia.",
      icon: Wrench,
      image: "/lovable-uploads/db9b8f18-2b5d-4b2a-921b-8ffb1b26e3f9.png" // Imagem 2
    },
    {
      title: "Manutenção Preventiva",
      description:
        "Evite surpresas! Realizamos a manutenção preventiva do seu aquecedor para garantir o bom funcionamento e prolongar a vida útil.",
      icon: Flame,
      image: "/lovable-uploads/5ff172d4-d8b1-4500-bc4e-ce7ad8233a6e.png" // Imagem 1
    },
    {
      title: "Instalação de Aquecedores",
      description:
        "Instalação segura e eficiente de aquecedores das principais marcas e modelos, seguindo as normas técnicas e garantindo a sua segurança.",
      icon: ShieldCheck,
      image: "/lovable-uploads/4cbb1e2a-cd2b-41fe-bc7a-841586c5551d.png" // Imagem 3
    },
    {
      title: "Regulagem de Temperatura",
      description:
        "Ajuste preciso da temperatura do seu aquecedor para garantir o máximo de conforto e economia, evitando o desperdício de gás e energia.",
      icon: Settings,
      image: "/lovable-uploads/f234b90f-90d2-4592-a780-56a30a1b830e.png" // Imagem 4
    },
    {
      title: "Limpeza e Descontaminação",
      description:
        "Removemos sujeiras, impurezas e resíduos que podem comprometer o desempenho do seu aquecedor, garantindo a qualidade da água e a sua saúde.",
      icon: Fan,
      image: "/lovable-uploads/7eec998c-c347-4e54-945d-1e00c28deb69.png" // Imagem 5
    },
    {
      title: "Substituição de Peças",
      description:
        "Trocamos peças danificadas ou desgastadas por peças originais e compatíveis, garantindo o perfeito funcionamento do seu aquecedor.",
      icon: ThermometerSnowflake,
      image: "/lovable-uploads/644aa38a-feed-442d-b099-9abbfbe97db0.png" // Imagem 6
    },
  ];
  
  // Dados das marcas de aquecedores com novos logos
  const brands = [
    {name: "Rinnai", logo: "/lovable-uploads/d7331609-baf6-440e-a3f8-a8f14d090e1c.png"},
    {name: "Bosch", logo: "/lovable-uploads/05fa389d-b4b3-47f6-9e1b-31ce242a20c2.png"},
    {name: "Komeco", logo: "/lovable-uploads/79a8b4b7-ed6f-4413-8aa1-1e9506b1219f.png"},
    {name: "Lorenzetti", logo: "/lovable-uploads/eabbf1e4-1ab5-4a2c-8870-b4734dbddfe2.png"},
    {name: "Orbis", logo: "/lovable-uploads/fbdc53ae-6c82-42f9-88ac-9bdcab958ec9.png"},
    {name: "Rheem", logo: "/lovable-uploads/cee91c7c-5e0c-4c5c-b940-82c3181ca8af.png"},
    {name: "Cumulus", logo: "/lovable-uploads/8dc6066c-d082-48d5-aa5d-4896bd451377.png"},
    {name: "Inova", logo: "/lovable-uploads/a1c5ec1c-f171-45b1-b25f-0918a1ab72a4.png"},
    {name: "Mondial", logo: "/lovable-uploads/3a6547b8-fad1-4f4e-bb7f-66ed666e5170.png"},
    {name: "Acqtec", logo: "/lovable-uploads/72a94254-5899-4852-96a6-49c5297ac1d6.png"},
    {name: "Junkers", logo: "/lovable-uploads/9d70410d-d862-4d3c-ae58-2ee0603cf7c1.png"},
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
          <h2 className="section-title uppercase">NOSSOS SERVIÇOS</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas para manutenção e reparo de sistemas de aquecedores: gás, elétrico, solar, piscina, entre outros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-sm ${responsiveHoverClass}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <card.icon className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-primary">{card.title}</h3>
                </div>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img 
                src="/lovable-uploads/bd9515eb-c83e-409a-bdd1-8635007000f4.png" 
                alt="Técnico especializado em manutenção de aquecedores" 
                className="rounded-lg shadow-md w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-primary mb-4 uppercase">
                NOSSA EQUIPE ESPECIALIZADA
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Contamos com técnicos altamente qualificados e certificados, com vasta experiência 
                em manutenção e instalação de aquecedores das principais marcas do mercado.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Todo nosso time passa por treinamentos constantes para garantir o 
                melhor serviço e atendimento aos nossos clientes.
              </p>
              <a
                href="https://wa.me/5511978025373?text=Olá,%20gostaria%20de%20conhecer%20mais%20sobre%20a%20equipe%20de%20técnicos.%20Pode%20me%20ajudar?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                <span>Conheça nossa equipe</span>
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

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="section-title uppercase mb-4">
              TRABALHAMOS COM AS PRINCIPAIS MARCAS
            </h3>
            <p className="section-subtitle">
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
                      className="h-16 w-auto object-contain max-w-full grayscale hover:grayscale-0 transition-all mx-auto"
                      loading="lazy"
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
