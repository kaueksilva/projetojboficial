import Educacao from "./cursoPreparatorio";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "CURSO PREPARATORIO  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div >
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"CURSO PREPARATORIO - PROGRAMA JABOATAO PREPARA"}
        
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
