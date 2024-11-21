import Previdencia from "./EmissaoCertificado";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " EMISSÃO DE CERTIDÃO DE TEMPO DE CONTRIBUIÇÃO  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div  >
      <Model
        caminhoImagem={"/images/carta-de-servico/cofrinho.png"}
        titulo={"EMISSÃO DE CERTIDÃO DE TEMPO DE CONTRIBUIÇÃO"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DO PREVIDÊNCIA</span>
          </span>
        }
      >
        <Previdencia/>
      </Model>
    </div>
  );
}
