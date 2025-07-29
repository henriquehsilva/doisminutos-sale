import React, { useState } from 'react';
import { ChevronDown, Edit3, Globe, BarChart3, Shield, Users, CheckCircle } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "E se eu quiser sair depois de um tempo?",
      answer: "Nosso contrato é flexível. Você pode encerrar a parceria a qualquer momento com aviso prévio de 30 dias. As histórias já publicadas permanecem na plataforma com os devidos créditos."
    },
    {
      question: "Como funciona a divisão de assinaturas?",
      answer: "A divisão é 50/50 sobre a receita líquida das assinaturas, quando há participação. Caso o projeto seja 100% operado pela Dois Minutos, o valor é repassado integralmente para a produtora."
    },
    {
      question: "Quem cria as histórias?",
      answer: "Todas as histórias são criadas pela equipe da Dois Minutos, com ou sem personalização baseada no perfil do cliente. Usamos inteligência artificial com direção editorial humana."
    },
    {
      question: "Posso usar em outras plataformas?",
      answer: "Não. As histórias criadas pela Dois Minutos são publicadas exclusivamente em nossa plataforma. Republicações externas não são permitidas, mesmo com personalização."
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
              Publique como autor.<br />
              <span className="text-[#D9731A]">Produzimos como produtora.</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              Estrutura criativa completa para você publicar no Substack com qualidade profissional e retorno financeiro.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuvXRK7OCuDx8TBBHbXjh5Fc0zU5cMHIiyVeKSgqrpbrKc2Q/viewform?usp=header" 
              target="_blank"
              className="bg-[#D9731A] hover:bg-[#BF3939] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Quero começar agora
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
              O que você recebe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma estrutura completa para você focar no que faz de melhor: criar histórias incríveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BF247A] to-[#812B8C] rounded-lg flex items-center justify-center mb-6">
                <Edit3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Criação Semanal</h3>
              <p className="text-gray-600 leading-relaxed">
                5 a 15 histórias por semana com roteirização, edição e curadoria profissional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#812B8C] to-[#2A2359] rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Landing Page</h3>
              <p className="text-gray-600 leading-relaxed">
                Landing page personalizada para apresentação profissional do seu perfil de autor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2A2359] to-[#D9731A] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Plataforma Segura</h3>
              <p className="text-gray-600 leading-relaxed">
                Publicação em plataforma segura e escalável através do Substack.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D9731A] to-[#BF3939] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Gestão Financeira</h3>
              <p className="text-gray-600 leading-relaxed">
                Gestão financeira completa e prestação de contas mensais transparente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#BF3939] to-[#BF247A] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Marketing Digital</h3>
              <p className="text-gray-600 leading-relaxed">
                Publicidade estratégica no Instagram com conteúdo profissional incluso.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#812B8C] to-[#BF247A] rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#2A2359] mb-3">Suporte Completo</h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhamento editorial e técnico para você focar apenas na criação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2359] mb-4">
              Modelo Comercial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investimento inicial baixo e participação justa nos resultados
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-[#2A2359] to-[#812B8C] text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Investimento</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <span className="text-lg">Investimento inicial único:</span>
                  <span className="text-2xl font-bold text-[#D9731A]">R$ 5.000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg">Participação de receita:</span>
                  <span className="text-2xl font-bold text-[#D9731A]">50%</span>
                </div>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Sem mensalidade fixa após o setup. A produtora só ganha junto com o autor.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#2A2359] mb-6">Planos para Leitores</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-lg text-gray-700">Mensal</span>
                  <span className="text-xl font-bold text-[#BF247A]">R$ 14,90</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-lg text-gray-700">Anual</span>
                  <span className="text-xl font-bold text-[#812B8C]">R$ 99,90</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#D9731A] to-[#BF3939] text-white rounded-lg">
                  <span className="text-lg font-semibold">Membro Fundador</span>
                  <span className="text-xl font-bold">R$ 200,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Worth Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2A2359] mb-4">
              Por que vale esse investimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais do que um serviço, uma verdadeira parceria para o seu sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#BF247A] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2A2359] mb-2">Time Criativo Dedicado</h3>
                  <p className="text-gray-600">
                    Equipe profissional com produção semanal contínua, garantindo consistência e qualidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#812B8C] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2A2359] mb-2">Foco no Essencial</h3>
                  <p className="text-gray-600">
                    Você foca no conteúdo enquanto cuidamos de toda a estrutura técnica e comercial.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#D9731A] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2A2359] mb-2">Transparência Total</h3>
                  <p className="text-gray-600">
                    Prestação de contas transparente com acompanhamento mensal detalhado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#BF3939] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2A2359] mb-2">Escalabilidade</h3>
                  <p className="text-gray-600">
                    Possibilidade de escalar público e receita com apoio editorial e técnico completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-[#2A2359] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Segurança e Confiabilidade
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Sua tranquilidade é nossa prioridade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#BF247A] to-[#D9731A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plataforma Consolidada</h3>
              <p className="opacity-90">
                Utilizamos Substack + Stripe, plataformas líderes mundiais em segurança e confiabilidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#812B8C] to-[#BF247A] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Relatórios Claros</h3>
              <p className="opacity-90">
                Relatórios mensais detalhados com métricas completas e transparência total.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D9731A] to-[#BF3939] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contrato Justo</h3>
              <p className="opacity-90">
                Contrato de coparticipação simples, justo e com total transparência nas condições.
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
              Entenda os detalhes da nossa proposta
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

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#2A2359] via-[#812B8C] to-[#BF247A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl opacity-90">
              Preencha nosso formulário de interesse para dar o primeiro passo
            </p>
          </div>
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfuvXRK7OCuDx8TBBHbXjh5Fc0zU5cMHIiyVeKSgqrpbrKc2Q/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#BF247A] text-white font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-[#812B8C] transition-colors duration-200"
            >
              Preencher formulário
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2359] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dois Minutos</h3>
            <p className="text-lg opacity-90 mb-6">Histórias com impacto</p>
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