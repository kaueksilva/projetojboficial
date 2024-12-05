import Ubs from "./itbi";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "ITBI - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/taxa.png"}
        titulo={"Itbi"}
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
