import Ubs from "./emissao-de-credenciais";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Emissão de Credenciais Para Uso de Vagas de Estacionamento Destinadas a Idosos, Deficientes, Pessoas Com Dificuldade de Locomoção e Gestantesefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Emissão de Credenciais Para Uso de Vagas de Estacionamento Destinadas a Idosos, Deficientes, Pessoas Com Dificuldade de Locomoção e Gestantes"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Trânsito e Transporte</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
