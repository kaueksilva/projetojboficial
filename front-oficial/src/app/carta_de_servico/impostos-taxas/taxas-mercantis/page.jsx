import Ubs from "./taxas-mercantis";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Taxas Mercantis - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carrinhos-de-compras.png"}
        titulo={"TAXAS MERCANTIS"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Impostos e Taxas
            </span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
