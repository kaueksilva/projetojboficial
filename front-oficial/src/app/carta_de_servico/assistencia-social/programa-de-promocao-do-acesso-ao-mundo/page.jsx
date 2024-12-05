import Ubs from "./programa-de-promocao-do-acesso-ao-mundo";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Programa de Promocão do Acesso ao Mundo do Trabalho (Acessuas Trabalho) - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Programa de Promocão do Acesso ao Mundo do Trabalho (Acessuas Trabalho)"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE ASSISTÊNCIA SOCIAL
            </span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
