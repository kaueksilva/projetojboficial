import Vigilancia from "./vigilancia";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Análise de Processos de Licenciamento - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/pet.png"}
        titulo={"Análise de Processos de Licenciamento"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Animais</span>
          </span>
        }
      >
        <Vigilancia />
      </Model>
    </div>
  );
}
