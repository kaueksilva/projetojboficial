import Saude from "./assistencia-social";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export const metadata = {
  title: "Assistência Social - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/assistencia.jpg"}
        titulo={"SERVIÇOS DE ASSISTÊNCIA SOCIAL"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">SERVIÇOS DE ASSISTÊNCIA SOCIAL</span>
          </span>
        }
      >
        <Saude />
      </Model>
    </div>
  );
}
