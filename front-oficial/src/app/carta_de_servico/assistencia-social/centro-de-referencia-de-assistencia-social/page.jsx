import Ubs from "./centro-de-referencia-de-assistencia-social";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Centro de Referência de Assistência Social – CRAS - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Centro de Referência de Assistência Social – CRAS"}
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
