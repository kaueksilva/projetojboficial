import Educacao from "./credenciamento";
import Model from "../../../../components/model-page-servicos";

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
