import Educacao from "./renovacaoMatricula";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " RENOVAÇÃO DE MATÍCULA (PARA ESTUDANTES VETERANOS) - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"RENOVAÇÃO DE MATRÍCULA (PARA ESTUDANTES VETERANOS)"}
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
