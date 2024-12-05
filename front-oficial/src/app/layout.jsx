"use client";
import { Inter } from "next/font/google";
import Menu from "../components/Menu";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import "./style/globals.css";
import "./style/footer.css";
import Vlibras from "@/components/Vlibras";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Menu />

        {children}
        <Vlibras />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
