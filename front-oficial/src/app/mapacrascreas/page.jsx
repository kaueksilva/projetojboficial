import Mapacrascreas from "./mapa-unidades-cras-creas";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Mapa das Unidades do CRAS e CREAS - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS"}
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
              MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS
            </span>
          </span>
        }
      >
        <Mapacrascreas />
      </Model>
    </div>
  );
}
