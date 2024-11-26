import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="footer-principal">
        <div className="footer">
          <div className="footer-column1">
            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">MAPA DO SITE</h3> 
            <h4 className="footer-border"></h4>
            <ul className="footer-list text-base">
              <li>
                <a className="opensanshebrewcondensed-regular" href="/mapa_da_estrategia" >
                  MAPA DA ESTRATÉGIA
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://portaldatransparencia.jaboatao.pe.gov.br/">
                  PORTAL DA TRANSPARÊNCIA
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://portaldatransparencia.jaboatao.pe.gov.br/estrutura-organizacional/">
                  ESTRUTURA ORGANIZACIONAL
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="#">
                  GALERIA DE ELOGIOS
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/carta_de_servico">CIDADÃO</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/carta_de_servico">
                  CARTAS DE SERVIÇO
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/empresa">EMPRESA</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://servidor.jaboatao.pe.gov.br/">SERVIDOR</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/turista">TURISTA</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/ppp">PPP-SAUDE</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/mapaescolas">
                  MAPA DAS ESCOLAS MUNICIPAIS
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/mapaunidadesdesaude">
                  MAPA DAS UNIDADES DE SAÚDE POR REGIONAIS
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/maparestaurantes">
                  MAPA DOS BARES E RESTAURANTES
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/mapamercados">
                  MAPA DOS MERCADOS PÚBLICOS
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="/mapacrascreas">
                  MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column2">
            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">SITES RELACIONADOS</h3>
            <h4 className="footer-border"></h4>
            <ul className="footer-list opensanshebrewcondensed-regular text-base">
              <li>
                <a className="opensanshebrewcondensed-regular" href="http://amorpor.jaboatao.pe.gov.br/">AMOR JABOATÃO</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://bemestaranimal.jaboatao.pe.gov.br/">
                  BEM ESTAR ANIMAL
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://conselhodeusuarios.jaboatao.pe.gov.br/">
                  CONSELHO DE USUÁRIOS
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://deolhonaconsulta.jaboatao.pe.gov.br/">
                  DE OLHO NA CONSULTA
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://diariooficial.jaboatao.pe.gov.br/">DIÁRIO OFICIAL</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://educacao.jaboatao.pe.gov.br/">EDUCAÇÃO</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://economiacriativa.jaboatao.pe.gov.br/">
                  ECONOMIA CRIATIVA
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://emlume.com.br/">EMLUME</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://estacaobemestar.jaboatao.pe.gov.br/">
                  ESTAÇÃO BEM ESTAR
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://jaboataoemacao.jaboatao.pe.gov.br/">
                  JABOATÃO EM AÇÃO
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://jaboataoprev.jaboatao.pe.gov.br/">JABOATAOPREV</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://semam.jaboatao.pe.gov.br/">MEIO AMBIENTE</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://jaboatao.pe.gov.br/">OFICIAL</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://ouvidoria.jaboatao.pe.gov.br/">OUVIDORIA</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp">
                  PORTAL DO CONTRIBUINTE
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://portaldatransparencia.jaboatao.pe.gov.br/">
                  PORTAL DA TRANSPARÊNCIA
                </a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://procon.jaboatao.pe.gov.br/">PROCON</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://servidor.jaboatao.pe.gov.br/">SERVIDOR</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://trabalho.jaboatao.pe.gov.br/">TRABALHO</a>
              </li>
              <li>
                <a className="opensanshebrewcondensed-regular" href="https://viver.jaboatao.pe.gov.br/">VIVER</a>
              </li>
            </ul>
          </div>

          <div className="footer-column3">
            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">OUVIDORIA</h3>
            <h4 className="footer-border "></h4>
            <p className="opensanshebrewcondensed-regular text-base">OUVIDORIA GERAL: 0800 081 8999</p>
            <p className="opensanshebrewcondensed-regular text-base">(81) 9.9422-5177</p>
            <p className="opensanshebrewcondensed-regular text-base">ATENDIMENTO DE SEGUNDA A SEXTA-FEIRA, DAS 8H ÀS 14H</p>
            <p className="opensanshebrewcondensed-regular text-base">E-MAIL: ouvidoria@jaboatao.pe.gov.br</p>

            <h3 className="footer-title opensanshebrewcondensed-bold mt-3 text-xl">ACESSIBILIDADE</h3>
            <h4 className="footer-border"></h4>
            <ul className="footer-list">
              <li>
                <a href="http://example.com/informacoes" className="opensanshebrewcondensed-regular text-base">INFORMAÇÕES</a>
              </li>
            </ul>

            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">NAVEGABILIDADE</h3>
            <h4 className="footer-border"></h4>

            <ul className="footer-list">
              <li>
                <a href="http://example.com/glossario" className="opensanshebrewcondensed-regular text-base" >GLOSSÁRIO</a>
              </li>
            </ul>

            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">ACOMPANHE-NOS</h3>
            <h4 className="footer-border"></h4>
            <div className="icones-footer">
              <a
                href="https://twitter.com/jaboataoonline"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
              >
                <i className="ri-twitter-x-line text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
              </a>
              <a
                href="https://www.facebook.com/PrefeituradoJaboatao"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
              >
                <i className="ri-facebook-circle-fill text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
              </a>
              <a
                href="https://www.instagram.com/prefjaboatao/"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
              >
                <i className="ri-instagram-line text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
              </a>
              <a
                href="https://www.youtube.com/user/prefeiturajaboatao/videos"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-transparent transition-colors duration-300 hover:bg-white"
              >
                <i className="ri-youtube-fill text-2xl text-white transition-colors duration-300 group-hover:text-blue-900"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="parte-branca">
          <div className="logo-f">
            <Image
              src="/images/logo.png"
              alt="Logo do footer"
              width={200}
              height={100}
            />
          </div>
          <div className="details1 opensans-regular italic">
            <p>
              <strong>Palácio da Batalha</strong>
              <br />
              Av. Barreto de Menezes, 1648 – Prazeres –<br />
              Jaboatão dos Guararapes – PE, CEP 54.310-310
            </p>
          </div>
          <div className="details2 opensans-regular italic">
            <p>
              <strong>Complexo Administrativo</strong>
              <br />
              Estr. da Batalha, 1200 – Jardim Jordão,
              <br />
              Jaboatão dos Guararapes – PE, CEP 54315-570
            </p>
          </div>
        </div>

        <div className="credits opensans-regular">
          Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD
        </div>
      </footer>
    </div>
  );
};

export default Footer;
