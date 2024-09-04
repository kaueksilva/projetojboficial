import Menu from "../components/Menu";
import Cidadao from "./servicos-para-o-cidadao";
import Footer from "../components/Footer";
import Model from "../0modelo-pagina/model-page";

export default function config() {
  return (
    <div>
      <Menu />

      <Model />

      <Cidadao />
      
      <Footer />
    </div>
  );
}
