import Educacao from "./CursoBraille";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "CURSO DE BRAILLE E TIFLOLOGIA  - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"CURSO DE BRAILLE E TIFLOLOGIA"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE EDUCAÇÃO</span>
          </span>
        }
      >
        <Educacao/>
      </Model>
    </div>
  );
}
