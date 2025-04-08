
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-primary py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={isScrolled ? "/lovable-uploads/87207c08-bff1-463e-aa35-b51790cf768b.png" : "/lovable-uploads/9f85ef48-4eac-4004-ac16-dfd9eba6c3f6.png"} 
                alt="JetGas Logo" 
                className={`h-12 mr-2 ${isScrolled ? "" : ""}`} 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors`}
            >
              Início
            </a>
            <a
              href="#servicos"
              className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors`}
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors`}
            >
              Sobre Nós
            </a>
            <a
              href="#depoimentos"
              className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors`}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className={`${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors`}
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className={`h-5 w-5 ${isScrolled ? "text-secondary" : "text-white"} mr-2`} />
              <span className={`font-semibold ${isScrolled ? "text-primary" : "text-white"}`}>
                (11) 97802-5373
              </span>
            </div>
            <a
              href="#atendimento"
              className="btn-secondary"
            >
              Atendimento
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-primary" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-4">
            <a
              href="#inicio"
              className={`block ${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors py-2`}
              onClick={toggleMenu}
            >
              Início
            </a>
            <a
              href="#servicos"
              className={`block ${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors py-2`}
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className={`block ${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors py-2`}
              onClick={toggleMenu}
            >
              Sobre Nós
            </a>
            <a
              href="#depoimentos"
              className={`block ${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors py-2`}
              onClick={toggleMenu}
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className={`block ${isScrolled ? "text-primary" : "text-white"} hover:text-secondary font-medium transition-colors py-2`}
              onClick={toggleMenu}
            >
              Contato
            </a>
            <div className="flex items-center pt-2">
              <Phone className={`h-5 w-5 ${isScrolled ? "text-secondary" : "text-white"} mr-2`} />
              <span className={`font-semibold ${isScrolled ? "text-primary" : "text-white"}`}>
                (11) 97802-5373
              </span>
            </div>
            <a
              href="#atendimento"
              className="btn-secondary inline-block mt-2"
              onClick={toggleMenu}
            >
              Atendimento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
