import Ubs from "./abrigo-cristo-redentor";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Abrigo Cristo Redentor - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Abrigo Cristo Redentor"}
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
