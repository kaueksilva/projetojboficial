import Ubs from "./ubs-pet";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/pet.png"}
        titulo={"UBS PET"}
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
