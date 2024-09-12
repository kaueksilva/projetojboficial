import Mapaestrategia from "./mapa-da-estrategia";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DA ESTRATÉGIA"}
        subtitulo={"HOME » Mapa da Estratégia"}
      >
        
        <Mapaestrategia/>
        
      </Model>
    </div>
  );
}
