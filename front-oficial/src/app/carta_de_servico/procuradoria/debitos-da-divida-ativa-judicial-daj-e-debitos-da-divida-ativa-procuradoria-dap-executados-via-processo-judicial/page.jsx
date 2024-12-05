import Procuradoria from "./DebitosDivida";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " Débitos da Divida Ativa Judicial (DAJ) e Debitos da Divida Ativa Procuradoria (DAP), Executados Via Processo Judicial  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div className="mt-[30px]" >
      <Model
        caminhoImagem={"/images/carta-de-servico/justica.png"}
        titulo={"DÉBITOS DA DÍVIDA ATIVA JUDICIAL (DAJ) E DÉBITOS DA DÍVIDA ATIVA PROCURADORIA (DAP), EXECUTADOS VIA PROCESSO JUDICIAL"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DO PROCURADORIA</span>
          </span>
        }
      >
        <Procuradoria/>
      </Model>
    </div>
  );
}
