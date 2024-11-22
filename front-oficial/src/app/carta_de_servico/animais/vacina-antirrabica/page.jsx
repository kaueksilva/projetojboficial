import Pet from "./vacina-antirrabica";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Vacinação Antirrábica Animal - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/pet.png"}
        titulo={"Vacinação Antirrábica Animal"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Animais
            </span>
          </span>
        }
      >
        <Pet />
      </Model>
    </div>
  );
}
