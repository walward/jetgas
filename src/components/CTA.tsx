
import React from "react";
import { AlertCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="atendimento" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Emergência com seu aquecedor?
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
              <a
                href="https://wa.me/551144445555?text=EMERGÊNCIA:%20Preciso%20de%20assistência%20urgente%20com%20meu%20aquecedor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-secondary hover:bg-gray-100 flex items-center justify-center gap-2"
              >
                <span>Atendimento de Emergência</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:w-5/12 bg-white rounded-xl shadow-custom overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Plantão 24h
              </h3>
              <p className="text-muted mb-6">
                Preencha o formulário para atendimento prioritário
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nome"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefone / WhatsApp"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Descreva seu problema"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary bg-secondary hover:bg-secondary-light w-full flex items-center justify-center gap-2"
                >
                  <span>Solicitar Atendimento Urgente</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
            <div className="bg-primary px-8 py-4">
              <p className="text-white text-center font-medium">
                Atendimento prioritário em até 2 horas*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
