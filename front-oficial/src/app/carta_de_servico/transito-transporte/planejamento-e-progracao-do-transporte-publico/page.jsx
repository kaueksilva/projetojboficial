import Ubs from "./planejamento-e-progracao-do-transporte-publico";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Planejamento e Programação do Transporte Público - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Planejamento e Programação do Transporte Público"}
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
