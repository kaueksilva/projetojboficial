import ServicosUrbanos from "./servicos-urbanos";
import Model from "../../../components/model-page";
import Link from "next/link"; 

export const metadata = {
  title: " SERVIÇOS URBANOS   - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/urbano.Jpg"}
        titulo={"Serviços Urbanos"}
        subtitulo={
          <span>
            <Link
              href="../" 
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">Serviços Urbanos</span>
          </span>
        }
      >
        <ServicosUrbanos />
      </Model>
    </div>
  );
}
