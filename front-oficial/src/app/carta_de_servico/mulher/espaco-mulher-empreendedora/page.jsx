import Mulher from "./espaco-mulher-empreendedora";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/mulher.png"}
        titulo={"ESPAÇO MULHER EMPREENDEDORA"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços da Mulher</span>
          </span>
        }
      >
        <Mulher />
      </Model>
    </div>
  );
}
