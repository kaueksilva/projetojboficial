import Fiscalizacao from "./nucleoApoio";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Núcleo de Apoio a Vítimas de Violação - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/aperto-de-mao.png"}
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
