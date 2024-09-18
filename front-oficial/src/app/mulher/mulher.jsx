const Mulher = () => {
  return (
    <div>
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="../../images/mulher.jpg"
          alt="background"
          className="absolute inset-0 w-full h-screen object-cover"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F781F3,#B4045F)] opacity-40" />

        <div className="z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold futura-heavy futura-pt-heavy">
            Secretaria Executiva da Mulher
          </h1>
          <div className="border-t-2 border-white my-4 w-1/2 sm:w-3/4 md:w-1/2 lg:w-1/4 mx-auto" />
        </div>
      </div>

      <section
        className="relative h-64 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/mulher2.jpeg')",
        }}
      />

      <div className="bg-[radial-gradient(circle_at_center,#E6A1CA,#E5379F)] w-full pt-32 pb-32 text-white">
        <div className=" max-w-7xl mx-auto px-4">

          <h3 className="text-4xl font-semibold text-center py-7 Montserrat-Bold">MISSÃO</h3>
          <p className="text-justify text-lg montserrat-medium">
            Planejar e promover a igualdade de Gênero e combater a violência Domestica familiar, como também o empoderamento feminino e a inserção no mercado de trabalho através da qualificação profissional, tendo como desafio o fortalecimento e a participação das mulheres.
          </p>

          <h3 className="text-4xl font-semibold text-center py-7 Montserrat-Bold">MODELO DE ATENÇÃO</h3>
          <p className="text-justify text-lg montserrat-medium">
          Modelo de atenção pautado na ordenação do cuidado pela atenção básica e desenvolvido em redes de atenção – RAS, com base em linhas de cuidado integradas e organizadas, por meio de planejamento estratégico e regulação, reconhecendo as potencialidades, entraves e dinamicidade do território.
          </p>

          <h3 className="text-4xl font-semibold text-center py-7 Montserrat-Bold">VISÃO</h3>
          <p className="text-justify text-lg montserrat-medium">
            Formular, implementar, coordenar, acompanhar, supervisionar, avaliar e desenvolver politicas publicas, programas, projetos e ações voltadas para o emponderamento sócio-econômico da mulher, inserindo-as no mercado de trabalho e assim promovendo a melhoria da sua auto estima e autonomia financeira.
          </p>

          <h3 className="text-4xl font-semibold text-center py-7 Montserrat-Bold">VALORES</h3>
          <p className="text-justify text-lg montserrat-medium">
          Ética – Conhecimento – Evidências científicas – Eficiência – Humanização – Compromisso – Respeito – Satisfação – Participação – Transparência – Desenvolvimento Científico e Tecnológico.protocolos de referência e contrarreferência, para um trabalho organizado e equânime em redes de atenção, de modo eficaz, reconhecido pela qualidade por usuários, trabalhadores e gestores.
          </p>
        </div>
      </div>

      <section
        className="relative h-64 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/mulher2.jpeg')",
        }}
      />

      <div className="bg-[radial-gradient(circle_at_center,#E6A1CA,#E5379F)] text-center w-full h-[46rem] text-white flex items-center justify-center flex-col">
        <h2 className="Montserrat-Bold text-4xl font-bold">EQUIPE</h2>
        <div className="border-t-2 border-white my-4 w-40 mx-auto" />
      </div>

      <div className="border-white my-0.5 mx-auto" />
    </div>
  );
};

export default Mulher;
