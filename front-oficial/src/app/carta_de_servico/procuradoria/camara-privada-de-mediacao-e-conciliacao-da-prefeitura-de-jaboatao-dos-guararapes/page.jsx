import Procuradoria from "./CamaraPrivada";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " CÂMARA PRIVADA DE MEDIACAO E CONCILIAÇÃO DA PREFEITURA DE JABOATÃO DOS GUARARAPES  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div className="mt-[30px]" >
      <Model
        caminhoImagem={"/images/carta-de-servico/justica.png"}
        titulo={"CÂMARA PRIVADA DE MEDIACAO E CONCILIACAO DA PREFEITURA DE JABOATAO DOS GUARARAPES"}
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
