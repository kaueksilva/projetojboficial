import Turista from "./turista";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Serviços para o Turista - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/turista-crop.jpg"}
        titulo={"SERVIÇOS PARA O TURISTA"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">SERVIÇOS PARA O TURISTA</span>
          </span>
        }
      >
        <Turista />
      </Model>
    </div>
  );
}
