import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


export default function config() {
  return (
    <div>
      <Menu />

      <Home />

      <ScrollToTop/>

      <Footer/>
    </div>
  );
}

