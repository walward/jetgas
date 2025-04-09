
import React, { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  const defaultMessage = "Olá, gostaria de solicitar um orçamento. Pode me ajudar?";
  const encodedMessage = encodeURIComponent(defaultMessage);

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare WhatsApp message with form data
    const message = `Olá, meu nome é ${formData.nome}. Estou interessado(a) em ${formData.servico || "serviços de aquecedor"}. Meu telefone é ${formData.telefone}.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/5511978025373?text=${encodedMessage}`, "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-br from-primary to-primary-light overflow-hidden"
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMmExIDEgMCAwIDEgMCAySDM4YTIgMiAwIDAgMS0yLTJtMC0xMmMwLTEuMS45LTIgMi0yaDEyYTEgMSAwIDAgMSAwIDJIMzhhMiAyIDAgMCAxLTItMm0tMTIgMGMwLTEuMS45LTIgMi0yaDEyYTEgMSAwIDAgMSAwIDJIMjZhMiAyIDAgMCAxLTItMm0wIDEyYzAtMS4xLjktMiAyLTJoMTJhMSAxIDAgMCAxIDAgMkgyNmEyIDIgMCAwIDEtMi0yIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto iphone-safe-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 text-white">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-semibold whitespace-normal sm:whitespace-nowrap mobile-text-wrap">
                Mais de 20 anos atendendo com excelência
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 uppercase mobile-text-wrap">
              MANUTENÇÃO DE AQUECEDORES COM{" "}
              <span className="text-secondary">SEGURANÇA E QUALIDADE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-lg mobile-text-wrap">
              Especialistas em manutenção, instalação e conserto de aquecedores das principais marcas com atendimento rápido e eficiente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/5511978025373?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 text-lg"
              >
                <span className="mobile-text-wrap">Solicitar orçamento</span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
              <a href="#servicos" className="btn-primary bg-white/20 hover:bg-white/30 text-lg">
                <span className="mobile-text-wrap">Ver serviços</span>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                <span className="text-white font-medium mobile-text-wrap">Assistência técnica especializada</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                <span className="text-white font-medium mobile-text-wrap">Técnicos certificados</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                <span className="text-white font-medium mobile-text-wrap">Garantia nos serviços</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-secondary mr-2 flex-shrink-0" />
                <span className="text-white font-medium mobile-text-wrap">Peças originais</span>
              </div>
            </div>
          </div>

          <div className="md:w-5/12 relative">
            <div className="bg-white p-6 rounded-xl shadow-custom-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Precisando de assistência técnica?
              </h3>
              <p className="text-muted mb-6">
                Preencha o formulário abaixo e solicite um orçamento
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone / WhatsApp"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <select 
                    name="servico"
                    value={formData.servico}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                    required
                  >
                    <option value="" disabled>
                      Selecione o serviço
                    </option>
                    <option value="manutenção de aquecedor">Manutenção</option>
                    <option value="instalação de aquecedor">Instalação</option>
                    <option value="conserto de aquecedor">Conserto</option>
                    <option value="outro serviço de aquecedor">Outro</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn-secondary w-full flex items-center justify-center gap-2"
                >
                  <span>Solicitar contato</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-5 -right-5 bg-secondary text-white px-4 py-2 rounded-lg shadow-lg transform rotate-6 animate-pulse-light hidden md:block">
              <p className="font-bold">20+ anos de experiência</p>
            </div>
            <div className="absolute -bottom-5 -left-5 bg-primary text-white px-4 py-2 rounded-lg shadow-lg transform -rotate-3 animate-pulse-light hidden md:block">
              <p className="font-bold">Orçamento sem compromisso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
