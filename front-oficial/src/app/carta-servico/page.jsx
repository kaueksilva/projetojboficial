import Cartaservico from "./carta-servicos";
import Model from "../0modelo-pagina/model-page";

export default function config() {
return (
    <div >
    <Model
        caminhoImagem={"/images/cartaservicos.jpg"}
        titulo={"Carta de Serviços"}
        subtitulo={"HOME » Carta de Serviços"}
    >
        <Cartaservico />
    </Model>
    </div>
);
}



