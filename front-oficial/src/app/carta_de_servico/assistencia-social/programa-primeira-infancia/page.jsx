import Ubs from "./programa-primeira-infancia";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Programa Primeira Infância no SUAS - Criança Feliz - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Programa Primeira Infância no SUAS - Criança Feliz"}
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
