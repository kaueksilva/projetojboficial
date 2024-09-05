import { Inter } from "next/font/google";
import "./style/globals.css";
import "./style/footer.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prefeiura do Jaboatão dos Guararapes",
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
