import Educacao from "./credenciamento";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "CREDENCIAMENTO DE NOVAS UNIDADES MUNICIPAL DE ENSINO PUBLICAS OU PRIVADAS  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div className="mt-10">
      <Model
        caminhoImagem={"/images/carta-de-servico/tampao.png"}
        titulo={"CREDENCIAMENTO DE NOVAS UNIDADES MUNICIPAL DE ENSINO PUBLICAS OU PRIVADAS"}
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
