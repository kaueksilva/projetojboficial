import Previdencia from "./MicroDrenagem";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " MICRO DRENAGEM URBANA - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/predio-comercial.png"}
        titulo={"MICRO DRENAGEM URBANA"}
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
