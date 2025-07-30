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
      answer: "Toda a gestão e propriedade da publicação são da Dois Minutos. Como sócio fundador, você recebe 50% do lucro líquido gerado durante 1 ano."
    },
    {
      question: "O que está incluso no serviço?",
      answer: "A Dois Minutos é responsável por toda a estrutura de publicação: criação das histórias, publicação semanal, landing page, Instagram e materiais de divulgação."
    },
    {
      question: "Quais custos adicionais terei?",
      answer: "Nenhum. Toda a produção e gestão são feitas pela Dois Minutos. Você apenas investe como sócio fundador."
    },
    {
      question: "Quanto tempo leva a entrega?",
      answer: "A publicação entra no ar em até 1 semana após a confirmação como sócio fundador."
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
              Ganhe dinheiro vendendo histórias<br />
              <span className="text-[#D9731A]">e torne-se sócio fundador de uma publicação.</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Invista R$ 1.200,00 e torne-se sócio de uma publicação com 50% do lucro líquido durante 1 ano. A Dois Minutos cuida de tudo: histórias semanais, publicação, página, Instagram e publicidade.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfuvXRK7OCuDx8TBBHbXjh5Fc0zU5cMHIiyVeKSgqrpbrKc2Q/viewform?usp=header"
              target="_blank"
              className="bg-[#D9731A] hover:bg-[#BF3939] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quero ser sócio fundador
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
              Por que ser sócio fundador?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Além de lucrar com a venda de histórias, você tem prioridade para participar de futuras publicações e acesso total à estrutura da Dois Minutos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BF247A] to-[#812B8C] rounded-lg flex items-center justify-center mb-6">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Histórias semanais produzidas</h3>
              <p className="text-gray-600 leading-relaxed">
                A Dois Minutos produz de 5 a 15 histórias por semana com curadoria e qualidade profissional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#812B8C] to-[#2A2359] rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Landing Page e Instagram</h3>
              <p className="text-gray-600 leading-relaxed">
                Sua publicação terá presença digital com landing page profissional e perfil no Instagram gerenciado.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A2359] to-[#D9731A] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Participação nos Lucros</h3>
              <p className="text-gray-600 leading-relaxed">
                Você recebe 50% do lucro líquido da publicação por 1 ano e prioridade para renovar como sócio fundador.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D9731A] to-[#BF3939] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Investimento com Retorno</h3>
              <p className="text-gray-600 leading-relaxed">
                Com apenas R$ 1.200 você participa como sócio e começa a lucrar com um projeto estruturado e pronto pra escalar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BF3939] to-[#BF247A] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Vaga Limitada</h3>
              <p className="text-gray-600 leading-relaxed">
                Apenas alguns sócios fundadores serão aceitos por publicação, garantindo exclusividade e retorno mais direto.
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
