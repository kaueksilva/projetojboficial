"use client";

const Institucional = () => {
  return (
    <section className="border-t border-[#FFC719] bg-[radial-gradient(circle_at_center,#E5EBEE,#073D7D)] pb-20 text-white">
      <div className="max-w-7xl mx-auto bg-[radial-gradient(circle_at_center,#2F70A5,#073D7D)] rounded-lg shadow-lg my-10 px-6 py-8 md:p-10">
        {/* Conteudo */}
        <p className="text-base sm:text-lg md:text-xl leading-relaxed montserrat-medium text-left">
          Corregedoria Geral do município do Jaboatão dos Guararapes têm como atribuição zelar pela integridade funcional de agentes públicos, atuando na promoção da ética e da integridade no serviço público.
          <br />
          <br />
          O setor trabalha na apuração de irregularidades administrativas, investigando denúncias, conduzindo sindicâncias administrativas e aplicando sanções disciplinares quando necessário, além de propor medidas para padronizar procedimentos e sanar potenciais desvios de conduta ou práticas lesivas ao patrimônio público.
        </p>
      </div>

      <div className="max-w-7xl bg-[#eeeff86d] border border-[#144D82] rounded-lg shadow-lg mx-auto my-10 p-6 md:p-8">
        <h3 className="text-2xl md:text-4xl font-bold text-[#144D8A] mb-10 text-left">
          PRINCIPAIS PROJETOS
        </h3>

        {/* Sessão de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-start gap-4">
            <img
              src="/images/controladoria/integridade.jpeg"
              alt="Projeto de Controle"
              className="w-4/5 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] rounded-full shadow-lg aspect-square object-cover"
            />
            <div className="text-[#144D8A]">
              <h4 className="text-lg md:text-2xl font-semibold mb-2">
                Ações de Capacitação e Promoção da Integridade
              </h4>
              <p className="text-sm md:text-base leading-relaxed max-w-xs">
                Realiza palestras sobre o Código de Conduta do servidor, assédio moral, denúncias entre outros temas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <img
              src="/images/controladoria/publicos.jpeg"
              alt="Programa de Capacitação"
              className="w-4/5 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] rounded-full shadow-lg aspect-square object-cover"
            />
            <div className="text-[#144D8A]">
              <h4 className="text-lg md:text-2xl font-semibold mb-2">
                Acompanhamento da Prestação dos Serviços Públicos
              </h4>
              <p className="text-sm md:text-base leading-relaxed max-w-xs">
                Visitas conjuntas com a Ouvidoria para verificar a correta
                prestação de serviço por parte dos servidores e verificação{" "}
                <i> in loco</i> das denúncias recebidas.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <img
              src="/images/controladoria/lupa.jpeg"
              alt="Jaboatão Eficiente"
              className="w-4/5 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] rounded-full shadow-lg aspect-square object-cover"
            />
            <div className="text-[#144D8A]">
              <h4 className="text-lg md:text-2xl font-semibold mb-2">
                Investigação Preliminar Sumária
              </h4>
              <p className="text-sm md:text-base leading-relaxed max-w-xs">
                Procedimento inicial realizado pela administração pública para
                apurar indícios de irregularidades ou infrações cometidas por
                servidores públicos. O objetivo principal desse tipo de
                investigação é verificar se existem elementos suficientes que
                justifiquem a instauração de um PAD completo. Caso sejam
                encontrados indícios substanciais de irregularidades, o
                procedimento pode evoluir para um PAD, no qual serão observados
                os princípios do contraditório, ampla defesa e demais garantias
                legais para o servidor investigado.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <img
              src="/images/controladoria/punicao.jpeg"
              alt="Jaboatão Eficiente"
              className="w-4/5 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] rounded-full shadow-lg"
            />
            <div className="text-[#144D8A]">
              <h4 className="text-lg md:text-2xl font-semibold mb-2">
                Programa Conduta Consciente, Punição Ausente
              </h4>
              <p className="text-sm md:text-base leading-relaxed max-w-xs">
                O Programa Conduta Consciente busca promover um ambiente
                organizacional que valoriza a ética, o respeito e a
                responsabilidade. O destaque do programa é a notável ausência de
                um enfoque tradicionalmente direcionado às punições. Ao
                contrário, o mesmo destaca a importância de cultivar atitudes
                éticas onde a autorresponsabilidade é encorajada e aprimorada
                constantemente.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto my-10 p-6 md:p-8"> 
          <li className="text-xl font-semibold mb-2">LEGISLAÇÃO</li> 
          <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/02-ESTATUTO-DO-SERVIDOR-Lei-224-96.pdf" target="_blank" className="hover:underline hover:text-blue-300" >Estatuto do Servidor - Lei n° 224/96 </a><br/>      <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/DECRETO-No-11-2022-CODIGO-DE-CONDUTA-11.02.2022.pdf" target="_blank" className="hover:underline hover:text-blue-300" >Código de Conduta do Servidor - Decreto n° 11/2022</a>

          <br/><br/>
          
          <li className="text-xl font-semibold mb-2">MANUAIS E CARTILHAS INFORMATIVAS</li> 
          <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/MANUAL-PRATICO-DE-PROCESSO-ADMINISTRATIVO-DISCIPLINAR-E-SINDICANCIA.pdf" target="_blank" className="hover:underline hover:text-blue-300" >Manual Prático de Processo Administrativo Disciplinar</a><br/>
          <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/MANUAL-PRATICO-DO-CODIGO-DE-CONDUTA-FUNCIONAL-17.03.22.pdf" target="_blank" className="hover:underline hover:text-blue-300" >Manual Prático do Código de Conduta Funcional</a>
        </div>

        {/* <div>
          <iframe
            className="w-auto h-auto mx-auto"
            src="https://www.youtube.com/embed/0o8d3Z2Pn4c"
          />
        </div> */}
    </section>
  );
};

export default Institucional;
