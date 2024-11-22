import Ubs from "./fiscalizacao-de-transito";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Fiscalização de Trânsito- Prefeitura do Jaboatão dos Guararapes",
 };

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Fiscalização de Trânsito"}
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
