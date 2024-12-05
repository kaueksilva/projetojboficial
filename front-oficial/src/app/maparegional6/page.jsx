import Maparegional6 from "./mapa-regional6";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Mapas da Regional 6 - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 6"}
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
              MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 6
            </span>
          </span>
        }
      >
        <Maparegional6 />
      </Model>
    </div>
  );
}
