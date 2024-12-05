import Vigilancia from "./vigilancia";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Inspeção em Estabelecimentos Regulados (Alimentos e Serviços de Saúde) - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/olho.png"}
        titulo={"Inspeção em Estabelecimentos Regulados (Alimentos e Serviços de Saúde)"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Vigilância Sanitária</span>
          </span>
        }
      >
        <Vigilancia />
      </Model>
    </div>
  );
}
