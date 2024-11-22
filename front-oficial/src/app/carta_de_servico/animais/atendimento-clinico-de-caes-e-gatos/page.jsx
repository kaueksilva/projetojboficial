import Pet from "./atendimento-clinico-de-caes-e-gatos";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Atendimento Clínico de Cães e Gatos - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/pet.png"}
        titulo={"Atendimento Clínico de Cães e Gatos"}
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
