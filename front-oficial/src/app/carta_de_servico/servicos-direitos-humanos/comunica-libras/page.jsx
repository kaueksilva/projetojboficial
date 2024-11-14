import Fiscalizacao from "./comunica";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/doc.png"}
        titulo={"COMUNICA LIBRAS"}
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
