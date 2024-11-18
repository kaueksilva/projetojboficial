import Ubs from "./saude";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Servico de atendimento domiciliar - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Serviço de Atendimento Domiciliar (SAD)"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Saúde</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
