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
  
  // Dados das marcas de aquecedores com os novos logos
  const brands = [
    {name: "Bosch", logo: "/lovable-uploads/92a4e8f5-f20a-4741-8dc2-d3593bef72d5.png"},
    {name: "Kent Aquecedores", logo: "/lovable-uploads/f96be191-abe0-49e7-bb5a-eee6b46b47cb.png"},
    {name: "Cosmopolita", logo: "/lovable-uploads/b4186465-cf27-46a4-b5bc-5763b559d4c0.png"},
    {name: "Cumulus", logo: "/lovable-uploads/867d4b55-bf9b-45ce-bd79-6d89e2a2585e.png"},
    {name: "Equibrás", logo: "/lovable-uploads/7b026058-8751-4537-9edf-dc3e5dd413e3.png"},
    {name: "General Heater", logo: "/lovable-uploads/06c9eea8-b9c4-45a7-bfc0-98f434e0b294.png"},
    {name: "Hydratec", logo: "/lovable-uploads/60159a83-1cf5-4271-9d0a-1bb789c80727.png"},
    {name: "Heliotek", logo: "/lovable-uploads/9279c7d9-7b6c-48a9-a2f1-8207d23613f6.png"},
    {name: "Inova", logo: "/lovable-uploads/ad3c2f54-751c-42c1-9646-40567ac372b5.png"},
    {name: "Junkers", logo: "/lovable-uploads/9b35d246-931d-4c15-b664-3822b075ba67.png"},
    {name: "Komeco", logo: "/lovable-uploads/96a6fe5a-2dd5-40c3-ab3b-f55a679c38c9.png"},
    {name: "Lorenzetti", logo: "/lovable-uploads/b8f9b544-10f8-4ea4-9243-806ca608c4fd.png"},
    {name: "Nordik", logo: "/lovable-uploads/2a6964da-2e70-41e0-a44a-d60f7303e027.png"},
    {name: "Orbis", logo: "/lovable-uploads/7db72933-76d7-430e-a543-5b408ebb14d6.png"},
    {name: "Rheem", logo: "/lovable-uploads/85ebdb68-df59-44ff-ad38-e9db4fb8ab07.png"},
    {name: "Rinnai", logo: "/lovable-uploads/d7f17110-d452-4fe4-a33e-daa6590b5d86.png"},
    {name: "Sakuratec", logo: "/lovable-uploads/e6adb175-8f02-4108-9b1f-8c1eb3f7478f.png"},
    {name: "Thermotini", logo: "/lovable-uploads/0adb630f-09f2-45da-9622-d76ebef2774b.png"},
    {name: "Yume", logo: "/lovable-uploads/55efb327-b585-4eae-8f4a-5a7e0858738d.png"},
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
                      className="h-24 w-auto object-contain max-w-full grayscale hover:grayscale-0 transition-all mx-auto"
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
