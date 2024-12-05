import Simbolos from "./simbolos-da-cidade";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Símbolos da Cidade - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"SÍMBOLOS DA CIDADE"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">SÍMBOLOS DA CIDADE</span>
          </span>
        }
      >
        <Simbolos />
      </Model>
    </div>
  );
}
