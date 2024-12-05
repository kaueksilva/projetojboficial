import Ubs from "./servico-de-convivencia-e-fortalecimento";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Serviço de Convivêcia e Fortalecimento de Vínculos - SCFV - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Serviço de Convivêcia e Fortalecimento de Vínculos - SCFV"}
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
