"use client";
import Image from "next/image";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    institucional: false,
    cidade: false,
    secretarias: false,
    orgaos: false,
    servicos: false,
  });

  const [subMenuSocial, setSubMenuSocial] = useState(false);
  const [subMenuEconomico, setSubMenuEconomico] = useState(false);

  // Funções para controlar os submenus
  const toggleSubMenuSocial = () => {
    setSubMenuSocial(!subMenuSocial);
  };

  const toggleSubMenuEconomico = () => {
    setSubMenuEconomico(!subMenuEconomico);
  };

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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

          {/* Top Menu */}
          <div className="top-menu fixed top-0 w-full z-50 bg-[#003470] p-1.5 flex justify-center lg:justify-between">
            <div className="icones flex ml-10 gap-5">
              <i className="ri-twitter-x-line text-white text-[17px]"></i>
              <i className="ri-facebook-circle-fill text-white text-[17px]"></i>
              <i className="ri-instagram-line text-white text-[17px]"></i>
              <i className="ri-youtube-fill text-white text-[17px]"></i>
            </div>
            <ul className="menu-topo hidden lg:flex gap-3 mr-11 font-open-sans">
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  DIÁRIO OFICIAL
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  PORTAL DA TRANSPARÊNCIA
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  OUVIDORIA
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  PORTAL DO CONTRIBUINTE
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  PORTAL DO SERVIDOR
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  COVID-19
                </a>
              </li>
              <li className="nav-topo">
                <a
                  href="#"
                  className="nav-link text-white text-[12px] hover:underline"
                >
                  RADAR DA TRANSPARÊNCIA
                </a>
              </li>
              <li>
                <a href="#" className="icone-amarelo">
                  <Image
                    src="/images/iconamarelo.png"
                    alt="foto amarela"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Navbar */}
          <div className="menus">
            <div className="navbar fixed top-[38px] w-full z-40 bg-[#ffffffda] flex justify-between items-center p-[13px] pl-[20px] pr-[10px]">
              <a
                onClick={() => (window.location.href = "/")}
                href="#"
                className="logo pl-7"
              >
                <Image
                  src="/images/logo.png"
                  alt="Logo do Menu"
                  width={749}
                  height={190}
                  className="w-[210px] h-auto"
                />
              </a>

              <div className="lg:hidden pr-6">
                <button onClick={toggleMenu} className="text-[#224276]">
                  <i className="ri-menu-3-line text-[24px]"></i>
                </button>
              </div>

              <ul className="nav-menu hidden lg:flex pr-6 text-[#224276] font-open-sans text-[14px]">
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("institucional")}
                  onMouseLeave={() => toggleDropdown("institucional")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#224276] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#c8c8c87c] hover:before:z-[-1]"
                  >
                    INSTITUCIONAL
                  </a>
                  {dropdowns.institucional && (
                    <ul className="absolute left-0 w-48 mt-3 bg-[#1e73be] text-[#ffffff] text-[12px] shadow-lg">
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="../mapa_da_estrategia"
                          className="block px-4 py-4"
                        >
                          MAPA DA ESTRATÉGIA
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200">
                        <a
                          href="https://portaldatransparencia.jaboatao.pe.gov.br/estrutura-organizacional/"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          ESTRUTURA ORGANIZACIONAL
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("cidade")}
                  onMouseLeave={() => toggleDropdown("cidade")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#c8c8c87c] hover:before:z-[-1]"
                  >
                    A CIDADE
                  </a>
                  {dropdowns.cidade && (
                    <ul className="absolute left-0 mt-3 w-48 bg-[#1e73be] text-[#ffffff] text-[12px] shadow-lg">
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="../jaboatao_dos_guararapes"
                          className="block px-4 py-4"
                        >
                          JABOATÃO DOS GUARARAPES
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../yapoatan" className="block px-4 py-4">
                          YAPOATAN
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="../simbolos_da_cidade"
                          className="block px-4 py-4"
                        >
                          SÍMBOLOS DA CIDADE
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200">
                        <a
                          href="../feriados_municipais"
                          className="block px-4 py-4"
                        >
                          FERIADOS MUNICIPAIS
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("secretarias")}
                  onMouseLeave={() => toggleDropdown("secretarias")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#c8c8c87c] hover:before:z-[-1]"
                  >
                    SECRETARIAS
                  </a>
                  {dropdowns.secretarias && (
                    <ul className="absolute left-0 mt-3 w-48 bg-[#1e73be] text-[#ffffff] text-[12px] shadow-lg">
                      <li
                        className="relative hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]"
                        onMouseEnter={() => toggleDropdown("secretariaASC")}
                        onMouseLeave={() => toggleDropdown("secretariaASC")}
                      >
                        <a
                          href="#"
                          className="px-4 py-4 flex items-center justify-between"
                        >
                          SECRETARIA DE ASSISTÊNCIA SOCIAL <br /> E CIDADANIA
                          <IoIosArrowForward className="ml-2 text-[14px] text-white" />
                        </a>

                        {/* Submenu drop-right */}
                        {dropdowns.secretariaASC && (
                          <ul className="absolute top-0 left-full mt-0 w-48 bg-[#1e73be] text-white shadow-lg">
                            <li className="hover:bg-[#224276] transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                              <a
                                href="../endereco_dos_equipamentos_da_sas"
                                className="block px-4 py-4"
                              >
                                ENDEREÇOS DOS EQUIPAMENTOS DA SAS
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="https://sdu.jaboatao.pe.gov.br/"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          DESENVOLVIMENTO URBANO E MEIO AMBIENTE
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../controladoria" className="block px-4 py-4">
                          CONTROLADORIA
                        </a>
                      </li>
                      <li
                        className="relative hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]"
                        onMouseEnter={() =>
                          toggleDropdown("desenvolvimentoEconomico")
                        }
                        onMouseLeave={() =>
                          toggleDropdown("desenvolvimentoEconomico")
                        }
                      >
                        <a
                          href="#"
                          className="px-4 py-4 flex items-center justify-between"
                        >
                          DESENVOLVIMENTO ECONÔMICO
                          <IoIosArrowForward className="ml-2 text-[14px] text-white" />
                        </a>

                        {/* Submenu drop-right */}
                        {dropdowns.desenvolvimentoEconomico && (
                          <ul className="absolute top-0 left-full mt-0 w-48 bg-[#1e73be] text-white shadow-lg">
                            <li className="hover:bg-[#224276] transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                              <a
                                href="https://desenvolvimento.jaboatao.pe.gov.br/"
                                target="_blank"
                                className="block px-4 py-4"
                              >
                                DESENVOLVIMENTO ECONÔMICO E TURISMO
                              </a>
                            </li>
                            {/* <li className="hover:bg-[#224276] transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                              <a
                                href="https://economiacriativa.jaboatao.pe.gov.br"
                                target="_blank"
                                className="block px-4 py-4"
                              >
                                ECONOMIA CRIATIVA
                              </a>
                            </li> */}
                            <li className="hover:bg-[#224276] transition duration-200">
                              <a
                                href="https://trabalho.jaboatao.pe.gov.br"
                                target="_blank"
                                className="block px-4 py-4"
                              >
                                TRABALHO
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../desenvolvimento_institucional" className="block px-4 py-4">
                          DESENVOLVIMENTO INSTITUCIONAL
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="https://educacao.jaboatao.pe.gov.br/"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          EDUCAÇÃO
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../mulher" className="block px-4 py-4">
                          MULHER
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200">
                        <a href="../saude" className="block px-4 py-4">
                          SAÚDE
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("orgaos")}
                  onMouseLeave={() => toggleDropdown("orgaos")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#c8c8c87c] hover:before:z-[-1]"
                  >
                    ÓRGÃOS
                  </a>
                  {dropdowns.orgaos && (
                    <ul className="absolute left-0 mt-3 w-48 bg-[#1e73be] text-[#ffffff] text-[12px] shadow-lg">
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="https://emlume.com.br"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          EMLUME
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="https://jaboataoprev.jaboatao.pe.gov.br/"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          JABOATÃOPREV
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200">
                        <a
                          href="https://procon.jaboatao.pe.gov.br/"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          PROCON
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("servicos")}
                  onMouseLeave={() => toggleDropdown("servicos")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#c8c8c87c] hover:before:z-[-1]"
                  >
                    SERVIÇOS
                  </a>
                  {dropdowns.servicos && (
                    <ul className="absolute left-0 mt-3 w-48 bg-[#1e73be] text-[#ffffff] text-[12px] shadow-lg">
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../ppp" className="block px-4 py-4">
                          PPP - SAÚDE
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="https://ouvidoria.jaboatao.pe.gov.br/perguntas-frequentes/"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          PERGUNTAS FREQUENTES
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="../coleta_publica_de_orcamento"
                          className="block px-4 py-4"
                        >
                          COLETA PÚBLICA DE ORÇAMENTO
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a
                          href="../carta_de_servico"
                          className="block px-4 py-4"
                        >
                          CARTA DE SERVIÇOS
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../cidadao" className="block px-4 py-4">
                          CIDADÃO
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../empresa" className="block px-4 py-4">
                          EMPRESA
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200 border-b-[1px] border-[#c8c8c87c]">
                        <a href="../turista" className="block px-4 py-4">
                          TURISTA
                        </a>
                      </li>
                      <li className="hover:bg-[#224276] hover:text-white transition duration-200">
                        <a
                          href="https://servidor.jaboatao.pe.gov.br/"
                          target="_blank"
                          className="block px-4 py-4"
                        >
                          SERVIDOR
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#c8c8c87c] hover:before:z-[-1]"
                  >
                    ACESSIBILIDADE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#c8c8c87c] hover:before:z-[-1]"
                  >
                    <i className="ri-search-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Fullscreen Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-[#003470dc] text-white flex flex-col items-center justify-center p-8 lg:hidden">
              {" "}
              {/* Adiciona lg:hidden */}
              <div className="icones flex gap-5 mb-10">
                <i className="ri-twitter-x-line text-white text-[24px]"></i>
                <i className="ri-facebook-circle-fill text-white text-[24px]"></i>
                <i className="ri-instagram-line text-white text-[24px]"></i>
                <i className="ri-youtube-fill text-white text-[24px]"></i>
              </div>
              <ul className="text-center text-[20px] font-bold">
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("institucional")}
                    className={`flex items-center justify-center ${
                      dropdowns.institucional
                        ? "border-[1px] border-[#ffffff7c]"
                        : ""
                    }`}
                  >
                    INSTITUCIONAL
                    {dropdowns.institucional ? (
                      <FaMinus className="ml-2 text-[14px] text-white" />
                    ) : (
                      <FaPlus className="ml-2 text-[14px] text-white" />
                    )}
                  </a>
                  {dropdowns.institucional && (
                    <ul className="mt-2 mb-6 text-[14px] leading-3">
                      <li className="mb-3">
                        <a href="../mapa_da_estrategia">MAPA DA ESTRATÉGIA</a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="https://portaldatransparencia.jaboatao.pe.gov.br/estrutura-organizacional/"
                          target="_blank"
                        >
                          ESTRUTURA ORGANIZACIONAL
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("cidade")}
                    className={`flex items-center justify-center ${
                      dropdowns.cidade ? "border-[1px] border-[#ffffff7c]" : ""
                    }`}
                  >
                    A CIDADE
                    {dropdowns.cidade ? (
                      <FaMinus className="ml-2 text-[14px] text-white" />
                    ) : (
                      <FaPlus className="ml-2 text-[14px] text-white" />
                    )}
                  </a>
                  {dropdowns.cidade && (
                    <ul className="mt-2 mb-6 text-[14px] leading-3">
                      <li className="mb-3">
                        <a href="../jaboatao_dos_guararapes">
                          JABOATÃO DOS GUARARAPES
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="../yapoatan">YAPOATAN</a>
                      </li>
                      <li className="mb-3">
                        <a href="../simbolos_da_cidade">SÍMBOLOS DA CIDADE</a>
                      </li>
                      <li className="mb-3">
                        <a href="../feriados_municipais">FERIADOS MUNICIPAIS</a>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("secretarias")}
                    className={`flex items-center justify-center ${
                      dropdowns.secretarias
                        ? "border-[1px] border-[#ffffff7c]"
                        : ""
                    }`}
                  >
                    SECRETARIAS
                    {dropdowns.secretarias ? (
                      <FaMinus className="ml-2 text-[14px] text-white" />
                    ) : (
                      <FaPlus className="ml-2 text-[14px] text-white" />
                    )}
                  </a>
                  {dropdowns.secretarias && (
                    <ul className="mt-2 mb-6 text-[14px] leading-3">
                      {/* SECRETARIA DE ASSISTÊNCIA SOCIAL E CIDADANIA */}
                      <li className="mb-3">
                        <a
                          href="#"
                          onClick={toggleSubMenuSocial}
                          className={`flex items-center justify-center"
                    }`}
                        >
                          SECRETARIA DE ASSISTÊNCIA SOCIAL <br /> E CIDADANIA
                          {subMenuSocial ? (
                            <FaMinus className="ml-2 text-[14px] text-white" />
                          ) : (
                            <FaPlus className="ml-2 text-[14px] text-white" />
                          )}
                        </a>

                        {/* Dropdown da SECRETARIA DE ASSISTÊNCIA SOCIAL */}
                        {subMenuSocial && (
                          <ul className="ml-4 mt-2 text-[14px]">
                            <li className="mb-2">
                              <a href="../endereco_dos_equipamentos_da_sas">ENDEREÇOS DOS EQUIPAMENTOS DA SAS</a>
                            </li>
                          </ul>
                        )}
                      </li>

                      <li className="mb-3">
                        <a href="https://sdu.jaboatao.pe.gov.br/" target="_blank">
                          DESENVOLVIMENTO URBANO E MEIO AMBIENTE
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="../controladoria">
                          CONTROLADORIA
                        </a>
                      </li>

                      {/* DESENVOLVIMENTO ECONÔMICO */}
                      <li className="mb-3">
                        <a
                          href="#"
                          onClick={toggleSubMenuEconomico}
                          className={`flex items-center justify-center"
                    }`}
                        >
                          DESENVOLVIMENTO ECONÔMICO
                          {subMenuEconomico ? (
                            <FaMinus className="ml-2 text-[14px] text-white" />
                          ) : (
                            <FaPlus className="ml-2 text-[14px] text-white" />
                          )}
                        </a>

                        {/* Dropdown de DESENVOLVIMENTO ECONÔMICO */}
                        {subMenuEconomico && (
                          <ul className="ml-4 mt-2 text-[14px]">
                            <li className="mb-2">
                              <a href="https://desenvolvimento.jaboatao.pe.gov.br/" target="_blank">
                                DESENVOLVIMENTO ECONÔMICO E TURISMO
                              </a>
                            </li>
                            <li className="mb-2">
                              <a href="https://trabalho.jaboatao.pe.gov.br/" target="_blank">TRABALHO</a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="mb-3">
                        <a href="../desenvolvimento_institucional" onClick={toggleMenu}>
                          DESENVOLVIMENTO INSTITUCIONAL
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="https://educacao.jaboatao.pe.gov.br/"
                          target="_blank"
                        >
                          EDUCAÇÃO
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="../mulher" onClick={toggleMenu}>
                          MULHER
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="../saude" onClick={toggleMenu}>
                          SAÚDE
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("orgaos")}
                    className={`flex items-center justify-center ${
                      dropdowns.orgaos ? "border-[1px] border-[#ffffff7c]" : ""
                    }`}
                  >
                    ÓRGÃOS
                    {dropdowns.orgaos ? (
                      <FaMinus className="ml-2 text-[14px] text-white" />
                    ) : (
                      <FaPlus className="ml-2 text-[14px] text-white" />
                    )}
                  </a>
                  {dropdowns.orgaos && (
                    <ul className="mt-2 mb-6 text-[14px] leading-3">
                      <li className="mb-3">
                        <a href="https://emlume.com.br" target="_blank">
                          EMLUME
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="https://jaboataoprev.jaboatao.pe.gov.br/"
                          target="_blank"
                        >
                          JABOATÃOPREV
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="https://procon.jaboatao.pe.gov.br/"
                          target="_blank"
                        >
                          PROCON
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mb-6">
                  <a
                    href="#"
                    onClick={() => toggleDropdown("servicos")}
                    className={`flex items-center justify-center ${
                      dropdowns.servicos
                        ? "border-[1px] border-[#ffffff7c]"
                        : ""
                    }`}
                  >
                    SERVIÇOS
                    {dropdowns.servicos ? (
                      <FaMinus className="ml-2 text-[14px] text-white" />
                    ) : (
                      <FaPlus className="ml-2 text-[14px] text-white" />
                    )}
                  </a>
                  {dropdowns.servicos && (
                    <ul className="mt-2 mb-6 text-[14px] leading-3">
                      <li className="mb-3">
                        <a href="../ppp" onClick={toggleMenu}>
                          PPP - SAÚDE
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="https://ouvidoria.jaboatao.pe.gov.br/perguntas-frequentes/"
                          target="_blank"
                        >
                          PERGUNTAS FREQUENTES
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          href="../coleta_publica_de_orcamento"
                          onClick={toggleMenu}
                        >
                          COLETA PÚBLICA DE ORÇAMENTO
                        </a>
                      </li>

                      <li className="mb-3">
                        <a href="../carta_de_servico">CARTA DE SERVIÇOS</a>
                      </li>

                      <li className="mb-3">
                        <a href="../cidadao">CIDADÃO</a>
                      </li>

                      <li className="mb-3">
                        <a href="../empresa">EMPRESA</a>
                      </li>

                      <li className="mb-3">
                        <a href="../turista">TURISTA</a>
                      </li>

                      <li className="mb-3">
                        <a
                          href="https://servidor.jaboatao.pe.gov.br/"
                          target="_blank"
                        >
                          SERVIDOR
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="mb-6">
                  <a href="#" onClick={toggleMenu}>
                    ACESSIBILIDADE
                  </a>
                </li>
              </ul>
              <button onClick={toggleMenu} className="mt-10 text-[24px]">
                <i className="ri-close-line"></i>
              </button>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Menu;