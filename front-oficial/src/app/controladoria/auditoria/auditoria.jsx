"use client";

const Institucional = () => {
  return (
    <section className="border-t border-[#FFC719] bg-[radial-gradient(circle_at_center,#E5EBEE,#073D7D)] pb-20 text-white">
      <div className="max-w-7xl mx-auto bg-[radial-gradient(circle_at_center,#2F70A5,#073D7D)] rounded-lg shadow-lg my-10 px-6 py-8 md:p-10">
        {/* Conteudo */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed montserrat-medium">
          A Auditoria tem como objetivo propor melhorias no desenvolvimento das
          atividades internas, orientando os gestores quanto a legalidade e
          utilização dos recursos, além de priorizar pela eficiência e eficácia
          da gestão pública municipal.
          <br />
          <br />
          A equipe de auditoria da Controladoria Geral tem a responsabilidade de
          realizar avaliações independentes e sistemáticas das atividades
          municipais, com o objetivo de avaliar a eficácia dos controles
          internos, a conformidade com as leis e regulamentos, bem como,
          identificar áreas de risco e oportunidades de melhoria.
        </p>
      </div>

      <div className="max-w-7xl bg-[#eeeff86d] border border-[#144D82] rounded-lg shadow-lg mx-auto my-10 p-6 md:p-8">
        <h3 className="text-2xl md:text-4xl text-center font-bold text-[#144D8A] mb-10">
          PRINCIPAIS PROJETOS
        </h3>

        {/* Sessão de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Controle na Rua */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/images/controladoria/rua.jpeg"
              alt="Projeto de Controle"
              className="w-4/5 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] rounded-full shadow-lg"
            />
            <div className="text-[#144D8A] text-center">
              <h4 className="text-lg md:text-2xl font-semibold mb-2">
                Controle na Rua
              </h4>
              <p className="text-sm md:text-base leading-relaxed max-w-xs">
                Acompanhamento da execução dos projetos estratégicos do
                município com a realização de visitas técnicas e emissão de
                relatórios.
              </p>
            </div>
          </div>

          {/* Programa de Capacitação */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/images/controladoria/fiscais.jpeg"
              alt="Programa de Capacitação"
              className="w-4/5 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] rounded-full shadow-lg"
            />
            <div className="text-[#144D8A] text-center">
              <h4 className="text-lg md:text-2xl font-semibold mb-2">
                Programa de Capacitação para Gestores de Contatos
              </h4>
              <p className="text-sm md:text-base leading-relaxed max-w-xs">
                Capacitar e qualificar o trabalho e atuação dos gestores e
                fiscais de contratos.
              </p>
            </div>
          </div>

          {/* Jaboatão Eficiente */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/images/controladoria/eficiente.jpeg"
              alt="Jaboatão Eficiente"
              className="w-4/5 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] rounded-full shadow-lg"
            />
            <div className="text-[#144D8A] text-center">
              <h4 className="text-lg md:text-2xl font-semibold mb-2">
                Jaboatão Eficiente
              </h4>
              <p className="text-sm md:text-base leading-relaxed max-w-xs">
                Auditorias com foco na redução da despesa e melhoria da
                qualidade do serviço público municipal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institucional;
