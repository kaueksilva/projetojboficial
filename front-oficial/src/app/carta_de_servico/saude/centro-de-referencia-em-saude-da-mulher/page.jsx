import Ubs from "./saude";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Centro de Referência em Saúde da Mulher - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Centro de Referência em Saúde da Mulher (CRSM)"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Saúde</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
