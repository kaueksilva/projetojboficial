import Previdencia from "./RecolhimentoResiduos";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " RECOLHIMENTO DE RESIDUOS - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/predio-comercial.png"}
        titulo={"RECOLHIMENTO DE RESIDUOS"}
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
