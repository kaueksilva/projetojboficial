import Maparegional1 from "./mapa-regional1";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPAS DAS UNIDADES DE SAÚDE DA REGIONAL 1"}
        subtitulo={"HOME » Mapa das unidades de saúde da Regional 1"}
      >
        
        <Maparegional1/>
        
      </Model>
    </div>
  );
}
