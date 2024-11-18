import Mapaescola from "./mapa-das-escola";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Mapa das Escolas Municipais - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS ESCOLAS"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">MAPA DAS ESCOLAS</span>
          </span>
        }
      >
        <Mapaescola />
      </Model>
    </div>
  );
}
