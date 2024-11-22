import Animais from "./Animais";
import Model from "../../../components/model-page";
import Link from "next/link";
export const metadata = {
  title: "Serviço de Animais - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/animais.jpg"}
        titulo={"Serviço de Animais"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviço de Animais</span>
          </span>
        }
      >
        <Animais />
      </Model>
    </div>
  );
}
