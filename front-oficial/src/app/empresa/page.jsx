import Empresa from "./empresa";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        caminhoImagem={"/images/empresa.jpg"}
        titulo={"SERVIÇOS PARA A EMPRESA"}
        subtitulo={"HOME » SERVIÇOS PARA A EMPRESA"}
      >
        <Empresa />
      </Model>
    </div>
  );
}
