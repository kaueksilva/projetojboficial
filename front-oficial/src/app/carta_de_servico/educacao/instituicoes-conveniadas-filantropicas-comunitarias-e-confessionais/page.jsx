import Educacao from "./instituicoesConveniadas";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div className="mt-10 ">
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"INSTITUICOES CONVENIADAS FILANTRÓPICAS, COMUNITÁRIAS E CONFESSIOANIS"}
        
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE EDUCAÇÃO</span>
          </span>
        }
      >
        <Educacao/>
      </Model>
    </div>
  );
}
