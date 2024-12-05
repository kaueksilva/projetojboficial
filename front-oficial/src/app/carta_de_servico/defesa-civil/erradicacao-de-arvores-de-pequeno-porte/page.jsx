import Ubs from "./erradicacao-de-arvores-de-pequeno-porte";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Erradicação de Árvores de Pequeno Porte - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/balancas.png"}
        titulo={"Erradicação de Árvores de Pequeno Porte"}
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
