"use client";
import Maparegional7 from "./mapa-regional7";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 7"}
        subtitulo={"HOME » Mapa das unidades de saúde da Regional 7"}
      >
        
        <Maparegional7/>
        
      </Model>
    </div>
  );
}
