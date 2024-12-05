import Fiscalizacao from "./balcao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Balcão da Cidadania - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/aperto-de-mao.png"}
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
