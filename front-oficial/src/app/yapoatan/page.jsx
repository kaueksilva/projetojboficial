import Yapoatan from "./yapoatan";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Yapoatan - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/Batalha_dos_Guararapes.jpg"}
        titulo={"YAPOATAN"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;» <span className="brightness-125">YAPOATAN</span>
          </span>
        }
      >
        <Yapoatan />
      </Model>
    </div>
  );
}
