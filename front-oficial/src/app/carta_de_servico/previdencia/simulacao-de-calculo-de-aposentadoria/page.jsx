import Previdencia from "./SimulcaoCalculo";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: " SIMULAÇÃO DE CÁLCULO DE APOSENTADORIA  - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div className="mt-[30px]" >
      <Model
        caminhoImagem={"/images/carta-de-servico/cofrinho.png"}
        titulo={"SIMULAÇÃO DE CÁLCULO DE APOSENTADORIA"}
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
