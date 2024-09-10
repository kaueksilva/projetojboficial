import Maparestaurantes from "./mapa-restaurantes";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DOS BARES E RESTAURANTES"}
        subtitulo={"HOME » Mapa dos Bares e Restaurantes"}
      >
        <Maparestaurantes/>
        
      </Model>
    </div>
  );
}
