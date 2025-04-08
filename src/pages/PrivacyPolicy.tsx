
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Política de Privacidade</h1>
          
          <div className="prose max-w-full">
            <p className="mb-4">
              Esta Política de Privacidade descreve como a JetGas Aquecedores coleta, usa e compartilha suas informações pessoais quando você utiliza nosso site ou nossos serviços.
            </p>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">1. Informações que coletamos</h2>
            <p className="mb-4">
              Coletamos informações que você nos fornece diretamente quando:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Preenche formulários em nosso site</li>
              <li>Contata-nos por telefone, e-mail ou WhatsApp</li>
              <li>Solicita orçamentos ou serviços</li>
              <li>Se inscreve em nossa newsletter</li>
            </ul>
            <p className="mb-4">
              Estas informações podem incluir seu nome, endereço, número de telefone, e-mail e detalhes sobre o serviço que você está procurando.
            </p>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">2. Como usamos suas informações</h2>
            <p className="mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar e responder às suas solicitações, perguntas e comentários</li>
              <li>Enviar informações técnicas, atualizações e mensagens administrativas</li>
              <li>Comunicar sobre promoções, eventos e outras notícias sobre serviços oferecidos por nós</li>
            </ul>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">3. Compartilhamento de informações</h2>
            <p className="mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento. Podemos compartilhar suas informações nas seguintes situações:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Com prestadores de serviços que trabalham em nosso nome</li>
              <li>Para cumprir obrigações legais</li>
              <li>Para proteger direitos e propriedades da JetGas Aquecedores</li>
            </ul>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">4. Proteção de dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de suas informações.
            </p>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">5. Seus direitos</h2>
            <p className="mb-4">
              Você tem o direito de acessar, corrigir ou excluir seus dados pessoais. Se você deseja exercer esses direitos, entre em contato conosco através dos canais informados abaixo.
            </p>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">6. Cookies e tecnologias semelhantes</h2>
            <p className="mb-4">
              Nosso site pode usar cookies e tecnologias semelhantes para melhorar sua experiência, entender como você interage com nosso site e personalizar o conteúdo.
            </p>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">7. Alterações nesta política</h2>
            <p className="mb-4">
              Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.
            </p>

            <h2 className="text-xl font-bold text-primary mt-6 mb-3">8. Contato</h2>
            <p className="mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
            </p>
            <div className="mb-8">
              <p><strong>Nome:</strong> JetGas Aquecedores</p>
              <p><strong>CNPJ:</strong> 15.287.880.0001.04</p>
              <p><strong>Telefone:</strong> (11) 3461-8215</p>
              <p><strong>WhatsApp:</strong> (11) 97802-5373</p>
              <p><strong>E-mail:</strong> contatojetgasaquecedores@gmail.com</p>
              <p><strong>Endereço:</strong> Av. Dória, 265 - Vila Alexandria, São Paulo - SP, CEP: 04635-070</p>
            </div>

            <p className="text-sm text-gray-500">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;
