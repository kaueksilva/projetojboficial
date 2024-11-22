import Fiscalizacao from "./fiscalizacao";
import Model from "../../../../components/model-page-servicos";
import { FaFileCircleCheck } from "react-icons/fa6";

export const metadata = {
  title: "Fiscalização Urbana - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      
      <Model
        caminhoImagem={"/images/carta-de-servico/doc.png"} 
        titulo={"FISCALIZAÇÃO URBANA"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE ALVARÁ, ANÁLISE E AUTORIZAÇÕES</span>
          </span>
        }
      >
        <div className="w-16 h-16 text-[#6ba7f5] text-9xl flex items-center justify-center rounded">
                <FaFileCircleCheck />
              </div>
        <Fiscalizacao />
      </Model>
    </div>
  );
}
