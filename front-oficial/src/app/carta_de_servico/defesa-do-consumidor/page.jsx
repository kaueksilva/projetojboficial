import Defesa from "./defesa-do-consumidor";
import Model from "../../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/defesa.jpg"}
        titulo={"Serviços de Defesa do Consumidor"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">SERVIÇOS DE DEFESA DO CONSUMIDOR</span>
          </span>
        }
      >
        <Defesa />
      </Model>
    </div>
  );
}
