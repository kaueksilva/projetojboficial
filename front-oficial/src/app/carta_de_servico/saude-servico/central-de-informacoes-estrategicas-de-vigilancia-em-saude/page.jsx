import Saude from "./saude";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Central de informações Estratégicas de Vigilância em Saúde - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/saude.png"}
        titulo={"Central de informações Estratégicas de Vigilância em Saúde (CIEVS-PE)"}
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
