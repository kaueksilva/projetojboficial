import Ubs from "./iptu-tlp";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Iptu e Tlp - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/taxa.png"}
        titulo={"IPTU e TLP"}
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
