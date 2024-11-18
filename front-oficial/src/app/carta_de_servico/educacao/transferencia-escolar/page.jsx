import Fiscalizacao from "./Transferenciaescolar";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "TRANSFERÊNCIA ESCOLAR  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"TRANSFERÊNCIA ESCOLAR"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE EDUCAÇÃO</span>
          </span>
        }
      >
        <Fiscalizacao />
      </Model>
    </div>
  );
}
