import { Inter } from "next/font/google";
import "./style/globals.css";
import "./style/footer.css"
import "../components/FOOTER/footer.module.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projeto Jaboatão dos Guararapes",
  description: "Desenvolvido por Kauê Nascimento e Larissa Machado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
