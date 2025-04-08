
import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
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
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Telefone</p>
                    <p className="text-muted">(11) 3461-8215</p>
                    <p className="text-muted">(11) 97802-5373 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Email</p>
                    <p className="text-muted">contato@jetgas.com.br</p>
                    <p className="text-muted">atendimento@jetgas.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Horário de Atendimento</p>
                    <p className="text-muted">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-muted">
                      Sábados: 8h às 12h
                    </p>
                    <p className="text-muted font-medium">
                      Plantão 24h para emergências
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">Endereço</p>
                    <p className="text-muted">
                      Av. Paulista, 1000 - Bela Vista
                    </p>
                    <p className="text-muted">
                      São Paulo - SP, 01310-100
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

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Digite seu email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white">
                    <option value="" disabled selected>
                      Selecione o assunto
                    </option>
                    <option value="orcamento">Solicitar Orçamento</option>
                    <option value="manutencao">Manutenção</option>
                    <option value="emergencia">Atendimento de Emergência</option>
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Digite sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-secondary w-full"
                >
                  Enviar Mensagem
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
