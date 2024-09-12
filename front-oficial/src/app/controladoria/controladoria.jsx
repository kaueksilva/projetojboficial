"use client";
import Image from "next/image";
import { FaSchool, FaRegBuilding } from "react-icons/fa";
import { CgInternal } from "react-icons/cg";
import { AiOutlineAudit } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { MdOutlineFactCheck } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";

const Controladoria = () => {
  const handleScrollToCGM = (event) => {
    event.preventDefault();
    const target = document.getElementById("CGM");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/controladoria/controladoria.jpeg" // Caminho da sua imagem
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="bg-[#0075B4] opacity-60 absolute inset-0"></div>

        {/* Conteúdo */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-[90px] font-bold mb-5">CONTROLADORIA</h1>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleScrollToCGM}
              className="bg-[#003476] text-white py-4 px-8 text-base sm:text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none font-roboto z-10"
            >
              CONHEÇA A CGM
            </button>

            <button className="bg-[#003476] text-white py-4 px-8 text-base sm:text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none font-roboto z-10">
              NOTÍCIAS
            </button>

            <button className="bg-[#003476] text-white py-4 px-8 text-base sm:text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none font-roboto z-10">
              FALE CONOSCO
            </button>
          </div>
        </div>
      </div>

      <div
        id="CGM"
        className="border-t border-[#FFC719] bg-[radial-gradient(circle_at_center,#ffffff,#6EC1E4)] pb-[100px]"
      >
        <h1 className=" text-[#00215A] font-bold text-[30px] text-left ml-[6rem] pb-[10px] mt-[6rem]">
          CONHEÇA A CGM
        </h1>

        <div className="mapas-cartaz  flex flex-col md:flex-row mx-[6rem] items-center justify-center z-10 text-center text-white cursor-pointer md:border-[1px] border-[#FFC719]">
          {/* INSTITUCIONAL */}
          <a
            onClick={() => (window.location.href = "../mapaescolas")}
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <FaRegBuilding className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  INSTITUCIONAL
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              INSTITUCIONAL
            </div>
          </a>

          {/* CONTROLE INTERNO */}
          <a
            onClick={() => (window.location.href = "../mapaescolas")}
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <CgInternal className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  CONTROLE INTERNO
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              CONTROLE INTERNO
            </div>
          </a>

          {/* AUDITORIA */}
          <a
            onClick={() => (window.location.href = "../mapaescolas")}
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <AiOutlineAudit className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  AUDITORIA
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              AUDITORIA
            </div>
          </a>

          {/* OUVIDORIA */}
          <a
            onClick={() => (window.location.href = "../mapaescolas")}
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <TiMessages className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  OUVIDORIA
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              OUVIDORIA
            </div>
          </a>

          {/*  CORREIÇÃO */}
          <a
            onClick={() => (window.location.href = "../mapaescolas")}
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <MdOutlineFactCheck className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  CORREIÇÃO
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              CORREIÇÃO
            </div>
          </a>

          {/*  TRANSPARÊNCIA */}
          <a
            onClick={() => (window.location.href = "../mapaescolas")}
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              {/* Sobreposição de cor */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] opacity-80 z-0"></div>

              {/* Sobreposição de texto e ícone */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <RiSearchEyeLine className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  TRANSPARÊNCIA
                </h3>
              </div>
            </div>

            {/* Sobreposição com gradiente e texto no hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
              TRANSPARÊNCIA
            </div>
          </a>
        </div>
      </div>

      <div className="min-h-screen bg-[#003470] text-white p-8">
        <h1 className="text-4xl font-bold text-center mb-8">FALE CONOSCO</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
          <div className="w-full md:w-1/2 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.8353962270723!2d-34.98334928469077!3d-8.11211048416864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1b557b36d49b%3A0x16d5d7bd321be423!2sCentro%20Administrativo%20de%20Jaboat%C3%A3o%20dos%20Guararapes!5e0!3m2!1sen!2sbr!4v1635989337205!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 bg-[#000000aa] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Fale Conosco</h2>
            <p>
              Complexo Administrativo – Estrada da Batalha nº 1200, Jardim
              Jordão – Jaboatão dos Guararapes – PE
            </p>
            <p>CEP: 54.315-570</p>
            <p>Telefone: (81) 3134-9252</p>
            <p>Email: cgm@jaboatao.pe.gov.br</p>
            <p className="mb-4">
              O atendimento é realizado de segunda a sexta-feira, das 8h às 16h.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="p-2 rounded bg-blue-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Seu E-mail"
                className="p-2 rounded bg-blue-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Mensagem"
                className="p-2 rounded bg-blue-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controladoria;
