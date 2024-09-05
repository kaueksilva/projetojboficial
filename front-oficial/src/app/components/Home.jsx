"use client";
import { useState, useEffect } from "react";
import { FaSchool, FaHospital, FaHouseUser } from "react-icons/fa";
import { FaStore, FaMapLocationDot } from "react-icons/fa6";
import { GiKnifeFork } from "react-icons/gi";

const handleScrollToMapas = (event) => {
  event.preventDefault();
  const target = document.getElementById("mapas");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};

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
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setFadeOut(false);
      }, 1000); // Duração do fade-out
    }, 5000); // Tempo total de exibição de cada imagem

    return () => clearInterval(interval);
  }, [nextImageIndex]);

  const currentImage = images[currentImageIndex];
  const nextImage = images[nextImageIndex];

  return (
    <div>
      <main className="bg-[#dfdfdf] z-[-1]">
        <div className="text-center w-full h-screen overflow-hidden flex justify-center items-center relative z-20">
          <div className="absolute inset-0 w-full h-full z-[-1]">
            {/* Camada de imagem atual */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundImage: `url(${currentImage})` }}
            />
            {/* Camada de próxima imagem */}
            <div
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                fadeOut ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${nextImage})` }}
            />
            <div className="absolute inset-0 bg-black opacity-50" />
            {/* Overlay escuro */}
          </div>

          {/* Botões e outros elementos */}
          <div
            id="botoes"
            className=" justify-center max-w-[90%] mx-auto mt-11 z-10"
          >
            {/* Primeira linha de botões com tamanho limitado */}
            <div className=" flex-wrap grid grid-cols-4 gap-2 max-w-[85%] mx-auto mb-7">
              <button
                onClick={() => (window.location.href = "../cidadao")}
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none font-roboto z-10"
              >
                CIDADÃO
              </button>

              <button
                onClick={() => (window.location.href = "../empresa")}
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-10"
              >
                EMPRESA
              </button>

              <button
                onClick={() => (window.location.href = "../servidor")}
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-10"
              >
                SERVIDOR
              </button>

              <button
                onClick={() => (window.location.href = "../turista")}
                className="bg-[#003476] text-white py-4 px-8 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-10"
              >
                TURISTA
              </button>
            </div>

            {/* Segunda linha de botões */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                onClick={() =>
                  (window.location.href = "../portal-transparencia")
                }
                className="bg-[#003476] text-white py-4 px-20 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-10"
              >
                PORTAL DA TRANSPARÊNCIA
              </button>

              <button
                onClick={() => (window.location.href = "../carta-servico")}
                className="bg-[#003476] text-white py-4 px-20 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-10"
              >
                CARTA DE SERVIÇOS
              </button>

              <button
                onClick={() => (window.location.href = "../ppp")}
                className="bg-[#003476] text-white py-4 px-20 text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none z-10"
              >
                PPP - SAÚDE
              </button>
            </div>

            {/* Botão MAPAS */}
            <div className="mapas flex justify-center items-center z-10">
              <button
                onClick={handleScrollToMapas}
                className="flex items-center group"
              >
                {/* faz rolar para baixo de forma suave com handleScrollToMapas*/}
                <FaMapLocationDot className="text-white transition-colors duration-300 group-hover:text-yellow-500 text-2xl" />
                <p className="text-white font-roboto font-semibold text-lg p-1 ml-2 transition-colors duration-300 group-hover:text-yellow-500 group-hover:animate-shake">
                  MAPAS
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* O MEIO E O TITULO MAPAS!!! */}
        <div
          id="mapas"
          className=" mapas border-t border-[#FFC719] bg-[#003470]"
        >
          <h1 className="text-white font-montserrat font-semibold text-4xl flex justify-center p-3 mt-28 z-10">
            MAPAS
          </h1>
        </div>

        {/* DIVISOR DE FORMA*/}
        <div className="relative w-full">
          <svg
            width="100%"
            viewBox="0 0 2000 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.33"
              d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
              fill="#003470"
            />
            <path
              opacity="0.66"
              d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
              fill="#003470"
            />
            <path
              d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
              fill="#003470"
            />
          </svg>
        </div>

        {/* MAPAS*/}
        <div className="mapas-cartaz mt-20 flex items-center justify-center z-10 text-center text-white">
          {/*ESCOLAS MUNICIPAIS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group border-r-2 border-[#FFC719]"
          >
            <div
              className="relative h-[24rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/escolas.jpg')" }}
            >
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[#003470] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <FaSchool className="text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  MAPA DAS ESCOLAS MUNICIPAIS
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              MAPA DAS ESCOLAS MUNICIPAIS
            </div>
          </a>

          {/*UNIDADES DE SAUDE POR REGIONAIS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group border-r-2 border-[#FFC719]"
          >
            <div
              className="relative h-[24rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hospitais.jpg')" }}
            >
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[#003470] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <FaHospital className="text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  MAPA DAS UNIDADES DE SAUDE <br />
                  POR REGIONAIS
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              MAPA DAS UNIDADES DE SAUDE <br />
              POR REGIONAIS
            </div>
          </a>

          {/* BARES E RESTAURANTES */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group border-r-2 border-[#FFC719]"
          >
            <div
              className="relative h-[24rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/vinho.jpg')" }}
            >
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[#003470] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <GiKnifeFork className="text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  MAPA DOS BARES E <br /> RESTAURANTES
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              MAPA DOS BARES E <br /> RESTAURANTES
            </div>
          </a>

          {/*MERCADOS PUBLICOS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group border-r-2 border-[#FFC719]"
          >
            <div
              className="relative h-[24rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/mercados.jpeg')" }}
            >
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[#003470] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <FaStore className="text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  MAPA DOS MERCADOS <br /> PÚBLICOS
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              MAPA DOS MERCADOS <br /> PÚBLICOS
            </div>
          </a>

          {/*  UNIDADES DO CRAS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group border-r-2 border-[#FFC719]"
          >
            <div
              className="relative h-[24rem] bg-cover bg-center"
              style={{ backgroundImage: "url('/images/cras.png')" }}
            >
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[#003470] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <FaHouseUser className="text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  MAPA DAS UNIDADES DO <br /> CRAS E CREAS MUNICIPAIS
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#009EE2,#003476)] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              MAPA DOS BARES E <br /> RESTAURANTES
            </div>
          </a>
        </div>

        <div className="w-full h-40 bg-[#dfdfdf]"></div>
      </main>
    </div>
  );
};

export default Home;
