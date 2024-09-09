import PPP from "./ppp-saude";
import Model from "../0modelo-pagina/model-page";

export default function config() {
return (
    <div >
    <Model
        caminhoImagem={"/images/ppp.png"}
        titulo={"PPP – SAÚDE"}
        subtitulo={"HOME » PPP – SAÚDE"}
    >
        <PPP />
    </Model>
    </div>
);
}

