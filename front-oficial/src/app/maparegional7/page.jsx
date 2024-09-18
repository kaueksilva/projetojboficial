"use client";
import Maparegional7 from "./mapa-regional7";
import Model from "../0modelo-pagina/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 7"}
        subtitulo={
          <span>
              <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              INÍCIO
              </Link>
              &nbsp;» <span className="brightness-125">MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 7</span>
          </span>
      }        
      >
        
        <Maparegional7/>
        
      </Model>
    </div>
  );
}
