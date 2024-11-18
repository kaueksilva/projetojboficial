import Educacao from "./Atendimento";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "ATENDIMENTO DOMICILIAR EDUCACIONAL  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"ATENDIMENTO DOMICILIAR EDUCACIONAL"}
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
