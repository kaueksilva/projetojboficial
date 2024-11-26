import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Vlibras from "@/components/Vlibras";
import AccessibilityButton from "@/components/AccessibilityButton";
import Title from "@/components/Title";

export default function NoticiasLayout({ children }) {
  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Título da seção */}
      <Title />

      {/* Botão de acessibilidade */}
      <AccessibilityButton />

      {/* Conteúdo principal */}
      <main>{children}</main>

      {/* Recursos adicionais */}
      <Vlibras />
      <ScrollToTop />

      {/* Rodapé */}
      <Footer />
    </>
  );
}
