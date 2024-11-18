import Saude from "./saude-servico";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/servicodesaude.jpg"}
        titulo={"Serviços de Saúde"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Saúde</span>
          </span>
        }
      >
        <Saude />
      </Model>
    </div>
  );
}
