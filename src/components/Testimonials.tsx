
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

// Declaração de tipos para a API do Google Maps
declare global {
  interface Window {
    google?: {
      maps: {
        Map: any;
        places: {
          PlacesService: any;
          PlacesServiceStatus: {
            OK: string;
            // ... outros status
          };
        };
      };
    };
  }
}

interface Review {
  name: string;
  location: string;
  rating: number;
  content: string;
  date: string;
  photoUrl?: string;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  
  // Avaliações de backup caso a API do Google não funcione
  const fallbackReviews = [
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

  useEffect(() => {
    // Função para buscar as avaliações do Google
    const fetchGoogleReviews = () => {
      try {
        if (window.google && window.google.maps && window.google.maps.places) {
          console.log("API do Google Maps disponível, buscando avaliações...");
          
          // Criar um elemento div temporário para o serviço do Places
          const mapDiv = document.createElement("div");
          const map = new window.google.maps.Map(mapDiv);
          const service = new window.google.maps.places.PlacesService(map);
          
          // ID do local da JetGas no Google
          // Este é um ID de exemplo, substitua pelo ID real da empresa
          const placeId = "ChIJRW6Z1VtPzpQRg-ZnhmIs3l0";
          
          service.getDetails(
            {
              placeId: placeId,
              fields: ["reviews", "rating", "user_ratings_total"],
            },
            (place: any, status: any) => {
              if (
                status === window.google.maps.places.PlacesServiceStatus.OK &&
                place &&
                place.reviews
              ) {
                const googleReviews = place.reviews.map((review: any) => {
                  // Converter data de timestamp para "X tempo atrás"
                  const reviewDate = new Date(review.time * 1000);
                  const now = new Date();
                  const diffMs = now.getTime() - reviewDate.getTime();
                  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
                  
                  let dateStr = "";
                  if (diffDays < 7) {
                    dateStr = `${diffDays} dias atrás`;
                  } else if (diffDays < 30) {
                    dateStr = `${Math.floor(diffDays / 7)} semanas atrás`;
                  } else {
                    dateStr = `${Math.floor(diffDays / 30)} meses atrás`;
                  }
                  
                  return {
                    name: review.author_name,
                    location: "Cliente Google",
                    rating: review.rating,
                    content: review.text,
                    date: dateStr,
                    photoUrl: review.profile_photo_url,
                  };
                });

                setReviews(googleReviews);
                setAverageRating(place.rating || 4.9);
                setTotalReviews(place.user_ratings_total || googleReviews.length);
                console.log("Avaliações do Google carregadas com sucesso:", googleReviews);
              } else {
                console.log("Erro ao buscar avaliações do Google:", status);
                setReviews(fallbackReviews);
                setAverageRating(4.9);
                setTotalReviews(fallbackReviews.length);
              }
              setLoading(false);
            }
          );
        } else {
          console.log("API do Google Maps não disponível, usando avaliações de backup");
          setReviews(fallbackReviews);
          setAverageRating(4.9);
          setTotalReviews(fallbackReviews.length);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao carregar avaliações do Google:", error);
        setReviews(fallbackReviews);
        setAverageRating(4.9);
        setTotalReviews(fallbackReviews.length);
        setLoading(false);
      }
    };

    // Verificar se o Google Maps já está carregado
    if (window.google && window.google.maps) {
      fetchGoogleReviews();
    } else {
      // Se não estiver carregado, espere pelo evento que indica que foi carregado
      const handleGoogleMapsLoaded = () => {
        fetchGoogleReviews();
      };
      
      window.addEventListener('google-maps-loaded', handleGoogleMapsLoaded);
      
      // Limpar o event listener quando o componente for desmontado
      return () => {
        window.removeEventListener('google-maps-loaded', handleGoogleMapsLoaded);
      };
    }
  }, []);

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
            <span className="text-lg font-semibold">{totalReviews} avaliações</span>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm card-hover"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-gray-500">
                    {review.date}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 min-h-[80px]">"{review.content}"</p>
                <div className="flex items-center">
                  {review.photoUrl ? (
                    <img 
                      src={review.photoUrl} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div className="ml-3">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
