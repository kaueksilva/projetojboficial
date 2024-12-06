import Mapamercados from "./mapa-mercados";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Mapa dos Mercados Públicos - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DOS MERCADOS PÚBLICOS"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">MAPA DOS MERCADOS PÚBLICOS</span>
          </span>
        }
      >
        <Mapamercados />
      </Model>
    </div>
  );
}
