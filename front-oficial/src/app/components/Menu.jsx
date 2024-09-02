"use client";
import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  const [dropdowns, setDropdowns] = useState({
    institucional: false,
    cidade: false,
    secretarias: false,
    orgaos: false,
    servicos: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="top-menu fixed top-0 w-full z-50 bg-[#003470] p-1.5 flex justify-center md:justify-between">
            <div className="icones flex ml-10 gap-5">
              <i className="ri-twitter-x-line text-white text-[17px]"></i>
              <i className="ri-facebook-circle-fill text-white text-[17px]"></i>
              <i className="ri-instagram-line text-white text-[17px]"></i>
              <i className="ri-youtube-fill text-white text-[17px]"></i>
            </div>
            <ul className="menu-topo hidden md:flex gap-3 mr-11 font-open-sans">
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
            <div className="navbar fixed top-[38px] w-full z-40 bg-[#ffffffed] flex justify-between items-center p-[13px] pl-[20px] pr-[10px]">
              <a href="#" className="logo pl-7">
                <Image
                  src="/images/logo.png"
                  alt="Logo do Menu"
                  width={749}
                  height={190}
                  className="w-[210px] h-auto"
                />
              </a>
              <div className="md:hidden pr-6">
                <button onClick={toggleMenu} className="text-[#224276]">
                  <i className="ri-menu-3-line text-[24px]"></i>
                </button>
              </div>
              <ul className="nav-menu hidden md:flex pr-6 md:flex text-[#224276] font-open-sans text-[14px]">
                <li
                  className="nav-item relative"
                  onMouseEnter={() => toggleDropdown("institucional")}
                  onMouseLeave={() => toggleDropdown("institucional")}
                >
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    INSTITUCIONAL
                  </a>
                  {dropdowns.institucional && (
                    <ul className="absolute left-0 w-48 bg-[#D4E4FF] text-[#224276] shadow-lg">
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          MAPA DA ESTRATÉGIA
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
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
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    A CIDADE
                  </a>
                  {dropdowns.cidade && (
                    <ul className="absolute left-0 w-48 bg-[#D4E4FF] text-[#224276] shadow-lg">
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 1
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 2
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 3
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
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    SECRETARIAS
                  </a>
                  {dropdowns.secretarias && (
                    <ul className="absolute left-0 w-48 bg-[#D4E4FF] text-[#224276] shadow-lg">
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 1
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 2
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 3
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
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    ÓRGÃOS
                  </a>
                  {dropdowns.orgaos && (
                    <ul className="absolute left-0 w-48 bg-[#D4E4FF] text-[#224276] shadow-lg">
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 1
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 2
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 3
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
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    SERVIÇOS
                  </a>
                  {dropdowns.servicos && (
                    <ul className="absolute left-0 w-48 bg-[#D4E4FF] text-[#224276] shadow-lg">
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 1
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 2
                        </a>
                      </li>
                      <li className="hover:bg-[#1E73BE] hover:text-white transition duration-200">
                        <a href="#" className="block px-4 py-4">
                          Submenu 3
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    ACESSIBILIDADE
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link hover:underline hover:decoration-[#1E73BE] hover:text-[#626262] transition duration-100 relative overflow-hidden px-4 py-4 hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-[#d4d4d47c] hover:before:z-[-1]"
                  >
                    <i className="ri-search-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Fullscreen Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-[#003470] text-white flex flex-col items-center justify-center p-8">
              <div className="icones flex gap-5 mb-10">
                <i className="ri-twitter-x-line text-white text-[24px]"></i>
                <i className="ri-facebook-circle-fill text-white text-[24px]"></i>
                <i className="ri-instagram-line text-white text-[24px]"></i>
                <i className="ri-youtube-fill text-white text-[24px]"></i>
              </div>
              <ul className="text-center text-[24px] font-bold">
                <li className="mb-6">
                  <a href="#" onClick={toggleMenu}>
                    INSTITUCIONAL
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" onClick={toggleMenu}>
                    A CIDADE
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" onClick={toggleMenu}>
                    SECRETARIAS
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" onClick={toggleMenu}>
                    ÓRGÃOS
                  </a>
                </li>
                <li className="mb-6">
                  <a href="#" onClick={toggleMenu}>
                    SERVIÇOS
                  </a>
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
