import Ubs from "./recolocacao-de-lonas-plasticas";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Recolocação de Lonas Plásticas em Áreas de Encostas - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/balancas.png"}
        titulo={"Recolocação de Lonas Plásticas em Áreas de Encostas"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Defesa Civil
            </span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
