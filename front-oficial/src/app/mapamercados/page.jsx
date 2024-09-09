import Mapamercados from "./mapa-mercados";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DOS MERCADOS PÚBLICOS"}
        subtitulo={"HOME » Mapa dos Mercados Públicos"}
      >
        <Mapamercados/>
        
      </Model>
    </div>
  );
}
