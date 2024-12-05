import Meioambiente from "./Educacaoambiental";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " EDUCAÇÃO AMBIENTAL  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/arvore-de-josue.png"}
        titulo={"EDUCAÇÃO AMBIENTAL"}
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
