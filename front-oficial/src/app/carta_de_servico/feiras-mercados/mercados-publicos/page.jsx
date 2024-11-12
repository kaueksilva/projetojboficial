import MercadosPublicos from "./mercados-publicos";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/cesta-de-compras.png"}
        titulo={"Mercados Públicos"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Feiras e Mercados Públicos</span>
          </span>
        }
      >
        <MercadosPublicos />
      </Model>
    </div>
  );
}
