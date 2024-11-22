import Ubs from "./cadastro-e-vistoria-dos-operadores";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Cadastramento e Vistoria dos Operadores e dos Veículos de Transporte Público - Prefeitura do Jaboatão dos Guararapes",
};


export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/bus.png"}
        titulo={"Cadastramento e Vistoria dos Operadores e dos Veículos de Transporte Público"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços de Trânsito e Transporte</span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
