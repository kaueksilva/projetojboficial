import Jbdosguararapes from "./jb-dos-guararapes";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div >
      <Model
        // caminhoImagem={"/images/empresa.jpg"}
        titulo={"JABOATÃO DOS GUARARAPES"}
        subtitulo={"HOME » JABOATÃO DOS GUARARAPES"}
      >
        <Jbdosguararapes />
      </Model>
    </div>
  );
}
