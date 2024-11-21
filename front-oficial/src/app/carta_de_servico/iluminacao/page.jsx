import Iluminacao from "./ilunimacao";
import Model from "../../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/iluminacao.Jpg"}
        titulo={"Serviços de Iluminação"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Iluminação</span>
          </span>
        }
      >
        <Iluminacao />
      </Model>
    </div>
  );
}
