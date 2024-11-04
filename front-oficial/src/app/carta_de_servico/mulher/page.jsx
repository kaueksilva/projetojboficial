import Mulher from "./mulher";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/ambiente.Jpg"}
        titulo={"Serviços da Mulher"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços da Mulher</span>
          </span>
        }
      >
        <Mulher />
      </Model>
    </div>
  );
}
