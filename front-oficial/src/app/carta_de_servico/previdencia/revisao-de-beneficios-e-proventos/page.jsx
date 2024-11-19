import Previdencia from "./revisaoBeneficios";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " REVISÃO DE BENEFÍCIOS E PROVENTOS  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/cofrinho.png"}
        titulo={"REVISÃO DE BENEFÍCIOS E PROVENTOS"}
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
