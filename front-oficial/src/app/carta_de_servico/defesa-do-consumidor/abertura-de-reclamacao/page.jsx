import Ubs from "./abertura-de-reclamacao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Abertura de Reclamação - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/carrinhos-de-compras.png"}
        titulo={"Abertura de Reclamação – Defesa do Consumidor"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Defesa do Consumidor</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
