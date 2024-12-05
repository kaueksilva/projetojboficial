import Ouvidoria from "./registro-de-reclamacoes,-denuncias,-solicitacoes,-elogios-e-sugestoes";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Registro de Reclamações, Denúncias, Solicitações, Elogios e Sugestões - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/ouvidoria.png"}
        titulo={"Registro de reclamações, denúncias, solicitações, elogios e sugestões"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Ouvidoria</span>
          </span>
        }
      >
        <Ouvidoria />
      </Model>
    </div>
  );
}
