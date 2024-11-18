import Fiscalizacao from "./Solicitacao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " SOLICITAÇÃO DE DOCUMENTAÇÃO DAS ESCOLAS EXTINTAS - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"SOLICITAÇÃO DE DOCUMENTAÇÃO DAS ESCOLAS EXTINTAS"}
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
