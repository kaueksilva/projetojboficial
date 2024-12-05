import Saude from "./saude";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Academia da Saúde - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Academia da Saúde"}
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
