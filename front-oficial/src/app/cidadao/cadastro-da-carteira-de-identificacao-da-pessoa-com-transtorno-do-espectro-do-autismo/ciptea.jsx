import React from "react";

function Ciptea() {
  return (
    <div className="bg-[#0F3974] w-full flex flex-col items-center py-10">
      <div className="text-center">
        <img
          src="/images/cidadao/logo-pref-ciptea.png"
          alt="Ciptea"
          className="mb-6 mx-auto" // Adiciona espaço inferior e centraliza horizontalmente
        />
        <a
          href="/cidadao/cadastro-da-carteira-de-identificacao-da-pessoa-com-transtorno-do-espectro-do-autismo/lei-no-1548-2023-de-22-de-marco-de-2023"
          className="px-12 py-3 border-2 border-white text-white rounded-full bg-blue-900 transition-all duration-300 hover:bg-white hover:text-blue-900 inline-flex justify-center items-center mb-10"
        >
          LEI Nº 1548 / 2023
        </a>
      </div>

      <iframe
        src="https://ciptea.jaboatao.pe.gov.br/form_tbl_autismo/"
        className="w-full max-w-screen-2xl h-[1150px] border-none"
        style={{
          overflow: "hidden",
        }}
      ></iframe>
    </div>
  );
}

export default Ciptea;
