import MeioAmbiente from "./previdencia";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export const metadata = {
  title: "Serviços de Previdência  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/previdencia.Jpg"}
        titulo={"Serviços de Previdência"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Previdência</span>
          </span>
        }
      >
        <MeioAmbiente />
      </Model>
    </div>
  );
}
