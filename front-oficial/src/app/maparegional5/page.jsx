import Maparegional5 from "./mapa-regional5";
import Model from "../0modelo-pagina/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 5"}
        subtitulo={
          <span>
              <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              INÍCIO
              </Link>
              &nbsp;» <span className="brightness-125">MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 5</span>
          </span>
      }        
      >
      
      <Maparegional5/>
        
      </Model>
    </div>
  );
}
