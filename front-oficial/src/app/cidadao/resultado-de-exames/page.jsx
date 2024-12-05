import Resultado from "./resultado.jsx";
import Model from "../../../components/model-page.jsx";
import Link from "next/link";

export const metadata = {
  title: "Resultado de exames - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/exames.jpg"}
        titulo={"Resultado de exames"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">Resultado de exames</span>
          </span>
        }
      >
        <Resultado />
      </Model>
    </div>
  );
}
