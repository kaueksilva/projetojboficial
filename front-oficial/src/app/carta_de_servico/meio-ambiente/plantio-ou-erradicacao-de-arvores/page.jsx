import Meioambiente from "./PlantioErradicacao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " PLANTIO OU ERRADICAÇÃO DE ARVORES  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/arvore-de-josue.png"}
        titulo={"PLANTIO OU ERRADICAÇÃO DE ARVORES"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DO MEIO AMBIENTE</span>
          </span>
        }
      >
        <Meioambiente/>
      </Model>
    </div>
  );
}
