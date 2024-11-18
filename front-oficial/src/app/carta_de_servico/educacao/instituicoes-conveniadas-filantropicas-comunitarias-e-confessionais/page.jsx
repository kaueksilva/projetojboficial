import Educacao from "./instituicoesConveniadas";
import Model from "../../../../components/model-page-servicos";


export const metadata = {
  title: "INSTITUIÇÕES CONVENIADAS FILANTRÓPICAS, COMUNITÁRIAS E CONFESSIOANIS  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div className="mt-10 ">
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"INSTITUIÇÕES CONVENIADAS FILANTRÓPICAS, COMUNITÁRIAS E CONFESSIOANIS"}
        
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
