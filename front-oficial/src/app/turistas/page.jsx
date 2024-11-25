import Turista from "./turista";
import ModelPage from "../../components/model-noticias";

export const metadata = {
  title: "Serviços para o Turista - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
     <ModelPage 
  caminhoImagem="/images/cras.png" 
  titulo="Jaboatão promove caminhada pelo fim da violência contra as mulheres"
  data="Novembro 22, 2024"
  hora="10:15"
  categoria="Mulher"
>
<Turista />
</ModelPage>

    </div>
  );
}
