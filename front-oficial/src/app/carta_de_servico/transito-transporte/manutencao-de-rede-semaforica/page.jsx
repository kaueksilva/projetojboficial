import Ubs from "./manutencao-da-rede-semaforica";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Manutenção da Rede Semafórica - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Manutenção da Rede Semafórica"}
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
