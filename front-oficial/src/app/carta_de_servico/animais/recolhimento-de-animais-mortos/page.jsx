import Pet from "./recolhimento-de-animais-mortos";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Recolhimento de Animais Mortos - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/pet.png"}
        titulo={"Recolhimento de Animais Mortos"}
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
