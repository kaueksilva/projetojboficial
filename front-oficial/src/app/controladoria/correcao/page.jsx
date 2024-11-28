import Correcao from "./correcao";
import Model from "../../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "CORREÇÃO - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        titulo={"CORREÇÃO"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»
            <span className="brightness-125"> CORREÇÃO</span>
          </span>
        }
      >
        <Correcao/>
      </Model>
    </div>
  );
}
