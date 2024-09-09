import Mapacrascreas from "./mapa-unidades-cras-creas";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS"}
        subtitulo={"HOME » Mapa das Unidades do CRAS E CREAS Municipais"}
      >
        <Mapacrascreas/>
        
      </Model>
    </div>
  );
}
