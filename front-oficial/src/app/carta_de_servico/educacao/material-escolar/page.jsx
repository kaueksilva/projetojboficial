import Educacao from "./material";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " MATERIAL ESCOLAR - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"MATERIAL ESCOLAR"}
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
