import Institucional from "./desenvolvimento-institucional";
import Model from "../0modelo-pagina/model-page2";

export default function config() {
  return (
    <div >
      <Model
        caminhoImagem={"/images/desenvolvimentoinstitucional.jpeg"}
        titulo={"Secretaria Municipal de Desenvolvimento Institucional"}
      >
        <Institucional />
      </Model>
    </div>
  );
}
