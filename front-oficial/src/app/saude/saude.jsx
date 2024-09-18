'use client';

const Saude = () => {
    return (
      <div>
  
        <div className="relative w-full h-screen flex items-center justify-center">
          <img
            src= "../../images/saude.jpg"
            alt="background"
            className="absolute inset-0 w-full h-screen object-cover"
          />
          
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#59C7F7,#003476)] opacity-60"/>
            
            <div className="z-10 text-center text-white px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold futura-heavy futura-pt-heavy">
                SECRETARIA DE SAÚDE
              </h1>
            <div className="border-t-2 border-white my-4 w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto"/>

            <button 
            onClick={() => (window.location.href = "../ppp")}
            className="roboto-medium text-xl border-white border-2 px-8 py-4 rounded-full bg-[#003476] transition-colors duration-300 hover:bg-[#22AAFE]">
                PPP - SAÚDE
            </button>


            </div>
        </div>
  
        <section className="relative h-64 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/fundosaude.jpg')" }}/>
  
  
        <div className="bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] w-full pt-20 pb-28 text-white">
  
            <div className=" max-w-7xl mx-auto px-4">

            <h3 className="Montserrat-Bold text-4xl font-semibold text-center py-7">MISSÃO</h3>
            <p className="text-justify text-lg montserrat-medium">
            Planejar e promover ações estratégicas e serviços de saúde organizados e integrados de forma regionalizada, com transparência e participação social, de forma humanizada, eficiente e resolutiva, com paixão por fazer a diferença na vida da população.
            </p>
  
            <h3 className="Montserrat-Bold text-4xl font-semibold text-center py-7">MODELO DE ATENÇÃO</h3>
            <p className="text-justify text-lg montserrat-medium">
            Modelo de atenção pautado na ordenação do cuidado pela atenção básica e desenvolvido em redes de atenção – RAS, com base em linhas de cuidado integradas e organizadas, por meio de planejamento estratégico e regulação, reconhecendo as potencialidades, entraves e dinamicidade do território.
            </p>

            <h3 className="Montserrat-Bold text-4xl font-semibold text-center py-7">VISÃO</h3>
            <p className="text-justify text-lg montserrat-medium">
            Ampliar o acesso e melhorar a qualidade da atenção, nos diferentes níveis de complexidade, com a prestação de serviço público de saúde à população, a partir do reconhecimento das necessidades em saúde, estabelecendo fluxos e protocolos de referência e contrarreferência, para um trabalho organizado e equânime em redes de atenção, de modo eficaz, reconhecido pela qualidade por usuários, trabalhadores e gestores.
            </p>
  
            <h3 className="Montserrat-Bold text-4xl font-semibold text-center py-7">VALORES</h3>
            <p className="text-justify text-lg montserrat-medium">
            Ética – Conhecimento – Evidências científicas – Eficiência – Humanização – Compromisso – Respeito – Satisfação – Participação – Transparência – Desenvolvimento Científico e Tecnológico.protocolos de referência e contrarreferência, para um trabalho organizado e equânime em redes de atenção, de modo eficaz, reconhecido pela qualidade por usuários, trabalhadores e gestores.
            </p>
  
          </div>
  
        </div>

        <section className="relative h-64 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/fundosaude.jpg')" }} />


        <div className="bg-[radial-gradient(circle_at_center,#003476,#6EC1E4)] text-center w-full h-[46rem] text-white items-center justify-center flex flex-col">

          <h2 className="Montserrat-Bold text-4xl font-bold">DOWNLOADS</h2>
          <div className="border-t-2 border-white my-4 w-56 mx-auto"/>


          <div className="flex flex-col w-full max-w-md sm:max-w-lg lg:max-w-3xl space-y-4">
              <button 
                  onClick={() => window.open("../pdf/CARTILHA_DE_SERVIÇOS_FINAL_02.10.19..pdf", "_blank")}
                  className='flex justify-center items-center montserrat-bold bg-[#003476] transition-colors duration-300 hover:text-[#FFC719] hover:bg-[#3062B3] text-lg py-4 text-center w-full border-2 hover:border-yellow-500'>
                  <h3 className="text-center">CARTILHA DE SERVIÇOS</h3>
              </button>

              <button 
                  onClick={() => window.open("../pdf/Calendário-Vacinal-do-Ministério-da-Saúde_Idade-x-Vacina_01.10.19-convertido.pdf", "_blank")}
                  className='flex justify-center items-center montserrat-bold bg-[#003476] transition-colors duration-300 hover:text-[#FFC719] hover:bg-[#3062B3] text-lg py-4 text-center w-full border-2 hover:border-yellow-500'>
                  <h3 className="text-center">CALENDÁRIO VACINAL DE IMUNIZAÇÃO DO MINISTÉRIO DA SAÚDE</h3>
              </button>

              <button 
                  onClick={() => window.open("../pdf/Calendário-da-Saúde-com-meses-Comemorativos_02.10.19-convertido.pdf", "_blank")}
                  className='flex justify-center items-center montserrat-bold bg-[#003476] transition-colors duration-300 hover:text-[#FFC719] hover:bg-[#3062B3] text-lg py-4 text-center w-full border-2 hover:border-yellow-500'>
                  <h3 className="text-center">CALENDÁRIO DA SAÚDE COM MESES COMEMORATIVOS</h3>
              </button>

              <button 
                  onClick={() => window.open("../pdf/95161rio_do_Mama_M195179vel_02.10.19.pdf", "_blank")}
                  className='flex justify-center items-center montserrat-bold bg-[#003476] transition-colors duration-300 hover:text-[#FFC719] hover:bg-[#3062B3] text-lg py-4 text-center w-full border-2 hover:border-yellow-500'>
                  <h3 className="text-center">CALENDÁRIO DO MAMA MÓVEL</h3>
              </button>


          </div>


        </div>
  
  
        <section className="relative h-64 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/fundosaude.jpg')" }} />
  
        <div className="bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-center w-full h-[46rem] text-white flex items-center justify-center flex-col">
          <h2 className="Montserrat-Bold text-4xl font-bold">EQUIPE</h2>
          <div className="border-t-2 border-white my-4 w-40 mx-auto"/>
        </div>
  
        <div className="border-white my-0.5	 mx-auto"/>
      </div>
    );
    };

export default Saude;
