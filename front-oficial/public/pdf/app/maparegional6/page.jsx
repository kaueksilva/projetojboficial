import Maparegional6 from "./mapa-regional6";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 6"}
        subtitulo={"HOME » Mapa das unidades de saúde da Regional 6"}
      >
      
      <Maparegional6/>
        
      </Model>
    </div>
  );
}
