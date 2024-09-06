import Cidadao from "./servicos-para-o-cidadao";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/servicos-cidadao.jpg"}
        title={"SERVIÇOS PARA O CIDADÃO"}
        subtitulo={"HOME » SERVIÇOS PARA O CIDADÃO"}
      >
        <Cidadao />
      </Model>
    </div>
  );
}
