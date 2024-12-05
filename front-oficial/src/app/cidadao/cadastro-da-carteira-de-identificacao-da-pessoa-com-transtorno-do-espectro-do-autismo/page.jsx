import Ciptea from "./ciptea.jsx";
import Model from "../../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "CADASTRO DA CARTEIRA DE IDENTIFICAÇÃO DA PESSOA COM TRANSTORNO DO ESPECTRO DO AUTISMO - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/cidadao/ciptea.jpg"}
        titulo={"CADASTRO DA CARTEIRA DE IDENTIFICAÇÃO DA PESSOA COM TRANSTORNO DO ESPECTRO DO AUTISMO"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">CADASTRO DA CARTEIRA DE IDENTIFICAÇÃO DA PESSOA COM TRANSTORNO DO ESPECTRO DO AUTISMO</span>
          </span>
        }
      >
        <Ciptea />
      </Model>
    </div>
  );
}
