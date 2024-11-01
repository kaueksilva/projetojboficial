import Gestaourbana from "./gestao-urbana";
import Model from "../../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/GestaoUrbanas.jpg"}
        titulo={"GESTÃO URBANA"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Gestão Urbana</span>
          </span>
        }
      >
        <Gestaourbana />
      </Model>
    </div>
  );
}
