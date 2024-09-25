import Maparegional2 from "./mapa-regional2";
import Model from "../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 2"}
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
              MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 2
            </span>
          </span>
        }
      >
        <Maparegional2 />
      </Model>
    </div>
  );
}
