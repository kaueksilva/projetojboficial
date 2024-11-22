import Ubs from "./conselho-tutelar";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Conselho Tutelar - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Conselho Tutelar"}
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
