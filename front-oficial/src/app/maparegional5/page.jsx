import Maparegional5 from "./mapa-regional5";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 5"}
        subtitulo={"HOME » Mapa das unidades de saúde da Regional 5"}
      >
      
      <Maparegional5/>
        
      </Model>
    </div>
  );
}
