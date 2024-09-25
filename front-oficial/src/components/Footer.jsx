import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="footer-principal">
        <div className="footer">
          <div className="footer-column1">
            <h3 className="footer-title opensanshebrewcondensed-bold text-xl">MAPA DO SITE</h3> 
            <h4 className="footer-border"></h4>
            <ul className="footer-list opensanshebrewcondensed-regular text-base">
              <li>
                <a href="http://example.com/mapa-estrategia" >
                  MAPA DA ESTRATÉGIA
                </a>
              </li>
              <li>
                <a href="http://example.com/portal-transparencia">
                  PORTAL DA TRANSPARÊNCIA
                </a>
              </li>
              <li>
                <a href="http://example.com/estrutura-organizacional">
                  ESTRUTURA ORGANIZACIONAL
                </a>
              </li>
              <li>
                <a href="http://example.com/galeria-elogios">
                  GALERIA DE ELOGIOS
                </a>
              </li>
              <li>
                <a href="http://example.com/cidadao">CIDADÃO</a>
              </li>
              <li>
                <a href="http://example.com/cartas-servico">
                  CARTAS DE SERVIÇO
                </a>
              </li>
              <li>
                <a href="http://example.com/empresa">EMPRESA</a>
              </li>
              <li>
                <a href="http://example.com/servidor">SERVIDOR</a>
              </li>
              <li>
                <a href="http://example.com/turista">TURISTA</a>
              </li>
              <li>
                <a href="http://example.com/ppp-saude">PPP-SAUDE</a>
              </li>
              <li>
                <a href="http://example.com/mapa-escolas-municipais">
                  MAPA DAS ESCOLAS MUNICIPAIS
                </a>
              </li>
              <li>
                <a href="http://example.com/mapa-unidades-saude">
                  MAPA DAS UNIDADES DE SAÚDE POR REGIONAIS
                </a>
              </li>
              <li>
                <a href="http://example.com/mapa-bares-restaurantes">
                  MAPA DOS BARES E RESTAURANTES
                </a>
              </li>
              <li>
                <a href="http://example.com/mapa-mercados-publicos">
                  MAPA DOS MERCADOS PÚBLICOS
                </a>
              </li>
              <li>
                <a href="http://example.com/mapa-unidades-cras-creas">
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
                <a href="http://example.com/amor-jaboatao">AMOR JABOATÃO</a>
              </li>
              <li>
                <a href="http://example.com/bem-estar-animal">
                  BEM ESTAR ANIMAL
                </a>
              </li>
              <li>
                <a href="http://example.com/conselho-usuarios">
                  CONSELHO DE USUÁRIOS
                </a>
              </li>
              <li>
                <a href="http://example.com/de-olho-na-consulta">
                  DE OLHO NA CONSULTA
                </a>
              </li>
              <li>
                <a href="http://example.com/diario-oficial">DIÁRIO OFICIAL</a>
              </li>
              <li>
                <a href="http://example.com/educacao">EDUCAÇÃO</a>
              </li>
              <li>
                <a href="http://example.com/economia-criativa">
                  ECONOMIA CRIATIVA
                </a>
              </li>
              <li>
                <a href="http://example.com/emlume">EMLUME</a>
              </li>
              <li>
                <a href="http://example.com/estacao-bem-estar">
                  ESTAÇÃO BEM ESTAR
                </a>
              </li>
              <li>
                <a href="http://example.com/jaboatao-em-acao">
                  JABOATÃO EM AÇÃO
                </a>
              </li>
              <li>
                <a href="http://example.com/jaboataoprev">JABOATAOPREV</a>
              </li>
              <li>
                <a href="http://example.com/meio-ambiente">MEIO AMBIENTE</a>
              </li>
              <li>
                <a href="http://example.com/oficial">OFICIAL</a>
              </li>
              <li>
                <a href="http://example.com/ouvidoria">OUVIDORIA</a>
              </li>
              <li>
                <a href="http://example.com/portal-contribuinte">
                  PORTAL DO CONTRIBUINTE
                </a>
              </li>
              <li>
                <a href="http://example.com/portal-transparencia">
                  PORTAL DA TRANSPARÊNCIA
                </a>
              </li>
              <li>
                <a href="http://example.com/procon">PROCON</a>
              </li>
              <li>
                <a href="http://example.com/servidor">SERVIDOR</a>
              </li>
              <li>
                <a href="http://example.com/trabalho">TRABALHO</a>
              </li>
              <li>
                <a href="http://example.com/viver">VIVER</a>
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

            <h3 className="footer-title opensanshebrewcondensed-bold text-xl"><br/>ACESSIBILIDADE</h3>
            <h4 className="footer-border"></h4>
            <ul className="footer-list">
              <li>
                <a href="http://example.com/informacoes" className="opensanshebrewcondensed-regular text-base">INFORMAÇÕES</a>
              </li>
            </ul>

            <h3 className="footer-title opensanshebrewcondensed-bold text-xl"><br/>NAVEGABILIDADE</h3>
            <h4 className="footer-border"></h4>

            <ul className="footer-list">
              <li>
                <a href="http://example.com/glossario" className="opensanshebrewcondensed-regular text-base" >GLOSSÁRIO</a>
              </li>
            </ul>

            <h3 className="footer-title opensanshebrewcondensed-bold text-xl"><br/>ACOMPANHE-NOS</h3>
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
