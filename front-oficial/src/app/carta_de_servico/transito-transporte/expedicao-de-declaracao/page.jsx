import Ubs from "./expedicao-de-declaracao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Expedição de Declaração de Acidente Com e Sem Vítimas - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Expedição de Declaração de Acidente Com e Sem Vítimas"}
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
