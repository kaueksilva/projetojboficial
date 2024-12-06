"use client";
import "../style/globals.css";

const Cadunico = () => {
  // Obtém a hora atual
  const now = new Date();
  const currentHour = now.getHours();

  // Verifica se está entre 7:00h e 16:59h
  const isButtonVisible = currentHour >= 7 && currentHour <= 16;

  return (
    <section>
      <section className="relative pb-20 w-full h-screen overflow-hidden bg-[#0061FF]">
        {/* DIVISOR DE FORMA*/}
        <div className="flex justify-center w-auto ">
          <svg
            width="100%"
            viewBox="0 0 2000 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.33"
              d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
              fill="#458CFF"
            />
            <path
              opacity="0.66"
              d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
              fill="#458CFF"
            />
            <path
              d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
              fill="#458CFF"
            />
          </svg>
        </div>

        {/* Conteúdo */}
        <div className="relative flex flex-col mx-4 md:mx-20 lg:mx-40 xl:mx-80 text-white">
          {/* Título */}
          <h1 className="futura-pt-heavy text-[45px] font-bold text-center mt-10">
            Comunicado Sobre Vagas e Atualização Cadastral do BPC
          </h1>

          {/* Texto */}
          <div className="roboto-regular text-xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-justify leading-relaxed">
            <p>
              O Cadastro Único informa que as vagas disponibilizadas no site são
              abertas no primeiro dia de cada mês. No entanto, devido ao recente
              bloqueio em massa de beneficiários do BPC (Benefício de Prestação
              Continuada), a demanda neste mês de novembro foi maior do que o
              previsto, resultando no preenchimento antecipado das vagas. <br />
              <br />
              Além disso, o Ministério do Desenvolvimento Social (MDS), em
              conjunto com o Ministério da Previdência Social (MPS), publicou,
              em julho de 2024, a Portaria Conjunta MDS/MPS nº 27/2024. Esta
              normativa estabelece novos prazos e procedimentos para a
              atualização cadastral dos beneficiários do BPC, com foco naqueles
              que possuem cadastro desatualizado há mais de 48 meses.
            </p>

            <p>
              Esta normativa estabelece novos prazos e procedimentos para a
              atualização cadastral dos beneficiários do BPC, com foco naqueles
              que possuem cadastro desatualizado há mais de 48 meses. <br />
              <br />
              De acordo com a Portaria, os beneficiários têm até 90 dias para
              realizar a atualização cadastral. Caso a atualização não seja
              feita dentro deste prazo, o benefício será suspenso, e o pagamento
              será bloqueado. Se a regularização não ocorrer dentro do prazo
              estipulado, o benefício poderá ser cortado definitivamente. <br />
              <br />
              Portanto, é fundamental que todos os beneficiários do BPC fiquem
              atentos às datas e realizem a atualização cadastral o quanto
              antes, para evitar a perda do benefício.
            </p>
          </div>
        </div>

        {/* DIVISOR DE FORMA INVERTIDO */}
        <svg
          width="100%"
          viewBox="0 0 2000 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "scaleY(-1)",
            position: "absolute",
            bottom: "0",
            width: "100%",
          }}
        
        >
          <path
            opacity="0.33"
            d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
            fill="#E7E7E7"
          />
          <path
            opacity="0.66"
            d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
            fill="#E7E7E7"
          />
          <path
            d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
            fill="#E7E7E7"
          />
        </svg>
      </section>


      {/* Botão exibido apenas no horário especificado */}
      {isButtonVisible && (
        <div className="flex justify-center items-center w-full h-80 bg-[#E7E7E7]">
          <a
            href="https://cadunico.jaboatao.pe.gov.br"
            className="roboto-medium tracking-widest text-xl bg-blue-500 text-white py-3 px-10 rounded-full border-2 border-white hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Agendamento CADUNICO
          </a>
        </div>
      )}
    </section>
  );
};

export default Cadunico;