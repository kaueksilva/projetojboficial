import Turista from "./turista";
import Model from "../0modelo-pagina/model-page";

export default function config() {
return (
    <div >
    <Model
        caminhoImagem={"/images/empresa.jpg"}
        titulo={"SERVIÇOS PARA O TURISTA"}
        subtitulo={"HOME » SERVIÇOS PARA O TURISTA"}
    >
        <Turista />
    </Model>
    </div>
);
}

