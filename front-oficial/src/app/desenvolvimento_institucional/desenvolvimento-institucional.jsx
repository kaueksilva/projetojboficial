const DesenvolvimentoInstitucional = () => {
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
              SECRETARIA MUNICIPAL DE DESENVOLVIMENTO INSTITUCIONAL
            </h1>
          <div className="border-t-2 border-white my-4 w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto"/>
          </div>
      </div>

      <section className="relative h-64 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/desenvolvimentoinstitucional2.jpg')" }}/>


      <div className="bg-[radial-gradient(circle_at_center,#7DD2F6,#5295EA)] w-full pt-20 pb-28 text-white">

        <div className=" max-w-7xl mx-auto px-4">

          <h2 className="Montserrat-Bold text-4xl font-bold text-center">QUEM SOMOS</h2>
          <div className="border-t-2 border-white my-4 w-40 mx-auto"/>

          <p className="text-justify text-lg montserrat-medium">
            A SDI – Secretaria de Municipal de Desenvolvimento Institucional do município de Jaboatão dos Guararapes – é a secretaria responsável por coordenar a gestão da ação governamental, promovendo a integração e a articulação das políticas públicas, de maneira a garantir o cumprimento da missão institucional do Governo Municipal. É composta pelas seguintes secretarias executivas:<br/><br/>
            Secretaria Executiva de Desenvolvimento Institucional, Monitoramento e Avaliação<br/>
            Secretaria Executiva de Licitações, Compras corporativas e Contratos<br/>
            Secretaria Executiva de Gestão de Convênios e Projetos
          </p>

          <h3 className="Montserrat-Bold text-3xl font-semibold text-center py-7">MISSÃO</h3>
          <p className="text-justify text-lg montserrat-medium">
            Proporcionar o desenvolvimento da Administração Municipal promovendo uma gestão integrada e inovadora na busca da melhoria contínua dos serviços aos cidadãos.
          </p>

          <h3 className="Montserrat-Bold text-3xl font-semibold text-center py-7">VISÃO</h3>
          <p className="text-justify text-lg montserrat-medium">
            Ser referência em governança, inovação e integração entre os entes da gestão municipal para garantir a efetividade das políticas públicas.
          </p>

          <h3 className="Montserrat-Bold text-3xl font-semibold text-center py-7">VALORES</h3>
          <p className="text-justify text-lg montserrat-medium">
            Competência – Transparência – Equilíbrio Fiscal – Inovação – Dinamismo – Determinação – Humanização – Integridade – Visão Sistêmica – Eficiência.
          </p>

        </div>

      </div>


      <section className="relative h-64 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/desenvolvimentoinstitucional2.jpg')" }}/>

      <div className="bg-[radial-gradient(circle_at_center,#7DD2F6,#5295EA)] text-center w-full h-[46rem] text-white flex items-center justify-center flex-col">
        <h2 className="Montserrat-Bold text-4xl font-bold">EQUIPE</h2>
        <div className="border-t-2 border-white my-4 w-40 mx-auto"/>
      </div>

      <div className="border-white my-0.5	 mx-auto"/>
    </div>
  );
  };
  
  export default DesenvolvimentoInstitucional;



