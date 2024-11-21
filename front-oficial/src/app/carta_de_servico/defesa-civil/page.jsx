import DefesaCivil from "./defesa-civil";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export const metadata = {
  title: "Defesa Civil - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/defesacivil.jpeg"}
        titulo={"SERVIÇOS DE DEFESA CIVIL"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">SERVIÇOS DE DEFESA CIVIL</span>
          </span>
        }
      >
        <DefesaCivil />
      </Model>
    </div>
  );
}
