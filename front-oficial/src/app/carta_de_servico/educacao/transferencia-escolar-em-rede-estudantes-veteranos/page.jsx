import Educacao from "./TransferenciaVeteranos";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "TRANSFERÊNCIA ESCOLAR EM REDE (ESTUDANTES VETERANOS)  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"TRANSFERÊNCIA ESCOLAR EM REDE (ESTUDANTES VETERANOS)"}
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
