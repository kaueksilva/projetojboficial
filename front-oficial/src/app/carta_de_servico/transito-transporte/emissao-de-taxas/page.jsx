import Ubs from "./emissao-de-taxas";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Emissão de Taxas de Serviço e Multas dos Modais do Serviço de Transporte Público",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Emissão de Taxas de Serviço e Multas dos Modais do Serviço de Transporte Público"}
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
