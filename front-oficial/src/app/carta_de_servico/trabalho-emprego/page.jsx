import TrabalhoEmprego from "./trabalho-emprego";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/ambiente.Jpg"}
        titulo={"Serviços de Trabalho e Emprego"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Trabalho e Emprego</span>
          </span>
        }
      >
        <TrabalhoEmprego />
      </Model>
    </div>
  );
}
