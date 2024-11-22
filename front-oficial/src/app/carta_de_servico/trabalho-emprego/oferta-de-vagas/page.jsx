import Vigilancia from "./OfertaVagas";
import Model from "../../../../components/model-page-servicos";
export const metadata = {
  title: "Oferta de Vagas - Prefeitura do Jaboatão dos Guararapes",
};
export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/user.png"}
        titulo={"OFERTA DE VAGAS"}
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
