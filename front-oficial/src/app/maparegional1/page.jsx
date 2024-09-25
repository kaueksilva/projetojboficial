import Maparegional1 from "./mapa-regional1";
import Model from "../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 1"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
              MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 1
            </span>
          </span>
        }
      >
        <Maparegional1 />
      </Model>
    </div>
  );
}
