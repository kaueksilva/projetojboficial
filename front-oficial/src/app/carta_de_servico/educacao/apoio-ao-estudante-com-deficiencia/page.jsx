import Educacao from "./apoioEstudante";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
    title: "APOIO AO ESTUDANTE COM DEFICIÊNCIA - Prefeitura do Jaboatão dos Guararapes",
  };

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"APOIO AO ESTUDANTE COM DEFICIÊNCIA"}
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
