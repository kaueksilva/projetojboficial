import Iluminacao from "./servicos-de-iluminacao";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Serviços de Iluminação - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/ILUMINACAO.png"}
        titulo={"SERVIÇOS DE ILUMINAÇÃO"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Iluminação</span>
          </span>
        }
      >
        <Iluminacao />
      </Model>
    </div>
  );
}
