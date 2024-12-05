import Ubs from "./protecao-em-situacoes-de-calamidades";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Proteção em Situações de Calamidades Públicase e Emergenciais - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Proteção em Situações de Calamidades Públicase e Emergenciais"}
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
