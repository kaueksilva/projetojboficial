import Vigilancia from "./vigilancia-sanitaria";
import Model from "../../../components/model-page";
import Link from "next/link"; 
export const metadata = {
  title: "Serviços de Vigilância Sanitária - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/viglancia.Jpg"}
        titulo={"Serviços de Vigilância Sanitária"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços de Vigilância Sanitária</span>
          </span>
        }
      >
        <Vigilancia />
      </Model>
    </div>
  );
}
