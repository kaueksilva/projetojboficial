import Ubs from "./iss-imposto-sobre-servico";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "ISS Imposto Sobre Serviço - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/taxa.png"}
        titulo={"ISS Imposto Sobre Serviço"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Impostos e Taxas
            </span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
