import Ouvidoria from "./pedido-de-acesso-a-informacao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Pedido de Acesso a Informação - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/ouvidoria.png"}
        titulo={"Pedido de Acesso à Informação"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Ouvidoria</span>
          </span>
        }
      >
        <Ouvidoria />
      </Model>
    </div>
  );
}
