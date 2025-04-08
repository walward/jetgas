
import React from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  content: string;
}

const Testimonials = () => {
  // Fixed testimonials from real customers
  const reviews: Review[] = [
    {
      name: "Sandra L. F.",
      rating: 5,
      content: "Fui muito bem atendida tanto pela Camila, com quem solicitei informações e fiz agendamento, quanto pelo Sr. José Felipe, que fez o conserto do meu aquecedor. Ótimo trabalho, já sou cliente há muitos anos, recomendo!",
    },
    {
      name: "Jeferson O.",
      rating: 5,
      content: "Um trabalho excelente gostei muito do atendimento, super educados, profissionais, fizeram o serviço deixaram tudo limpinho, foi uma indicação, e eu recomendo, ótimo trabalho.",
    },
    {
      name: "João Roberto dos S. P.",
      rating: 5,
      content: "Tenho um Aquecedor Alemão Junkers há 20 anos, sempre faço manutenção com essa empresa. Hoje fiz manutenção e troca de válvula de gás e a retirada do Aquecedor para levar para outro imóvel com o técnico José Edinaldo Brandão, que fez um serviço perfeito.",
    },
    {
      name: "Vanessa C.",
      rating: 5,
      content: "Excelente atendimento. Prestativos, atenciosos e rapidos, além do custo ser justo.",
    },
    {
      name: "Paulo A.",
      rating: 5,
      content: "Rápido e eficiente atendimento. Não é o mais em conta, mas, transmite segurança/conhecimento e garantia.",
    },
    {
      name: "Danilo D.",
      rating: 5,
      content: "Liguei para os serviços na noite e já no dia seguinte foi executado. Top, pessoal sério e profissional, custo benefício correto.",
    },
  ];

  const averageRating = 4.8;
  const totalReviews = 124; // Updated to show 124 reviews

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

  const googleReviewsUrl = "https://www.google.com/search?sca_esv=540de929b15f835b&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzYiPzx8gAwHPWCQefAmBY0Sy_JSU1qT3F4pv9JXQSYl9LZQ159ineDAbmZRgqPkPbXdQP9-yDy1gxCC8ER4eB400xrL2IIl9d4HDS1en1Bg_ZcDmPA%3D%3D&q=JetG%C3%A1s+Aquecedores+Coment%C3%A1rios&sa=X&ved=2ahUKEwjBqOrQu8mMAxVaOrkGHfFZOBYQ0bkNegQILBAE&biw=1396&bih=663&dpr=1.38";

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title uppercase">O QUE NOSSOS CLIENTES DIZEM</h2>
          <p className="section-subtitle">
            Confira o depoimento de quem já utilizou nossos serviços de manutenção de aquecedores
          </p>

          <div className="flex justify-center items-center mt-6">
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 ${
                      star <= Math.round(averageRating) 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-lg font-semibold">{averageRating.toFixed(1)}/5</span>
            </div>
            <span className="mx-4 text-gray-400">|</span>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:underline text-primary transition-colors">
              {totalReviews} avaliações
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-700 mb-6 min-h-[80px]">"{review.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{review.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5511978025373?text=Olá,%20estou%20precisando%20de%20assistência%20técnica%20para%20meu%20aquecedor.%20Pode%20me%20ajudar?"
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
