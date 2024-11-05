import Fiscalizacao from "./fiscalizacao";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/bandeiradacidade.png"}
        titulo={"FISCALIZAÇÃO URBANA"}
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
