import Maparegional4 from "./mapa-regional4";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Mapa da Regional 4 - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 4"}
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
              MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 4
            </span>
          </span>
        }
      >
        <Maparegional4 />
      </Model>
    </div>
  );
}
