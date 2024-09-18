import Equipamentosas from "./equipamento-sas";
import Model from "../0modelo-pagina/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"ENDEREÇOS DOS EQUIPAMENTOS DA SAS"}
        subtitulo={
          <span>
              <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              Início
              </Link>
              &nbsp;» <span className="brightness-125">ENDEREÇOS DOS EQUIPAMENTOS DA SAS</span>
          </span>
      }
      >
        
        <Equipamentosas/>
        
      </Model>
    </div>
  );
}
