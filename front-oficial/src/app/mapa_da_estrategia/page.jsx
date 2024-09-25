import Mapaestrategia from "./mapa-da-estrategia";
import Model from "../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DA ESTRATÉGIA"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">MAPA DA ESTRATÉGIA</span>
          </span>
        }
      >
        <Mapaestrategia />
      </Model>
    </div>
  );
}
