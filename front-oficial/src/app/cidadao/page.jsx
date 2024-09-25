import Cidadao from "./servicos-para-o-cidadao";
import Model from "../../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/servicos-cidadao.jpg"}
        titulo={"SERVIÇOS PARA O CIDADÃO"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">SERVIÇOS PARA O CIDADÃO</span>
          </span>
        }
      >
        <Cidadao />
      </Model>
    </div>
  );
}
