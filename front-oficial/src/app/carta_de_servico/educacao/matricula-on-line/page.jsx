import Fiscalizacao from "./matriculaOnline";
import Model from "../../../../components/model-page-servicos";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/doc.png"}
        titulo={"MATRICULA ONLINE"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE EDUCAÇÃO</span>
          </span>
        }
      >
        <Fiscalizacao />
      </Model>
    </div>
  );
}
