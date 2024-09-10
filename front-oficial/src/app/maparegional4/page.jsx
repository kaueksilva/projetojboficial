import Maparegional4 from "./mapa-regional4";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPA DAS UNIDADES DE SAÚDE DA REGIONAL 4"}
        subtitulo={"HOME » Mapa das unidades de saúde da Regional 4"}
      >
        
        <Maparegional4/>
        
      </Model>
    </div>
  );
}
