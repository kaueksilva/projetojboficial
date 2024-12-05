import Ubs from "./implantacao-e-manutencao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Implantação e Manutenção da Sinalização Gráfica Vertical e Horizontal - Prefeitura do Jaboatão dos Guararapes",
 };

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Implantação e Manutenção da Sinalização Gráfica Vertical e Horizontal"}
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
