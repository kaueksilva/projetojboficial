import Ubs from "./casa-de-acolhida-estacao-feliz";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Casa de Acolhida Estação Feliz - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Casa de Acolhida Estação Feliz"}
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