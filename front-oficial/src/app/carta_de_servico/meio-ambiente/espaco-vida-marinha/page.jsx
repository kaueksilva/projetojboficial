import Meioambiente from "./espacoMarinha";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " ESPACO DE VIDA MARINHA  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/arvore-de-josue.png"}
        titulo={"ESPACO DE VIDA MARINHA"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DO MEIO AMBIENTE</span>
          </span>
        }
      >
        <Meioambiente/>
      </Model>
    </div>
  );
}
