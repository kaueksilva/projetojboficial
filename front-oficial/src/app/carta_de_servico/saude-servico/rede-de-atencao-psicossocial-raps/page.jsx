import Saude from "./saude";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Rede de Atenção Psicossocial (RAPS) - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Rede de Atenção Psicossocial (RAPS)"}
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