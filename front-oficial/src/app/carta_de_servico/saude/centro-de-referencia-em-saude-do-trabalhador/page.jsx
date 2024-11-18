import Ubs from "./saude";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Centro de Referência em Saúde do Trabalhador (CEREST)"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Saúde</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
