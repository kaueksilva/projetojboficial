import Mulher from "./atendimento-as-mulheres-vitimas-de-violencia";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/mulher.png"}
        titulo={"Atendimento às Mulheres Vítimas de Violência"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços da Mulher</span>
          </span>
        }
      >
        <Mulher />
      </Model>
    </div>
  );
}

