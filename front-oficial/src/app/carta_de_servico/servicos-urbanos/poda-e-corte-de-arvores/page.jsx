import Previdencia from "./PodaCorte";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " PODA E CORTE DE ÁRVORES - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/predio-comercial.png"}
        titulo={"PODA E CORTE DE ÁRVORES"}
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
