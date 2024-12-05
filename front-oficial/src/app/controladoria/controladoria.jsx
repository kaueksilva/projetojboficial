"use client";
import Image from "next/image";
import { FaRegBuilding } from "react-icons/fa";
import { CgInternal } from "react-icons/cg";
import { AiOutlineAudit } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { MdOutlineFactCheck } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";
import NotíciasControladoria from "@/components/NoticiasControladoria";



const Controladoria = () => {
  const handleScrollToCGM = (event) => {
    event.preventDefault();
    const target = document.getElementById("CGM");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToFaleconosco = (event) => {
    event.preventDefault();
    const target = document.getElementById("fale-conosco");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToNoticias = (event) => {
    event.preventDefault();
    const target = document.getElementById("noticias");
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
            src="/images/controladoria/controladoria.jpeg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className="bg-[#2f80ba] opacity-60 absolute inset-0"></div>

        {/* TELA PRINCIPAL */}
        <div className="relative z-10 text-center text-white px-4">
          {/* Ajuste responsivo do título */}
          <h1 className="futura-pt-heavy text-[35px] sm:text-[50px] md:text-[70px] lg:text-[90px] font-bold text-white">
            CONTROLADORIA
          </h1>
          <div
            className="border-t border-white mx-auto"
            style={{ borderWidth: "1px", width: "400px" }}
          ></div>


          {/* Botões */}
          {/* <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={handleScrollToCGM}
              className="bg-[#00306b] text-white py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base md:text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none font-roboto z-10"
            >
              CONHEÇA A CGM
            </button>

            <button
              onClick={handleScrollToNoticias}
              className="bg-[#00306b] text-white py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base md:text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none font-roboto z-10"
            >
              NOTÍCIAS
            </button>

            <button
              onClick={handleScrollToFaleconosco}
              className="bg-[#00306b] text-white py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base md:text-xl cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:border-[#009EE2] hover:animate-buzz focus:outline-none font-roboto z-10"
            >
              FALE CONOSCO
            </button>
          </div> */}
        </div>
      </div>

      

      {/* CONHEÇA A CGM */}
      <div
        id="CGM"
        className="border-t border-[#FFC719] bg-[radial-gradient(circle_at_center,#c2eaf9,#4fb5dd)] pb-[100px]"
      >
        <h1 className="BebasNeue-Regular text-[#00215A] text-5xl text-left ml-[6rem] pb-[10px] mt-[6rem]">
          CONHEÇA A CGM
        </h1>
        

        <div className=" flex flex-col md:flex-row mx-[6rem] items-center justify-center z-10 text-center text-white cursor-pointer md:border-[1px] border-[#FFC719]">
          {/* INSTITUCIONAL */}
          <a
            href="./controladoria/institucional"
            onMouseEnter={(e) =>
              (e.currentTarget.querySelector(".hover-text").style.opacity = "1")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.querySelector(".hover-text").style.opacity = "0")
            }
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4fb5dd,#00306b)] opacity-80 z-0"/>
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <FaRegBuilding className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  INSTITUCIONAL
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none opacity-0 transition-opacity duration-500 hover-text">
            <div className="text-center">
            <h3 className="text-lg font-bold pb-3 ">INSTITUCIONAL</h3>
            <p className="text-base">Conheça a estrutura organizacional da CGM, sua missão, objetivo e contatos</p>
          </div>
            </div>
          </a>

          {/* CONTROLE INTERNO */}
          <a
            href="./controladoria/controle-interno"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4fb5dd,#00306b)] opacity-80 z-0"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <CgInternal className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  CONTROLE INTERNO
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100 ">
            <div className="text-center"> 
              <h3 className="text-lg font-bold pb-3">CONTROLE INTERNO</h3>
              <p className="text-base">Têm como objetuco desenvolver competências com foco na melhoria do desempenho institucional e fortalecer o equilíbio fiscal, atuando como um instrumento importante para a gestão eficiente e transparente dos recursos público</p>
            </div>
            </div>
          </a>

          {/* AUDITORIA */}
          <a
            href="./controladoria/auditoria"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4fb5dd,#00306b)] opacity-80 z-0"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <AiOutlineAudit className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  AUDITORIA
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="text-center"> 
              <h3 className="text-lg font-bold pb-3">AUDITORIA</h3>
              <p className="text-base">Tem como objetivo propor melhorias no desenvolvimento das atividades internas, orientando os gestores quanto a legalidade e utilização dos recursos, além de prezarpela eficiência da gestão pública municipal.</p>
            </div>
            </div>
          </a>

          {/* OUVIDORIA */}
          <a
            href="https://ouvidoria.jaboatao.pe.gov.br/"
            target="_blank"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4fb5dd,#00306b)] opacity-80 z-0"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <TiMessages className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  OUVIDORIA
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="text-center"> 
              <h3 className="text-lg font-bold pb-3">OUVIDORIA</h3>
              <p className="text-base">Promover a participação popular, orientação das demais umidades e contribuir efetivamente para a melhoria da qualidade dos serviços públicos municipais.</p>
            </div>
            </div>
          </a>

          {/* CORREIÇÃO */}
          <a
            href="./controladoria/correicao"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group md:border-r-[1px] border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4fb5dd,#00306b)] opacity-80 z-0"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <MdOutlineFactCheck className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  CORREIÇÃO
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg  opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="text-center"> 
              <h3 className="text-lg font-bold pb-3">CORREIÇÃO</h3>
              <p className="text-base">Tem como atribuição zelar pela integridade funcional de agentes públicos. Atuando na apuração de irregularidades administrativas, propondo medidas para padronizar procedimentos e sanar potenciais desvios de conduta ou práticas lesivas ao patrimônio público.</p>
            </div>
            </div>
          </a>

          {/* TRANSPARÊNCIA */}
          <a
            href="https://portaldatransparencia.jaboatao.pe.gov.br/"
            className="relative flex-1 transition-transform duration-500 hover:rotate-y-180 group border-[#FFC719] w-full md:w-auto"
          >
            <div className="relative h-[16rem] md:h-[24rem] bg-cover bg-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#4fb5dd,#00306b)] opacity-80 z-0"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full transition-opacity duration-500 group-hover:opacity-0">
                <RiSearchEyeLine className="text-5xl md:text-7xl text-white mb-2" />
                <h3 className="text-white text-lg font-bold leading-none">
                  TRANSPARÊNCIA
                </h3>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#224276] text-white leading-none text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="text-center"> 
              <h3 className="text-lg font-bold pb-3">TRANSPARÊNCIA</h3>
              <p className="text-base">Disponibiliza informações relacionadas às atividades governamentais, promovendo a transparência dos processos administrativos, orçamentários e decisórios da gestão.</p>
            </div>
            </div>
          </a>
        </div>
      </div>


      {/* NOTICIAS */}
      <div id="noticias" className="border-t border-[#FFC719] bg-[#003470]">
          <h1 
          className="Montserrat-SemiBold text-white font-montserrat font-semibold text-4xl flex justify-center p-3 mt-10 z-10 ">
            NOTÍCIAS
          </h1>
        {/* DIVISOR DE FORMA*/}
        <div className="relative w-full bg-[#3271A5]">
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

        <div className=" bg-[#3271A5] p-8 flex items-center justify-center">
            <NotíciasControladoria />
        </div>
      </div>


      {/* FALE CONOSCO */}
      <div>
        <div
          id="fale-conosco"
          className="fale-conosco border-t border-[#FFC719] bg-[#003470]"
        >
          <h1 className="Montserrat-SemiBold text-white font-montserrat font-semibold text-4xl flex justify-center p-3 mt-10 z-10 ">
            FALE CONOSCO
          </h1>
        </div>

        {/* DIVISOR DE FORMA*/}
        <div className="relative w-full bg-[#4168A0]">
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

        <div className="min-h-screen bg-[#4168A0] text-white p-8 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-[1500px] w-full">
            <div className="w-full md:w-1/2 h-[600px]">
              {" "}
              {/* Aumentei a altura para 96 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5114253262363!2d-34.925620124244986!3d-8.151115381647537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1dc7561cffd%3A0xe6fbfb0ef7cd1451!2sCentro%20Administrativo%20de%20Jaboat%C3%A3o%20dos%20Guararapes!5e0!3m2!1spt-BR!2sbr!4v1726165314278!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-full md:w-1/2 h-[600px] bg-[#000000aa] p-6 rounded-lg shadow-md flex flex-col justify-between overflow-hidden">
              {" "}
              {/* Aumentei a altura para 96 */}
              <h2 className="text-2xl font-semibold mb-4">Fale Conosco</h2>
              <p>
                Complexo Administrativo – Estrada da Batalha nº 1200, Jardim
                Jordão – Jaboatão dos Guararapes – PE
              </p>
              <p>CEP: 54.315-570</p>
              <br />
              <p>Telefone: (81) 3134-9252</p>
              <p>Email: cgm@jaboatao.pe.gov.br</p>
              <br />
              <p className="mb-4">
                O atendimento é realizado de segunda a sexta-feira, das 8h às
                16h.
              </p>
              <form className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="p-2 rounded bg-[#000000aa] text-white outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  className="p-2 rounded bg-[#000000aa] text-white outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <textarea
                  placeholder="Mensagem"
                  className="p-2 rounded bg-[#000000aa] text-white outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition w-full"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controladoria;
