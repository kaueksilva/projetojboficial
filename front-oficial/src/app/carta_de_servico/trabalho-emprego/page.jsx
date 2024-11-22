import TrabalhoEmprego from "./trabalho-emprego";
import Model from "../../../components/model-page";
import Link from "next/link"; 
export const metadata = {
  title: "Qualificação Profissional - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/trabalho.Jpg"}
        titulo={"Qualificação Profissional"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Qualificação Profissional</span>
          </span>
        }
      >
        <TrabalhoEmprego />
      </Model>
    </div>
  );
}
