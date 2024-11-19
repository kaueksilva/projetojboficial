import Vigilancia from "./vigilancia";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Programa Jovem Mais Jaboatão - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/olho.png"}
        titulo={"Programa Jovem Mais Jaboatão"}
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
