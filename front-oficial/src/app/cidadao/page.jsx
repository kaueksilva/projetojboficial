import Menu from "../components/Menu";
import Cidadao from "./cidadao";
import Footer from "../components/Footer";
import Model from "../1modelo-pagina/model-page";

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
