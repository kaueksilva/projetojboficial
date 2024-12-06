import Pet from "./maus-tratos-de-animais";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Maus Tratos de Cães e Gatos – Denúncia - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/pet.png"}
        titulo={"Maus Tratos de Cães e Gatos – Denúncia"}
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
