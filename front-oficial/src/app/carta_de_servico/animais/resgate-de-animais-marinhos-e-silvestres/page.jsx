import Ubs from "./resgate-de-animais-marinhos-e-silvestres";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/pet.png"}
        titulo={"Resgate de Animais Marinhos e Silvestres"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Animais</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
