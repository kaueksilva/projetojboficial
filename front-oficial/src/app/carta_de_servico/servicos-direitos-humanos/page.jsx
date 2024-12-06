import ServicosDeDireitosHumanos from "./servicos-direitos-humanos";
import Model from "../../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Serviços de Direitos Humanos - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/humanos.jpg"}
        titulo={"Serviços de Direitos Humanos"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Direitos Humanos</span>
          </span>
        }
      >
        <ServicosDeDireitosHumanos />
      </Model>
    </div>
  );
}
