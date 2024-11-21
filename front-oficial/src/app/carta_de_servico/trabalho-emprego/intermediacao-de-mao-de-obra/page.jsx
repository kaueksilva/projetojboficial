import Vigilancia from "./Intermediacao";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Intermediação de Mão de Obra - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/user.png"}
        titulo={"INTERMEDIACAO DE MAO DE OBRA"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Trabalho e Emprego</span>
          </span>
        }
      >
        <Vigilancia />
      </Model>
    </div>
  );
}
