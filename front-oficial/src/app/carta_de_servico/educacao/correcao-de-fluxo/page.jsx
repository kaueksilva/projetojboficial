import Educacao from "./correcaoFluxo";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "CORREÇÃO DE FLUXO  - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"CORREÇÃO DE FLUXO"}
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
