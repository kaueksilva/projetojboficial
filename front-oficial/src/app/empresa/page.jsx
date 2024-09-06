import Menu from "../components/Menu";
import Empresa from "./empresa";
import Footer from "../components/Footer";
import Model from "../0modelo-pagina/model-page";

export default function config() {
return (
    <div>
    <Menu />

    <Model />

    <Empresa />

    <Footer/>
    </div>
);
}

