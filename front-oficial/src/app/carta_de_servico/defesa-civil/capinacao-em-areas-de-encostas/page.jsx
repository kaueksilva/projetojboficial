import Ubs from "./capinacao-em-areas-de-encostas";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Capinação em Áreas de Encostas - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/balancas.png"}
        titulo={"Capinação em Áreas de Encostas"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Defesa Civil
            </span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
