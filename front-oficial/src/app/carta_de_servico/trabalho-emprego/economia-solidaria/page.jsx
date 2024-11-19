import Vigilancia from "./vigilancia";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Economia Solidária - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/olho.png"}
        titulo={"Economia Solidária"}
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
