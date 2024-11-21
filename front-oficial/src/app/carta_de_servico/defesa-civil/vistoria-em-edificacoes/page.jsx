import Ubs from "./vistoria-em-edificacoes";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Vistoria em Edificações - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/balancas.png"}
        titulo={"Vistoria em Edificações"}
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
