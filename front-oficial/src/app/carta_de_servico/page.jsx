import Cartaservico from "./carta-servicos";
import Model from "../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/cartaservicos.jpg"}
        titulo={"CARTA DE SERVIÇOS"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">CARTA DE SERVIÇOS</span>
          </span>
        }
      >
        <Cartaservico />
      </Model>
    </div>
  );
}
