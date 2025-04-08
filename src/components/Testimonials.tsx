
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      location: "São Paulo, SP",
      rating: 5,
      content:
        "Excelente serviço! Tive um problema com meu aquecedor Rinnai, eles atenderam no mesmo dia e resolveram rapidamente. Super recomendo!",
      date: "2 meses atrás",
    },
    {
      name: "Mariana Costa",
      location: "Guarulhos, SP",
      rating: 5,
      content:
        "Meu aquecedor parou de funcionar em pleno inverno. A equipe da JetGas veio em menos de 2 horas e resolveu o problema. Profissionais excelentes!",
      date: "3 meses atrás",
    },
    {
      name: "Carlos Eduardo",
      location: "São Paulo, SP",
      rating: 5,
      content:
        "Contratei para fazer a manutenção preventiva do meu aquecedor Bosch. Serviço impecável, técnico muito atencioso e explicou tudo que estava fazendo.",
      date: "1 mês atrás",
    },
    {
      name: "Juliana Mendes",
      location: "Osasco, SP",
      rating: 4,
      content:
        "Serviço de qualidade, preço justo e atendimento pontual. Só não dou 5 estrelas porque demorou um pouco para agendarem a visita.",
      date: "2 semanas atrás",
    },
    {
      name: "Rodrigo Almeida",
      location: "Santo André, SP",
      rating: 5,
      content:
        "Empresa confiável e profissional. O técnico identificou e resolveu o problema do meu aquecedor Lorenzetti de forma rápida e eficiente.",
      date: "1 mês atrás",
    },
    {
      name: "Fernanda Rocha",
      location: "São Bernardo, SP",
      rating: 5,
      content:
        "Excelente experiência! Técnico chegou no horário, foi muito educado e resolveu o problema. Vou recomendar para todos os meus amigos.",
      date: "3 semanas atrás",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
          <p className="section-subtitle">
            Confira o depoimento de quem já utilizou nossos serviços de manutenção de aquecedores
          </p>

          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-6 w-6 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">4.9/5</span>
            </div>
            <span className="mx-4 text-gray-400">|</span>
            <span className="text-lg font-semibold">214 avaliações</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm card-hover"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex">{renderStars(testimonial.rating)}</div>
                <span className="text-sm text-gray-500">
                  {testimonial.date}
                </span>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/551144445555?text=Olá,%20gostaria%20de%20um%20atendimento"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <span>Seja o próximo cliente satisfeito</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
