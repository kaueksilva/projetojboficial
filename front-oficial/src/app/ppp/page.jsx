import PPP from "./ppp-saude";
import Model from "../0modelo-pagina/model-page";
import Link from "next/link";

export default function config() {
return (
    <div >
    <Model
        caminhoImagem={"/images/ppp.png"}
        titulo={"PPP – SAÚDE"}
        subtitulo={
            <span>
                <Link href="../" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
                Início
                </Link>
                &nbsp;» <span className="brightness-125">PPP – SAÚDE</span>
            </span>
        }        
        >
        <PPP />
    </Model>
    </div>
);
}

