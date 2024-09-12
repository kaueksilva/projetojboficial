import Maparegional3 from "./mapa-regional3";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 3"}
        subtitulo={"HOME » Mapa das unidades de saúde da Regional 3"}
      >
        
        <Maparegional3/>
        
      </Model>
    </div>
  );
}
