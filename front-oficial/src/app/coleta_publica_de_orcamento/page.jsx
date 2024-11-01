import ColetaPublica from "./coleta-publica";
import Model from "../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"COLETA PÚBLICA DE ORÇAMENTO"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">COLETA PÚBLICA DE ORÇAMENTO</span>
          </span>
        }
      >
        <ColetaPublica />
      </Model>
    </div>
  );
}
