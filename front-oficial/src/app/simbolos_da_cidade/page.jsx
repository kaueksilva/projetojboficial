import Simbolos from "./simbolos-da-cidade";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"SÍMBOLOS DA CIDADE"}
        subtitulo={"HOME » Símbolos da Cidade"}
      >
        <Simbolos />
      </Model>
    </div>
  );
}
