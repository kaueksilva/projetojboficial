import Fiscalizacao from "./integra";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Integra - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/aperto-de-mao.png"}
        titulo={"INTEGRA"}
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
