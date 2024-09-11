import Yapoatan from "./yapoatan";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"YAPOATAN"}
        subtitulo={"HOME » YAPOATAN"}
      >
        <Yapoatan />
      </Model>
    </div>
  );
}
