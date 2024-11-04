import ServicosDeFeiras from "./feiras-mercados";
import Model from "../../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/mercado.jpg"}
        titulo={"Serviços de Feiras e Mercados Públicos"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Feiras e Mercados Públicos</span>
          </span>
        }
      >
        <ServicosDeFeiras />
      </Model>
    </div>
  );
}
