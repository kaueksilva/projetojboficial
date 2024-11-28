"use client";

const Institucional = () => {
  return (
    <section className="border-t border-[#FFC719] bg-[radial-gradient(circle_at_center,#E5EBEE,#073D7D)] pb-[100px] text-white">
      <div className="max-w-7xl mx-auto bg-[radial-gradient(circle_at_center,#2F70A5,#073D7D)] rounded-lg shadow-lg my-20 p-8 ">
        {/* Conteudo */}
        <p className="text-base leading-relaxed mb-4 montserrat-medium">
          A macro função de controle interno desempenha um papel fundamental na
          gestão pública, garantindo a transparência, eficiência e a eficácia
          das ações governamentais. Por meio do controle interno, é possível
          identificar e corrigir desvios, prevenir irregularidades, aprimorar a
          eficiência das operações, garantir a conformidade com leis e
          regulamentos. <br />
          <br />
          Entre as principais atividades desenvolvidas pela macro função de
          Controle Interno estão: <br />
          <br />
        </p>
        <ul className="list-disc pl-6">
          <li>Monitoramento da execução orçamentária e financeira;</li>
          <li>Proposição de medidas preventivas e corretivas;</li>
          <li>Verificação da regularidade dos atos administrativos;</li>
          <li>Acompanhamento da gestão de pessoal;</li>
          <li>
            Avaliação da conformidade das operações com as normas e diretrizes
          </li>
        </ul>
      </div>

      <div className="max-w-7xl bg-[#eeeff86d] border border-[#144D82] rounded-lg shadow-lg mx-auto my-10 p-8">
        <h3 className="text-4xl justify-center text-center mb-10 Montserrat-SemiBold font-bold text-[#144D8A] ">
          PRINCIPAIS PROJETOS
        </h3>

        {/* Sessão de Projetos */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mb-16">
            {/* Imagem */}
            <img
              src="/images/controladoria/ilegal.png"
              alt="Projeto de Controle"
              className="w-3/5 rounded-full shadow-lg"
            />
            {/* Texto */}
            <div className="text-[#144D8A]">
              <h4 className="text-2xl mb-2 montserrat-semibold">
                JABOATÃO DETECTA
              </h4>
              <p className="leading-relaxed mb-4">
                Trata-se de estudo de acumulação ilegal de cargos públicos, com
                o objetivo de garantir a legalidade, a eficiência e a ética na
                gestão dos recursos humanos do município, evitando práticas que
                possam onerar a gestão e comprometer a qualidade dos serviços
                públicos prestados.
              </p>
              <ul className="list-disc pl-6">
                <li className="hover:underline">
                  {" "}
                  <a
                    href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/IN-002.2024-Acumulo-de-Cargos-correta.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTRUÇÃO NORMATIVA CGM Nº 002/2024 – Orientação sobre
                    acúmulo ilegal de cargos públicos.
                  </a>
                </li>
                <li className="hover:underline">
                  <a
                    href="https://portaldatransparencia.jaboatao.pe.gov.br/wp-content/uploads/2024/05/02.-Guia-Acumulo-de-Cargos-Final-17.05.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guia de Orientação – Acúmulo de Cargos no Serviço Público.
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mb-16">
            {/* Imagem */}
            <img
              src="/images/controladoria/acompanhamento.png"
              alt="Projeto de Controle"
              className="w-3/5 rounded-full shadow-lg"
            />
            {/* Texto */}
            <div className="text-[#144D8A]">
              <h4 className="text-2xl mb-2 montserrat-semibold">
                  ACOMPANHAMENTO DOS ÍNDICES CONSTITUCIONAIS
              </h4>
              <p className="leading-relaxed mb-4">
              O trabalho de acompanhamento dos índices constitucionais consiste no monitoramento das despesas em áreas estratégicas como saúde, educação, pessoal, publicidade, duodécimo entre outros dispostos na Constituição Federal. O monitoramento é desenvolvido de forma preventiva a fim de garantir eficiência e transparência no uso dos recursos, promovendo uma gestão financeira responsável e alinhada aos princípios da administração pública. 
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mb-16">
            {/* Imagem */}
            <img
              src="/images/controladoria/homem.png"
              alt="Projeto de Controle"
              className="w-3/5 rounded-full shadow-lg"
            />
            {/* Texto */}
            <div className="text-[#144D8A]">
              <h4 className="text-2xl mb-2 montserrat-semibold">
                MONITORAMENTO DA REGULARIDADE FISCAL DO MUNICÍPIO
              </h4>
              <p className="leading-relaxed mb-4">
              O controle da regularidade fiscal do município é realizado de maneira contínua, visando garantir o cumprimento de todas as obrigações fiscais e legais. Além disso, realizamos o acompanhamento das prestações de contas dos convênios federais e estaduais, assegurando a correta utilização dos recursos públicos. 
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Imagem */}
            <img
              src="/images/controladoria/familia.jpg"
              alt="Projeto de Controle"
              className="w-3/5 rounded-full shadow-lg"
            />
            {/* Texto */}
            <div className="text-[#144D8A]">
              <h4 className="text-2xl mb-2 montserrat-semibold">
                ECONOMIA RESPONSÁVEL
              </h4>
              <p className="leading-relaxed mb-4">
              É realizada o monitoramento e análise dos gastos mensais em contas fixas (água, luz, telefone e internet), com objetivo de verificar se estão alinhados com as necessidades e orçamento previsto, garantindo uma gestão eficiente e uso adequado dos recursos públicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institucional;
