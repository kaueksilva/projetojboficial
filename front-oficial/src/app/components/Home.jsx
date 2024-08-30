"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'; // Ícones sólidos

const images = [
  "/images/slide.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
  "/images/slide7.jpg",
  "/images/slide8.jpg",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);
  return (
    <div>
      <main>
        <div className="text-center w-full h-screen overflow-hidden flex justify-center items-center relative">
          <div className="absolute inset-0 w-full h-full z-[-1]">
            <div
              className="w-full h-full bg-cover bg-center transition-opacity duration-500"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            >
              <div 
                className="absolute inset-0 bg-black opacity-40" // Adiciona um overlay escuro
              ></div>
            </div>
          </div>

          <div id="botoes" className="font-roboto justify-center max-w-[90%] mx-auto mt-11">
            {/* Primeira linha de botões com tamanho limitado */}
            <div className=" flex-wrap grid grid-cols-4 gap-2 max-w-[85%] mx-auto mb-7">
              <button
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="cidadao"
              >
                CIDADÃO
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="empresa"
              >
                EMPRESA
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="servidor"
              >
                SERVIDOR
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="turista"
              >
                TURISTA
              </button>
            </div>

            {/* Segunda linha de botões */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                className="bg-[#003476] text-white py-4 px-20 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="portal"
              >
                PORTAL DA TRANSPARÊNCIA
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-20 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="carta"
              >
                CARTA DE SERVIÇOS
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-20 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="ppp"
              >
                PPP - SAÚDE
              </button>
            </div>

            {/* Botão MAPAS */}
            <div className="mapas flex justify-center items-center">
              <a href="/mapas" className="flex items-center group">
                <FontAwesomeIcon 
                  icon={faMapLocationDot} 
                  className="text-white transition-colors duration-300 group-hover:text-yellow-500"
                />
                <p className="text-white font-roboto font-semibold text-lg p-1 ml-2 transition-colors duration-300 group-hover:text-yellow-500 group-hover:animate-shake">
                  MAPAS
                </p>
              </a>
            </div>
          </div>

          
        </div>


            {/* O MEIO E O TITULO MAPAS!!! */}
        <div className="mapas border-t border-[#FFC719] bg-[#003470]">
          <h1 className="text-white font-montserrat font-semibold text-4xl flex justify-center p-3 mt-28">
            MAPAS
          </h1>
        </div>

          {/* DIVISOR DE FORMA*/}
          <div className="relative w-full">
            <svg width="100%" height="auto" viewBox="0 0 1000 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.33" d="M473 67.3C269.1 155.6 209.9 33.3 152.7 67.3C66 119.1 0 59.7 0 59.7V0H1000V59.7C1000 59.7 937.9 85.8 905.1 89C872.3 92.3 842.3 76.7 829.3 66.9C806 49.6 745.3 8.7 694.9 4.7C644.5 0.7 492.4 59 473 67.3Z" fill="#003470"/>
              <path opacity="0.66" d="M734 67.3C688.5 67.3 656.8 44.1 604.9 28.2C576.3 19.5 454.6 18.1 350.9 67.3C247.2 116.5 259.2 32.9 201.7 67.3C115.7 118.3 0 39.8 0 39.8V0H1000V36.5C1000 36.5 971.8 18 907.9 18C810.2 18.1 775.7 67.3 734 67.3Z" fill="#003470"/>
              <path d="M766.1 28.9C566.1 -28.6 500.1 94.4 371 48.4C242 1.8 242 5.4 184.8 20.6C128 35.8 132.3 44.9 89.9 52.5C28.6 63.7 0 0 0 0H1000C1000 0 990.1 40.9 916.4 48.1C842.7 55.3 829.6 47 766.1 28.9Z" fill="#003470"/>
            </svg>
          </div>




        <div className="mapas-cartaz mt-20 mb-40 flex items-center justify-center">
          <a href="https://example.com/mapescola" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className="h-[410px] border-r border-[#FFC719] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/mapescola.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] border-r border-[#FFC719] flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA ESCOLA
            </div>
          </a>

          <a href="https://example.com/mapsaude" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className="h-[410px] border-r border-[#FFC719] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/mapsaude.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] border-r border-[#FFC719] flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA SAÚDE
            </div>
          </a>

          <a href="https://example.com/maprestaurante" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className="h-[410px] border-r border-[#FFC719] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/maprestaurante.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] border-r border-[#FFC719] flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA RESTAURANTE
            </div>
          </a>

          <a href="https://example.com/mapmercado" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className="h-[410px] border-r border-[#FFC719] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/mapmercado.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] border-r border-[#FFC719] flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA MERCADO
            </div>
          </a>

          <a href="https://example.com/mapcras" className="relative flex-1 transition-transform duration-500 hover:rotate-y-180">
            <div
              className="h-[410px] border-r border-[#FFC719] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/mapcras.jpg')" }}
            ></div>
            <div className="absolute inset-0 h-[410px] border-r border-[#FFC719] flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white text-xl font-bold opacity-0 transition-opacity duration-500 hover:opacity-100">
              MAPA CRAS
            </div>
          </a>
        </div>

        
      </main>
    </div>
  );
};

export default Home;