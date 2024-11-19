import Previdencia from "./ConcessaoPensao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " Concessão de Pensão  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/cofrinho.png"}
        titulo={"CONCESSÃO DE PENSÃO"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DO PREVIDÊNCIA</span>
          </span>
        }
      >
        <Previdencia/>
      </Model>
    </div>
  );
}
