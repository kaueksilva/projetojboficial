const Saude = () => {
    return (
      <div>
  
        <div className="relative w-full h-screen flex items-center justify-center">
          <img
            src= "../../images/desenvolvimentoinstitucional.jpeg"
            alt="background"
            className="absolute inset-0 w-full h-screen object-cover"
          />
          
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#59C7F7,#003476)] opacity-60"/>
            
            <div className="z-10 text-center text-white px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold futura-heavy futura-pt-heavy">
                SECRETARIA DE SAÚDE
              </h1>
            <div className="border-t-2 border-white my-4 w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto"/>
            </div>
        </div>
  
        <section className="relative h-64 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/desenvolvimentoinstitucional2.jpg')" }}/>
  
  
        <div className="bg-[radial-gradient(circle_at_center,#7DD2F6,#5295EA)] w-full pt-20 pb-28 text-white">
  
            <div className=" max-w-7xl mx-auto px-4">

            <h3 className="Montserrat-Bold text-3xl font-semibold text-center py-7">MISSÃO</h3>
            <p className="text-lg montserrat-medium">
            Planejar e promover ações estratégicas e serviços de saúde organizados e integrados de forma regionalizada, com transparência e participação social, de forma humanizada, eficiente e resolutiva, com paixão por fazer a diferença na vida da população.
            </p>
  
            <h3 className="Montserrat-Bold text-3xl font-semibold text-center py-7">MODELO DE ATENÇÃO</h3>
            <p className="text-lg montserrat-medium">
            Modelo de atenção pautado na ordenação do cuidado pela atenção básica e desenvolvido em redes de atenção – RAS, com base em linhas de cuidado integradas e organizadas, por meio de planejamento estratégico e regulação, reconhecendo as potencialidades, entraves e dinamicidade do território.
            </p>

            <h3 className="Montserrat-Bold text-3xl font-semibold text-center py-7">VISÃO</h3>
            <p className="text-lg montserrat-medium">
            Ampliar o acesso e melhorar a qualidade da atenção, nos diferentes níveis de complexidade, com a prestação de serviço público de saúde à população, a partir do reconhecimento das necessidades em saúde, estabelecendo fluxos e protocolos de referência e contrarreferência, para um trabalho organizado e equânime em redes de atenção, de modo eficaz, reconhecido pela qualidade por usuários, trabalhadores e gestores.
            </p>
  
            <h3 className="Montserrat-Bold text-3xl font-semibold text-center py-7">VALORES</h3>
            <p className="text-lg montserrat-medium">
            Ética – Conhecimento – Evidências científicas – Eficiência – Humanização – Compromisso – Respeito – Satisfação – Participação – Transparência – Desenvolvimento Científico e Tecnológico.protocolos de referência e contrarreferência, para um trabalho organizado e equânime em redes de atenção, de modo eficaz, reconhecido pela qualidade por usuários, trabalhadores e gestores.
            </p>
  
          </div>
  
        </div>
  
  
        <section className="relative h-64 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/desenvolvimentoinstitucional2.jpg')" }} />
  
        <div className="bg-[radial-gradient(circle_at_center,#7DD2F6,#5295EA)] text-center w-full h-[46rem] text-white flex items-center justify-center flex-col">
          <h2 className="Montserrat-Bold text-4xl font-bold">EQUIPE</h2>
          <div className="border-t-2 border-white my-4 w-40 mx-auto"/>
        </div>
  
        <div className="border-white my-0.5	 mx-auto"/>
      </div>
    );
    };

export default Saude;
