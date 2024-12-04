import Lei from "./lei.jsx";
import Model from "../../../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "LEI Nº 1548 / 2023, DE 22 DE MARÇO DE 2023 - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/cidadao/lei.png"}
        titulo={"LEI Nº 1548 / 2023, DE 22 DE MARÇO DE 2023"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">LEI Nº 1548 / 2023, DE 22 DE MARÇO DE 2023</span>
          </span>
        }
      >
        <Lei />
      </Model>
    </div>
  );
}
