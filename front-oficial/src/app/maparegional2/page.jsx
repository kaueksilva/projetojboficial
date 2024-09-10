import Maparegional2 from "./mapa-regional2";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 2"}
        subtitulo={"HOME » Mapa das unidades de saúde da Regional 2"}
      >
      
      <Maparegional2/>
        
      </Model>
    </div>
  );
}
