import Ubs from "./fiscalizacao-de-acidentes";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Fiscalização de Acidentes de Trânsito - Prefeitura do Jaboatão dos Guararapes",
 };

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Fiscalização de Acidentes de Trânsito"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Trânsito e Transporte</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
