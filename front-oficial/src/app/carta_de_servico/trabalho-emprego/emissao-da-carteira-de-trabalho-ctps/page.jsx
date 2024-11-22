import Vigilancia from "./EmissaoCarteira";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Emissão da Carteira de Trabalho (CTPS) - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div className="mt-2">
      <Model
        caminhoImagem={"/images/carta-de-servico/user.png"}
        titulo={"EMISSÃO DA CARTEIRA DE TRABALHO - CTPS"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Trabalho e Emprego</span>
          </span>
        }
      >
        <Vigilancia />
      </Model>
    </div>
  );
}
