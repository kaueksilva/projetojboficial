import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Model({ children, caminhoImagem, title, subtitulo }) {
  return (
    <div>
      <Menu />
      <Header
        caminhoImagem={caminhoImagem}
        titulo={title}
        subtitulo={subtitulo}
      />
      {children}
      <Footer />
    </div>
  );
}
