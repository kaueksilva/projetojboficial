import Educacao from "./MatriculaInfantil";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"MATRICULA EM TURMAS DA EDUCACAO INFANTIL, ENSINO FUNDAMENTAL E EJA A QUALQUER TEMPO"}
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
