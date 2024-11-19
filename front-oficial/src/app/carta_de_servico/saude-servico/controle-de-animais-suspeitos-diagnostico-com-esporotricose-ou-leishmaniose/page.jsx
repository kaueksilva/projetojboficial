import Saude from "./saude";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Controle de Animais Suspeitos (Diagnóstico) com Esporotricose ou Leishmaniose - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Controle de Animais Suspeitos (Diagnóstico) com Esporotricose ou Leishmaniose"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Saúde</span>
          </span>
        }
      >
        <Saude />
      </Model>
    </div>
  );
}
