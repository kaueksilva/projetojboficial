import Educacao from "./saladerecursos";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "SALA DE RECURSOS MULTIFUNCIONAIS  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"SALA DE RECURSOS MULTIFUNCIONAIS"}
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
