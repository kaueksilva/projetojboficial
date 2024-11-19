import Ubs from "./simples-nacional";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Simples Nacional - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/taxa.png"}
        titulo={"Simples Nacional"}
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
