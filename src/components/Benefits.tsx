
import React from "react";
import { Clock, Award, BadgeCheck, Wrench, Zap, CalendarClock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Atendimento Rápido",
      description: "Equipe disponível para atendimento em até 2 horas em casos de emergência",
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      title: "Certificação",
      description: "Técnicos certificados com anos de experiência no mercado",
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-white" />,
      title: "Garantia",
      description: "Todos os serviços realizados possuem garantia de até 90 dias",
    },
    {
      icon: <Wrench className="h-10 w-10 text-white" />,
      title: "Peças Originais",
      description: "Trabalhamos apenas com peças originais de fábrica",
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Tecnologia",
      description: "Equipamentos modernos para diagnósticos precisos",
    },
    {
      icon: <CalendarClock className="h-10 w-10 text-white" />,
      title: "Manutenção Agendada",
      description: "Planos de manutenção preventiva com datas programadas",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase">
            POR QUE ESCOLHER A JETGAS?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Há mais de 20 anos no mercado, garantindo o melhor serviço em
            manutenção de aquecedores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary-light rounded-xl p-8 transition-all duration-300 hover:shadow-custom-lg hover:bg-secondary border border-white/10"
            >
              <div className="bg-secondary/20 p-4 rounded-full inline-block mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-light rounded-xl p-8 md:p-12 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                20 anos de experiência em manutenção de aquecedores
              </h3>
              <p className="text-white/80 mb-4">
                A JetGas se orgulha de ser uma empresa com mais de duas décadas de atuação no mercado, 
                oferecendo serviços de alta qualidade em manutenção, instalação e reparo de aquecedores.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-white/80">
                    Mais de 10.000 clientes atendidos
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-white/80">
                    Equipe técnica especializada
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span className="text-white/80">
                    Satisfação garantida ou seu dinheiro de volta
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 md:pl-8 flex justify-center md:justify-end">
              <div className="bg-white p-6 rounded-xl text-center">
                <div className="text-5xl font-bold text-secondary">20+</div>
                <p className="font-semibold text-primary">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
