'use client'
import { useState, useEffect } from "react";
import AccessibilityButton from "../components/AccessibilityButton";

export default function ModelPage({ children, caminhoImagem, titulo, data, hora, categoria }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Ajusta a altura da imagem conforme o scroll
  const imageHeight = Math.max(150, 250 - scrollPosition);

  return (
    <div>
      <AccessibilityButton />
      <div
        className="relative w-full flex items-end justify-center bg-[#2365f3]"
        style={{ height: `${imageHeight}px`, transition: "height 0.2s ease-out" }}
      >
        {/* Imagem de fundo */}
        <img
          src={caminhoImagem}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Camada de sobreposição para escurecer a imagem */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Conteúdo sobre a imagem */}
        <div className="z-10 text-center text-white pb-4 px-4">
          {/* Título principal */}
          <h1 className="text-[28px] md:text-[40px] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase">
            {titulo}
          </h1>
          {/* Informações adicionais */}
          <div className="flex items-center justify-center gap-4 text-[14px] font-semibold mt-2">
            {/* Data */}
            <div className="flex items-center gap-2">
              <i className="fas fa-calendar-alt"></i>
              <span>{data}</span>
            </div>
            {/* Hora */}
            <div className="flex items-center gap-2">
              <i className="fas fa-clock"></i>
              <span>{hora}</span>
            </div>
            {/* Categoria */}
            <div className="flex items-center gap-2">
              <i className="fas fa-tag"></i>
              <span>{categoria}</span>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
