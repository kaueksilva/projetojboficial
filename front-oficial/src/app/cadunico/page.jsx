import PPP from "./cadunico";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "AGENDAMENTO CADÚNICO - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/cadunico.png"}
        titulo={"AGENDAMENTO CADÚNICO"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">AGENDAMENTO CADÚNICO</span>
          </span>
        }
      >
        <PPP />
      </Model>
    </div>
  );
}
