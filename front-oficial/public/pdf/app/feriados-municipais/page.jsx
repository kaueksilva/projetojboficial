import Feriados from "./feriados-municipais";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        caminhoImagem={"/images/calendar.jpg"}
        titulo={"FERIADOS MUNICIPAIS"}
        subtitulo={"HOME » FERIADOS MUNICIPAIS"}
      >
        <Feriados />
      </Model>
    </div>
  );
}
