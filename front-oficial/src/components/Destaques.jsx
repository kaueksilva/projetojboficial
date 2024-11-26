import React from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente personalizado para as setas de navegação
const CustomArrow = ({ onClick, direction }) => {
  return (
    <button
        type="button"
        onClick={onClick}
        className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-white 
          ${
            direction === "left"
              ? "left-[-50px] bg-blue-500 hover:bg-blue-700" // Move a seta mais para o lado esquerdo
              : "right-2 bg-blue-500 hover:bg-blue-700"
          }
          rounded-full p-3 shadow-md`}
      >
        {direction === "left" ? "←" : "→"}
      </button>
  );
};

const Destaques = () => {
  // Lista de imagens com links
  const images = [

    { src: "/images/destaques/2.jpeg", link: "https://jaboatao.pe.gov.br/wp-content/uploads/2024/11/Locais-de-Vacinacao.pdf" },

    { src: "/images/destaques/3.jpeg", link: "https://jaboatao.pe.gov.br/wp-content/uploads/2024/02/Programacao-Blocos-Carnaval-Jaboatao-2024.pdf" },

    { src: "/images/destaques/4.jpeg", link: "https://www.tinus.com.br/csp/JABOATAO/portal/index.csp" },
    
    { src: "/images/destaques/7.jpeg", link: "https://viver.jaboatao.pe.gov.br/cadastro-lei-paulo-gustavo" },
  
    { src: "/images/destaques/9.jpeg", link: "/cadunico" },
   
    { src: "/images/destaques/11.jpg", link: "https://bit.ly/ColetivoPrefeituraJaboatao" },

    { src: "/images/destaques/13.jpeg", link: "https://jaboatao.pe.gov.br/wp-content/uploads/2022/07/JB-009-22-panfleto-A5-combate-ao-mosquito-web.pdf" },

    { src: "/images/destaques/16.jpeg", link: "https://jaboatao.pe.gov.br/mulherprotegida/" },

    { src: "/images/destaques/18.jpeg", link: "https://jaboatao.pe.gov.br/wp-content/uploads/2021/04/denuncia-maustratos.jpeg" },

    { src: "/images/destaques/19.jpeg", link: "https://jaboatao.pe.gov.br/wp-content/uploads/2021/04/ubs-pet.jpeg" },

    { src: "/images/destaques/20.png", link: "https://jaboatao.pe.gov.br/wp-content/uploads/2024/11/folder-.png" }
  ];

  // Configurações do slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };

  return (
    <section>
      {/* Título "Destaques" */}
      <div
        id="Destaques"
        className="Destaques border-t border-[#FFC719] bg-[#003470]"
      >
        <h1 className="font-montserrat font-semibold text-4xl text-white flex justify-center p-3 mt-28">
          DESTAQUES
        </h1>
      </div>

      {/* Divisor de forma */}
      <div className="relative w-full">
        <svg
          width="100%"
          viewBox="0 0 2000 96"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#003470]"
        >
          <path
            opacity="0.33"
            d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
          />
          <path
            opacity="0.66"
            d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
          />
          <path d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z" />
        </svg>
      </div>

      {/* Slider de imagens */}
      <div className="mt-12 mb-20 container mx-auto p-5 max-w-7xl">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center px-4">
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  alt={`Imagem ${index + 1}`}
                  className="w-80 h-auto object-cover rounded-md shadow-lg"
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Destaques;
