import Vigilancia from "./vigilancia";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Emissão de Licenças Sanitárias - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/olho.png"}
        titulo={"Emissão de Licenças Sanitárias"}
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