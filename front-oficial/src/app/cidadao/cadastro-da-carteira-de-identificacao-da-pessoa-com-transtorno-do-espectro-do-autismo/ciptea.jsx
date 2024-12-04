import React from "react";

function Ciptea() {
  return (
    <div className="bg-[#0F3974] w-full flex py-10 justify-center">
      <div className="text-center">
        <img
          src="/images/cidadao/logo-pref-ciptea.png"
          alt="Ciptea"
          className="mb-6" // Adiciona um espaço abaixo da imagem
        />
        <a
          href="/cidadao/cadastro-da-carteira-de-identificacao-da-pessoa-com-transtorno-do-espectro-do-autismo/lei-no-1548-2023-de-22-de-marco-de-2023"
          className="px-12 py-3 border-2 border-white text-white rounded-full bg-blue-900 transition-all duration-300 hover:bg-white hover:text-blue-900 inline-flex justify-center items-center mb-10"
        >
          LEI Nº 1548 / 2023
        </a>

        <iframe
        src="https://ciptea.jaboatao.pe.gov.br/form_tbl_autismo/"
        className="w-full"
        style={{
          height: "1150px",
          overflow: "hidden",
          border: "none",
        }}
      ></iframe>
      </div>

      
    </div>
  );
}

export default Ciptea;