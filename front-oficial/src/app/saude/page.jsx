import Saude from "./saude";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function config() {
    return (
        <div >
            <Menu />
            <Saude />
            <Footer/>
        </div>
    );
}
