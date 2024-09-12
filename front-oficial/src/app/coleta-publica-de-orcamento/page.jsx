import ColetaPublica from "./coleta-publica";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"COLETA PÚBLICA DE ORÇAMENTO"}
        subtitulo={"HOME » COLETA PÚBLICA DE ORÇAMENTO"}
      >
        <ColetaPublica />
      </Model>
    </div>
  );
}
