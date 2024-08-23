import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <div>
            <link
              href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
              rel="stylesheet"
            />
          </div>

          <div className="top-menu fixed top-0 w-full z-1000 bg-[#003470] p-1.5 flex justify-between">
            <div className="icones ml-10 flex gap-5">
              <i className="ri-twitter-x-line text-white text-[17px]"></i>
              <i className="ri-facebook-circle-fill text-white text-[17px]"></i>
              <i className="ri-instagram-line text-white text-[17px]"></i>
              <i className="ri-youtube-fill text-white text-[17px]"></i>
            </div>
            <ul className="menu-topo flex gap-4 mr-12 items-center">
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white font-open-sans leading-[22px] text-[12px] font-normal"
                >
                  DIÁRIO OFICIAL
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white font-open-sans leading-[22px] text-[12px] font-normal"
                >
                  PORTAL DA TRANSPARÊNCIA
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white font-open-sans leading-[22px] text-[12px] font-normal"
                >
                  OUVIDORIA
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white font-open-sans leading-[22px] text-[12px] font-normal"
                >
                  PORTAL DO CONTRIBUINTE
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white font-open-sans leading-[22px] text-[12px] font-normal"
                >
                  PORTAL DO SERVIDOR
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white font-open-sans leading-[22px] text-[12px] font-normal"
                >
                  COVID-19
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white font-open-sans leading-[22px] text-[12px] font-normal"
                >
                  RADAR DA TRANSPARÊNCIA
                </a>
              </li>
              <li>
                <a href="#" className="icone-amarelo">
                  <Image
                    src="/images/iconamarelo.png"
                    alt="foto amalera"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="menus">
            <div className="navbar fixed top-[38px] w-full z-999 bg-[#ffffffed] flex justify-between items-center p-[15px] pl-[20px] pr-[30px]">
              <a href="#" className="logo pl-7">
                <Image
                  src="/images/logo.png"
                  alt="Logo do Menu"
                  width={749}
                  height={190}
                  className="w-[235px] h-auto"
                />
              </a>
              <ul className="nav-menu list-none flex pr-6 hidden md:flex">
                <li className="nav-item ml-6">
                  <a
                    href="#"
                    className="nav-link text-[#224276] font-open-sans text-[16px] no-underline hover:underline hover:text-[#1E73BE] transition duration-600"
                  >
                    INSTITUCIONAL
                  </a>
                </li>
                <li className="nav-item ml-6">
                  <a
                    href="#"
                    className="nav-link text-[#224276] font-open-sans text-[16px] no-underline hover:underline hover:text-[#1E73BE] transition duration-600"
                  >
                    A CIDADE
                  </a>
                </li>
                <li className="nav-item ml-6">
                  <a
                    href="#"
                    className="nav-link text-[#224276] font-open-sans text-[16px] no-underline hover:underline hover:text-[#1E73BE] transition duration-600"
                  >
                    SECRETARIAS
                  </a>
                </li>
                <li className="nav-item ml-6">
                  <a
                    href="#"
                    className="nav-link text-[#224276] font-open-sans text-[16px] no-underline hover:underline hover:text-[#1E73BE] transition duration-600"
                  >
                    ÓRGÃOS
                  </a>
                </li>
                <li className="nav-item ml-6">
                  <a
                    href="#"
                    className="nav-link text-[#224276] font-open-sans text-[16px] no-underline hover:underline hover:text-[#1E73BE] transition duration-600"
                  >
                    SERVIÇOS
                  </a>
                </li>
                <li className="nav-item ml-6">
                  <a
                    href="#"
                    className="nav-link text-[#224276] font-open-sans text-[16px] no-underline hover:underline hover:text-[#1E73BE] transition duration-600"
                  >
                    ACESSIBILIDADE
                  </a>
                </li>
                <li className="nav-item ml-6">
                  <a
                    href="#"
                    className="nav-link text-[#224276] font-open-sans text-[16px] no-underline hover:underline hover:text-[#1E73BE] transition duration-600"
                  >
                    <i className="ri-search-line"></i>
                  </a>
                </li>
              </ul>
              <div className="hamburguer hidden md:hidden flex flex-col gap-1.5">
                <span className="bar w-full h-0.5 bg-black"></span>
                <span className="bar w-full h-0.5 bg-black"></span>
                <span className="bar w-full h-0.5 bg-black"></span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>

        <div className=" text-center w-full h-screen overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 w-full h-full z-[-1] flex">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: "url('images/igrejaaa.jpg')" }}
            ></div>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-100"
              style={{ backgroundImage: "url('images/igreja-1.jpg')" }}
            ></div>
          </div>

          <div className="flex flex-wrap font-roboto justify-center gap-4 grid grid-cols-4">
            <button
              className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
              id="cidadao"
            >
              CIDADÃO
            </button>
            <button
              className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
              id="empresa"
            >
              EMPRESA
            </button>
            <button
              className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
              id="servidor"
            >
              SERVIDOR
            </button>
            <button
              className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
              id="turista"
            >
              TURISTA
            </button>
            <button
              className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
              id="portal"
            >
              PORTAL DA TRANSPARÊNCIA
            </button>
            <button
              className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
              id="carta"
            >
              CARTA DE SERVIÇOS
            </button>
            <button
              className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
              id="ppp"
            >
              PPP - SAÚDE
            </button>
          </div>
        </div>

        <div className="mapas border-t border-[#FFC719] bg-[#003470] ">
          <h1 className="text-white font-montserrat font-semibold text-4xl flex  justify-center p-20">
            MAPAS
          </h1>
        </div>
        <div className="mapas-cartaz mt-40 mb-40">
          <div className="bg-[#00000] flex items-center justify-center ">
            
            <div className="border items-center justify-center flex-1 p-40 h-[410px]"  style={{ backgroundImage: "url('images/mapescola.jpg')" }}>
            </div>
            
            <div className="border items-center justify-center flex-1 p-40 h-[410px]" style={{ backgroundImage: "url('images/mapsaude.jpg')" }}>
            </div>

            <div className="border items-center justify-center flex-1 p-40 h-[410px]" style={{ backgroundImage: "url('images/maprestaurante.jpg')" }}>
            </div>

            <div className="border items-center justify-center flex-1 p-40 h-[410px]" style={{ backgroundImage: "url('images/mapmercado.jpg')" }}>
            </div>

            <div className="border items-center justify-center flex-1 p-40 h-[410px]" style={{ backgroundImage: "url('images/mapcras.jpg')" }}>
            </div>

          </div>
        </div>
      </main>

      <footer className="footer-principal">
                <div className="footer">
                    <div className="footer-column1">
                        <h3 className="footer-title">MAPA DO SITE</h3>
                        <h4 className="footer-border"></h4>
                        <ul className="footer-list">
                            <li>MAPA DA ESTRATÉGIA</li>
                            <li>PORTAL DA TRANSPARÊNCIA</li>
                            <li>ESTRUTURA ORGANIZACIONAL</li>
                            <li>GALERIA DE ELOGIOS</li>
                            <li>CIDADÃO</li>
                            <li>CARTAS DE SERVIÇO</li>
                            <li>EMPRESA</li>
                            <li>SERVIDOR</li>
                            <li>TURISTA</li>
                            <li>PPP-SAUDE</li>
                            <li>MAPA DAS ESCOLAS MUNICIPAIS</li>
                            <li>MAPA DAS UNIDADES DE SAÚDE POR REGIONAIS</li>
                            <li>MAPA DOS BARES E RESTAURANTES</li>
                            <li>MAPA DOS MERCADOS PÚBLICOS</li>
                            <li>MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS</li>
                        </ul>
                    </div>

                    <div className="footer-column2">
                        <h3 className="footer-title">SITES RELACIONADOS</h3>
                        <h4 className="footer-border"></h4>
                        <ul className="footer-list">
                            <li>AMOR JABOATÃO</li>
                            <li>BEM ESTAR ANIMAL</li>
                            <li>CONSELHO DE USUÁRIOS</li>
                            <li>DE OLHO NA CONSULTA</li>
                            <li>DIÁRIO OFICIAL</li>
                            <li>EDUCAÇÃO</li>
                            <li>ECONOMIA CRIATIVA</li>
                            <li>EMLUME</li>
                            <li>ESTAÇÃO BEM ESTAR</li>
                            <li>JABOATÃO EM AÇÃO</li>
                            <li>JABOATAOPREV</li>
                            <li>MEIO AMBIENTE</li>
                            <li>OFICIAL</li>
                            <li>OUVIDORIA</li>
                            <li>PORTAL DO CONTRIBUINTE</li>
                            <li>PORTAL DA TRANSPARÊNCIA</li>
                            <li>PROCON</li>
                            <li>SERVIDOR</li>
                            <li>TRABALHO</li>
                            <li>VIVER</li>
                        </ul>
                    </div>

                    <div className="footer-column3">
                        <h3 className="footer-title">OUVIDORIA</h3>
                        <h4 className="footer-border"></h4>
                        <p>OUVIDORIA GERAL: 0800 081 8999</p>
                        <p>(81) 9.9422-5177</p>
                        <p>ATENDIMENTO DE SEGUNDA A SEXTA-FEIRA, DAS 8H ÀS 14H</p>
                        <p>E-MAIL: ouvidoria@jaboatao.pe.gov.br</p>
                        <h3 className="footer-title">ACESSIBILIDADE</h3>
                        <h4 className="footer-border"></h4>
                        <p>INFORMAÇÕES</p>
                        <h3 className="footer-title">NAVEGABILIDADE</h3>
                        <h4 className="footer-border"></h4>
                        <p>GLOSSÁRIO</p>
                        <h3 className="footer-title">ACOMPANHE-NOS</h3>
                        <h4 className="footer-border"></h4>
                        <div className="icones-footer">
                            <i className="ri-twitter-x-line"></i>
                            <i className="ri-facebook-circle-fill"></i>
                            <i className="ri-instagram-line"></i>
                            <i className="ri-youtube-fill"></i>
                        </div>
                    </div>
                </div>

                <div className="parte-branca">
                    <div className="logo-f">
                        <Image src="/images/logo.png" alt="Logo do footer" width={200} height={100} />
                    </div>
                    <div className="details1">
                        <p><strong>Palácio da Batalha</strong><br />
                            Av. Barreto de Menezes, 1648 – Prazeres –<br />
                            Jaboatão dos Guararapes – PE, CEP 54.310-310</p>
                    </div>
                    <div className="details2">
                        <p><strong>Complexo Administrativo</strong><br />
                            Estr. da Batalha, 1200 – Jardim Jordão,<br />
                            Jaboatão dos Guararapes – PE, CEP 54315-570</p>
                    </div>
                </div>

                <div className="credits">
                    Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD
                </div>
            </footer>
    
    </div>
  );
}
