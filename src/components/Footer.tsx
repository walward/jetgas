
import React from "react";
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">JetGas</h3>
            <p className="text-white/80 mb-6">
              Mais de 20 anos de experiência em manutenção de aquecedores, oferecendo serviços de qualidade com segurança e garantia.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Reparo de Aquecedores
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Instalação de Aquecedores
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Revisão de Segurança
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Troca de Peças
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="text-white/80">
                <strong className="text-white">Telefone:</strong> (11) 4444-5555
              </li>
              <li className="text-white/80">
                <strong className="text-white">WhatsApp:</strong> (11) 98765-4321
              </li>
              <li className="text-white/80">
                <strong className="text-white">Email:</strong> contato@jetgas.com.br
              </li>
              <li className="text-white/80">
                <strong className="text-white">Endereço:</strong> Av. Paulista, 1000 - Bela Vista, São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/80">
              © {new Date().getFullYear()} JetGas. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
