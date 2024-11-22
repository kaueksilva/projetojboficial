import Funeral from "./necropolis";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Necrópolis - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/funeral.png"}
        titulo={"NECRÓPOLIS"}
        subtitulo={
          <span>
            <span className="brightness-125">Serviços Funerários</span>
          </span>
        }
      >
        <Funeral />
      </Model>
    </div>
  );
}
