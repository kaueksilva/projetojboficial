import Previdencia from "./DrenagemUrbana";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " DRENAGEM URBANA - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/predio-comercial.png"}
        titulo={"DRENAGEM URBANA"}
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