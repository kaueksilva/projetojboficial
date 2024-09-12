import Equipamentosas from "./equipamento-sas";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"ENDEREÇOS DOS EQUIPAMENTOS DA SAS"}
        subtitulo={"HOME » Endereços dos Equipamentos da SAS"}
      >
        
        <Equipamentosas/>
        
      </Model>
    </div>
  );
}
