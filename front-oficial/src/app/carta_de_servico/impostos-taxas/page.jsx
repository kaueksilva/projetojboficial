import ImpostosTaxas from "./impostosetaxas";
import Model from "../../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/impostos.Jpg"}
        titulo={"Serviços de Impostos e Taxas"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Impostos e Taxas</span>
          </span>
        }
      >
        <ImpostosTaxas />
      </Model>
    </div>
  );
}
