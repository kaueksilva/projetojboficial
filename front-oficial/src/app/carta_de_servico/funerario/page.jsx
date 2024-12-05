import Funeral from "./funerario";
import Model from "../../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Funerários - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/funerario.Jpg"}
        titulo={"Serviços Funerários"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços Funerários</span>
          </span>
        }
      >
        <Funeral />
      </Model>
    </div>
  );
}
