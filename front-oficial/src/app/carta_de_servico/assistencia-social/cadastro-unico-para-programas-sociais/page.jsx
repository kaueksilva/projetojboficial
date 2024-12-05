import Ubs from "./cadastro-unico-para-programas-sociais";
import Model from "../../../../components/model-page-servicos";

export const metadata = {
  title: "Cadastro Único para Programas Sociais - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/carta-de-servico/people.png"}
        titulo={"Cadastro Único para Programas Sociais"}
        subtitulo={
          <span>
            <span className="brightness-125">SERVIÇOS DE ASSISTÊNCIA SOCIAL
            </span>
          </span>
        }
      >
        <Ubs />
      </Model>
    </div>
  );
}
