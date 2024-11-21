import Previdencia from "./PavimentacaoDrenagem";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " PAVIMENTAÇÃO E DRENAGEM  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/predio-comercial.png"}
        titulo={"PAVIMENTAÇÃO E DRENAGEM"}
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
