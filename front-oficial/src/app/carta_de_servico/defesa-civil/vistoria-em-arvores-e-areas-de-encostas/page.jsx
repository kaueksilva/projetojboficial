import Ubs from "./vistoria-em-arvores-e-areas-de-encostas";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Vistoria em Árvores e Áreas de Encostas - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/balancas.png"}
        titulo={"Vistoria em Árvores e Áreas de Encostas"}
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
