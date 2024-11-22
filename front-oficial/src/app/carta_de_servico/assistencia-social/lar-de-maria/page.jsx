import Ubs from "./lar-de-maria";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Lar de Maria - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Lar de Maria"}
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
