
import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="bg-white inline-block p-2 rounded-lg mb-4">
              <img 
                src="/lovable-uploads/399605cd-41a9-4f8c-ad77-2f7075c135aa.png" 
                alt="JetGas Logo" 
                className="h-16" 
              />
            </div>
            <p className="text-white/80 mb-6">
              Mais de 20 anos de experiência em manutenção de aquecedores, oferecendo serviços de qualidade com segurança e garantia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/jetgas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/jetgasaquecedores"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
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
                  <span className="mr-2">→</span>
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
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
                  <span className="mr-2">→</span>
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  Reparo de Aquecedores
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  Instalação de Aquecedores
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  Revisão de Segurança
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <span className="mr-2">→</span>
                  Troca de Peças
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="text-white/80">
                <strong className="text-white">Telefone:</strong> (11) 3461-8215
              </li>
              <li className="text-white/80">
                <strong className="text-white">WhatsApp:</strong> (11) 97802-5373
              </li>
              <li className="text-white/80">
                <strong className="text-white">Email:</strong> contatojetgasaquecedores@gmail.com
              </li>
              <li className="text-white/80">
                <strong className="text-white">Endereço:</strong> Av. Dória, 265 - Vila Alexandria, São Paulo - SP, CEP: 04635-070
              </li>
              <li className="text-white/80">
                <strong className="text-white">CNPJ:</strong> 15.287.880.0001.04
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
            <Link to="/politica-de-privacidade" className="text-white/80 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
