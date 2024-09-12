import Mapaescola from "./mapa-das-escola";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS ESCOLAS"}
        subtitulo={"HOME » Mapa das Escolas"}
      >
        <Mapaescola/>
        
      </Model>
    </div>
  );
}
