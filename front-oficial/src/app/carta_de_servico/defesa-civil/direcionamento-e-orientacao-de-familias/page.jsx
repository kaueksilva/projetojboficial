import Ubs from "./direcionamento-e-orientacao-de-familias";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Direcionamento e Orientação de Famílias que Estão em Área de Riscos - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/balancas.png"}
        titulo={"Direcionamento e Orientação de Famílias que Estão em Área de Riscos"}
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
