import Ubs from "./saude";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Centro de Tratamento e Abordagem a Fumantes - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Centro de Tratamento e Abordagem a Fumantes"}
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
