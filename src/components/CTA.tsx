
import React, { useState } from "react";
import { AlertCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackButtonClick, trackFormSubmit } from "@/utils/gtm";

const CTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    problema: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare WhatsApp message with form data
    const message = `Atendimento emergencial: Olá, meu nome é ${formData.nome}. Estou com o seguinte problema: ${formData.problema}. Meu telefone é ${formData.telefone}.`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Track form submission in GTM
    trackFormSubmit('emergencial_form', {
      contains_phone: formData.telefone.length > 0,
      contains_problem: formData.problema.length > 0
    });
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/5511978025373?text=${encodedMessage}`, "_blank");

    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato o mais breve possível.",
    });

    // Reset form
    setFormData({ nome: "", telefone: "", problema: "" });
  };

  return (
    <section id="atendimento" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              ATENDIMENTO EMERGENCIAL
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-lg">
              Não fique sem água quente! Nossos técnicos estão prontos para resolver seu problema com rapidez e eficiência.
            </p>

            <div className="bg-white/10 rounded-lg p-4 border border-white/20 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-1" />
                <p className="text-white/90">
                  Se você sente cheiro de gás, desligue imediatamente o registro, abra janelas e portas para ventilar o ambiente, e entre em contato conosco urgentemente!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="bg-white text-secondary py-2 px-4 rounded-lg font-semibold"
              >
                <span>Atendimento Emergencial</span>
              </div>
            </div>
          </div>

          <div className="md:w-5/12 bg-white rounded-xl shadow-custom overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Atendimento Emergencial
              </h3>
              <p className="text-muted mb-6">
                Preencha o formulário para atendimento emergencial
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone / WhatsApp"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Descreva seu problema"
                    name="problema"
                    value={formData.problema}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary bg-secondary hover:bg-secondary-light w-full flex items-center justify-center gap-2"
                  onClick={() => trackButtonClick('solicitar_atendimento', 'form_emergencial')}
                >
                  <span>Solicitar Atendimento Urgente</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
            <div className="bg-primary px-8 py-4">
              <p className="text-white text-center font-medium">
                Atendimento emergencial fora de horário comercial!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
