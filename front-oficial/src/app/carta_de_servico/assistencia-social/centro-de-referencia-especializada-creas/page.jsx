import Ubs from "./centro-de-referencia-especializada-creas";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Centro de Referência Especializada em Assistência Social (CREAS) - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Centro de Referência Especializada em Assistência Social (CREAS)"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE ASSISTÊNCIA SOCIAL
            </span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}