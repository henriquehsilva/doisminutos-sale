import React, { useState } from 'react';
import { ChevronDown, Edit3, Globe, BarChart3, Shield, Users, CheckCircle } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Quem ficará com as assinaturas?",
      answer: "Você ficará com 100% da receita das assinaturas. Todo o sistema é entregue configurado para sua titularidade."
    },
    {
      question: "O que está incluso no serviço?",
      answer: "Entregamos toda a estrutura de publicação, configuração da plataforma, design e suporte editorial. Também oferecemos um treinamento completo para você criar e publicar histórias em menos de 5 minutos."
    },
    {
      question: "Quais custos adicionais terei?",
      answer: "Você será responsável pelos custos com o uso do GPT e da plataforma Hedra, caso deseje utilizá-las."
    },
    {
      question: "Quanto tempo leva a entrega?",
      answer: "Todo o processo de implantação, configuração e treinamento é realizado em apenas 1 dia."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2A2359] via-[#812B8C] to-[#BF247A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Crie sua própria publicação de histórias<br />
              <span className="text-[#D9731A]">com estrutura pronta e 100% de receita pra você.</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Em apenas 1 dia você terá sua publicação ativa, com landing page, sistema configurado e suporte completo. Ideal para quem quer ganhar com histórias e IA sem depender de terceiros.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfuvXRK7OCuDx8TBBHbXjh5Fc0zU5cMHIiyVeKSgqrpbrKc2Q/viewform?usp=header"
              target="_blank"
              className="bg-[#D9731A] hover:bg-[#BF3939] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quero minha estrutura pronta
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2359] mb-4">
              O que está incluso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para publicar histórias e gerar receita com autonomia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BF247A] to-[#812B8C] rounded-lg flex items-center justify-center mb-6">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Configuração Completa</h3>
              <p className="text-gray-600 leading-relaxed">
                Toda a estrutura do Substack, domínios, identidade visual, automações e integrações configuradas pra você.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#812B8C] to-[#2A2359] rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Landing Page Profissional</h3>
              <p className="text-gray-600 leading-relaxed">
                Criação de uma página personalizada para promover sua publicação e captar leitores.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A2359] to-[#D9731A] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Treinamento de IA</h3>
              <p className="text-gray-600 leading-relaxed">
                Aprenda a usar inteligência artificial com curadoria para criar e publicar histórias em menos de 5 minutos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D9731A] to-[#BF3939] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Suporte Técnico</h3>
              <p className="text-gray-600 leading-relaxed">
                Orientação completa durante e após a implantação para garantir seu sucesso.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BF3939] to-[#BF247A] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Você no Controle</h3>
              <p className="text-gray-600 leading-relaxed">
                Toda a conta, plataforma e receita são seus. Você terá 100% de autonomia e propriedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2359] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre o serviço
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-[#2A2359]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#812B8C] transition-transform duration-200 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2359] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dois Minutos</h3>
            <p className="text-lg opacity-90 mb-6">Histórias com impacto. Estrutura com eficiência.</p>
            <p className="text-sm opacity-70">
              © 2025 Dois Minutos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
