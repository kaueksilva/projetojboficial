import Mapasaude from "./mapa-unidades-saude";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"MAPAS DAS UNIDADES DE SAÚDE POR REGIONAL"}
        subtitulo={"HOME » Mapas das Unidades de Saúde por Regional"}
      >
        <Mapasaude/>
        
      </Model>
    </div>
  );
}
