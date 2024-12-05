import Ubs from "./nucleo-de-seguranca-alimentar-e-nutricional";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Núcleo de Segurança Alimentar e Nutricional - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Núcleo de Segurança Alimentar e Nutricional"}
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
