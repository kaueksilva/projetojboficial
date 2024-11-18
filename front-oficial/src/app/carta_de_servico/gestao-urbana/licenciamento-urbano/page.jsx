import Fiscalizacao from "./licenciamento-urbano";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/doc.png"}
        titulo={"LICENCIAMENTO URBANO"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE ALVARÁ, ANÁLISE E AUTORIZAÇÕES</span>
          </span>
        }
      >
        <Fiscalizacao />
      </Model>
    </div>
  );
}
