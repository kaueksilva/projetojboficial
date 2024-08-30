"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLocationDot, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'; // Ícones sólidos
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; // Ícones de marcas

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
            ></div>
          </div>

          <div>
            <div className="flex-wrap font-roboto justify-center gap-2 grid grid-cols-4">
              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="cidadao"
              >
                CIDADÃO
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="empresa"
              >
                EMPRESA
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="servidor"
              >
                SERVIDOR
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-8 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="turista"
              >
                TURISTA
              </button>
            </div>

            <div className="flex flex-wrap font-roboto justify-center gap-4">
              <button
                className="bg-[#003476] text-white py-4 px-20 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="portal"
              >
                PORTAL DA TRANSPARÊNCIA
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-20 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="carta"
              >
                CARTA DE SERVIÇOS
              </button>

              <button
                className="bg-[#003476] text-white py-4 px-20 my-6 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-1"
                id="ppp"
              >
                PPP - SAÚDE
              </button>
            </div>
            <div className="mapas flex justify-center items-center">
              <a href="/mapas" className="flex items-center group">
                <FontAwesomeIcon 
                  icon={faMapLocationDot} 
                  className="text-white transition-colors duration-300 group-hover:text-yellow-500"
                />
                <p className="text-white font-roboto font-semibold text-base p-1 ml-2 transition-colors duration-300 group-hover:text-yellow-500 group-hover:animate-shake">
                  MAPAS
                </p>
              </a>
            </div>

          </div>
        </div>


        <div className="mapas border-t border-[#FFC719] bg-[#003470]">
          <h1 className="text-white font-montserrat font-semibold text-4xl flex justify-center p-20">
            MAPAS
          </h1>

          <div className="relative overflow-hidden my-8">
            <svg className="absolute inset-0 w-full h-24" viewBox="0 0 1440 320" fill="#003470">
              <path d="M0,64L30,101.3C60,139,120,213,180,229.3C240,245,300,203,360,186.7C420,171,480,181,540,197.3C600,213,660,235,720,229.3C780,224,840,192,900,165.3C960,139,1020,117,1080,96C1140,75,1200,53,1260,80C1320,107,1380,181,1410,213.3L1440,256V0H1410C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
          </div>
        </div>




        <div className="mapas-cartaz mt-40 mb-40 flex items-center justify-center">
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