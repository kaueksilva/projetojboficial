import Procuradoria from "./procuradoria";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/procuradoria.jpg"}
        titulo={"Serviços de Procuradoria"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Procuradoria</span>
          </span>
        }
      >
        <Procuradoria />
      </Model>
    </div>
  );
}
