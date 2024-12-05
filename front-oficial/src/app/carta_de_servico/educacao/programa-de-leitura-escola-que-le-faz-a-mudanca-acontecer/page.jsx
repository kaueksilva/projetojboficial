import Educacao from "./programaLeitura";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "PROGRAMA DE LEITURA ESCOLA QUE LE FAZ A MUDANÇA ACONTECER  - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"PROGRAMA DE LEITURA ESCOLA QUE LE FAZ A MUDANÇA ACONTECER"}
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
