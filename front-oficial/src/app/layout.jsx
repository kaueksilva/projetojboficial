import { Inter } from "next/font/google";
import Menu from "./components/Menu";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "./style/globals.css";
import "./style/footer.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prefeitura do Jaboatão dos Guararapes",
  description: "Desenvolvido por Kauê Nascimento e Larissa Machado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Menu />

        {children}

        <ScrollToTop />

        <Footer />
      </body>
    </html>
  );
}
