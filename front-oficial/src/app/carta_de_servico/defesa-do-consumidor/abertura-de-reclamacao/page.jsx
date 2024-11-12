import Ubs from "./abertura-de-reclamacao";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/pet.png"}
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
