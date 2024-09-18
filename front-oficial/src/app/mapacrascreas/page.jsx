import Mapacrascreas from "./mapa-unidades-cras-creas";
import Model from "../0modelo-pagina/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS"}
        subtitulo={
          <span>
              <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
              </Link>
              &nbsp;» <span className="brightness-125">MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS</span>
          </span>
      }
      >
        <Mapacrascreas/>
        
      </Model>
    </div>
  );
}
