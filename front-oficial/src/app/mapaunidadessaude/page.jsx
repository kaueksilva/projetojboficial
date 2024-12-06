import Mapasaude from "./mapa-unidades-saude";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Mapas das Unidades de Saúde - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPAS DAS UNIDADES DE SAÚDE POR REGIONAL"}
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
              MAPAS DAS UNIDADES DE SAÚDE POR REGIONAL
            </span>
          </span>
        }
      >
        <Mapasaude />
      </Model>
    </div>
  );
}
