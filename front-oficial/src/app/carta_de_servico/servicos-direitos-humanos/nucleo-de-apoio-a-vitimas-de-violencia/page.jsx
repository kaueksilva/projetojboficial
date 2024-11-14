import Fiscalizacao from "./nucleoApoio";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/aperto-de-mao.png"}
        titulo={"NÚCLEO DE APOIO A VÍTIMAS DE VIOLÊNCIA"}
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
