import Yapoatan from "./yapoatan";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        caminhoImagem={"/images/Batalha_dos_Guararapes.jpg"}
        titulo={"YAPOATAN"}
        subtitulo={"HOME » YAPOATAN"}
      >
        <Yapoatan />
      </Model>
    </div>
  );
}
