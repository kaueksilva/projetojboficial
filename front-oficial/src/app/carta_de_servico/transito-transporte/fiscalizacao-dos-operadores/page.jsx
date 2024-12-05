import Ubs from "./fiscalizacao-dos-operadores";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Fiscalização dos Operadores e dos Veículos Prestadores de Serviço do Sistema de Transporte Público - Prefeitura do Jaboatão dos Guararapes",
 };

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Fiscalização dos Operadores e dos Veículos Prestadores de Serviço do Sistema de Transporte Público"}
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
