import Fiscalizacao from "./balcao";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/doc.png"}
        titulo={"BALCÃO DA CIDADANIA"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE DIREITOS HUMANOS</span>
          </span>
        }
      >
        <Fiscalizacao />
      </Model>
    </div>
  );
}
