import Acessibilidade from "./acessibilidade";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"INFORMAÇÕES DE ACESSIBILIDADE"}
        subtitulo={"HOME » INFORMAÇÕES DE ACESSIBILIDADE"}
      >
        <Acessibilidade />
      </Model>
    </div>
  );
}
