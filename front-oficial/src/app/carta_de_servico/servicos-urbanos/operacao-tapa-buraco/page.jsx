import Previdencia from "./OperacaoTapa";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " OPERAÇÃO TAPA BURACO  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/predio-comercial.png"}
        titulo={"OPERAÇÃO TAPA BURACO"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS URBANOS</span>
          </span>
        }
      >
        <Previdencia/>
      </Model>
    </div>
  );
}
