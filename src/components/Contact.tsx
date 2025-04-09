
import React, { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare message for WhatsApp
      const assuntoText = formData.assunto === "orcamento" ? "orçamento" :
                         formData.assunto === "manutencao" ? "manutenção" :
                         formData.assunto === "duvida" ? "dúvidas" :
                         "assistência";

      const message = `Olá, meu nome é ${formData.nome}. 
Estou entrando em contato para ${assuntoText}. 
Telefone: ${formData.telefone}
Email: ${formData.email}
Mensagem: ${formData.mensagem}`;
      
      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      
      toast({
        title: "Redirecionando para WhatsApp",
        description: "Vamos te conectar com nossa equipe de atendimento.",
        variant: "default",
      });
      
      // Brief delay before opening WhatsApp
      setTimeout(() => {
        window.open(`https://wa.me/5511978025373?text=${encodedMessage}`, "_blank");
        
        // Reset form after submission
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: ""
        });
      }, 1000);
    } catch (error) {
      toast({
        title: "Erro ao processar",
        description: "Tente novamente mais tarde ou entre em contato por telefone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto iphone-safe-container">
        <div className="text-center mb-16">
          <h2 className="section-title uppercase">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender você e resolver qualquer problema com seu aquecedor
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="bg-accent rounded-xl p-8 shadow-custom h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Telefone</p>
                    <p className="text-muted mobile-text-wrap">(11) 3461-8215</p>
                    <p className="text-muted mobile-text-wrap">(11) 97802-5373 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-full">
                    <p className="font-semibold text-primary mb-1">Email</p>
                    <p className="text-muted mobile-text-wrap text-sm sm:text-base break-all">
                      contatojetgasaquecedores@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Horário de Atendimento</p>
                    <p className="text-muted mobile-text-wrap">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-muted mobile-text-wrap">
                      Sábados: 8h às 12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Endereço</p>
                    <p className="text-muted mobile-text-wrap">
                      Av. Dória, 265 - Vila Alexandria
                    </p>
                    <p className="text-muted mobile-text-wrap">
                      São Paulo - SP, CEP: 04635-070
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl p-8 shadow-custom">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Envie uma Mensagem
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Digite seu nome"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Digite seu email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select 
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                    required
                  >
                    <option value="" disabled>
                      Selecione o assunto
                    </option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="duvida">Dúvidas</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Digite sua mensagem..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-secondary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
