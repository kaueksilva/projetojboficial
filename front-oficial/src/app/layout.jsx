import { Inter } from "next/font/google";
import "./globals.css";
import "./style/footer.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Projeto Jaboatão dos Guararapes",
  description: "Desenvolvido por Kauê Nascimento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
