import {
  FaInfoCircle,
  FaUsers,
  FaPassport,
  FaNewspaper,
  FaDigitalTachograph,
  FaPhoneSquareAlt,
  FaEye,
  FaHome,
  FaFileMedical,
  FaMoneyCheckAlt,
  FaSchool,
  FaPills,
  FaWeixin,
  FaPuzzlePiece,
  FaPortrait,
  FaSearch,
  FaViruses,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";

const Cidadao = () => {
  return (
    <div className="w-full flex ">
      {/* TODOS OS BOTOES */}
      <div className="flex flex-col gap-2 pt-1 pb-8 w-full ml-8 mr-8">
        {/* 1ª Fileira de botões */}
        <div className="flex gap-2 h-36">
          {/* PORTAL DA TRANSPARÊNCIA */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 w-64 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaInfoCircle className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  PORTAL DA TRANSPARÊNCIA
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O Portal da Transparência é uma plataforma online que
                disponibiliza informações sobre a gestão pública, como
                orçamento, licitações e contratos, promovendo a transparência e
                o controle social.
              </div>
            </div>
          </a>

          {/* PORTAL DO CONTRIBUINTE */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaUsers className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  PORTAL DO CONTRIBUINTE
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O Portal do Contribuinte é uma plataforma online que oferece
                serviços e informações sobre impostos municipais, facilitando o
                cumprimento das obrigações fiscais.
              </div>
            </div>
          </a>

          {/* CRÉDITO NFS-E */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <IoDocumentTextOutline className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  CRÉDITO NFS-E
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Crédito NFS-e" permite o aproveitamento de créditos
                gerados a partir da emissão de Notas Fiscais de Serviço
                Eletrônicas (NFS-e) para compensação de impostos municipais.
              </div>
            </div>
          </a>

          {/* EMISSÃO CTPS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPassport className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  EMISSÃO CTPS
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço de "Emissão da CTPS" permite obter a Carteira de
                Trabalho e Previdência Social, documento importante para o
                registro de informações trabalhistas e direitos dos
                trabalhadores
              </div>
            </div>
          </a>

          {/* PROGRAMA JABOATÃO APRENDIZ */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaUserGraduate className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  PROGRAMA JABOATÃO APRENDIZ
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O Programa Jaboatão Aprendiz oferece oportunidades de
                aprendizagem e estágio para jovens, visando a inserção no
                mercado de trabalho e o desenvolvimento profissional.
              </div>
            </div>
          </a>
        </div>

        {/* 2ª Fileira de botões */}
        <div className="flex gap-2 h-36">
          {/* DIÁRIO OFICIAL */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaNewspaper className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  DIÁRIO OFICIAL
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O Diário Oficial é um serviço que disponibiliza informações
                oficiais e publicações do município, promovendo transparência e
                acesso às ações do governo.
              </div>
            </div>
          </a>

          {/* AGENDAMENTO DOS SERVIÇOS DO INSS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaDigitalTachograph className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  AGENDAMENTO DOS SERVIÇOS <br /> DO INSS
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço de "Agendamento do INSS" permite marcar horários para
                atendimento presencial nas agências do Instituto Nacional do
                Seguro Social, agilizando o acesso aos serviços e beneficiando
                os segurados.
              </div>
            </div>
          </a>

          {/* DENÚNCIAS PROCON */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPhoneSquareAlt className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  DENÚNCIAS PROCON
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Denúncias PROCON" permite que os consumidores
                denunciem irregularidades relacionadas a produtos ou serviços,
                buscando a proteção e defesa dos direitos do consumidor.
              </div>
            </div>
          </a>

          {/* DE OLHO NA CONSULTA */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaEye className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  DE OLHO NA CONSULTA
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "De Olho na Consulta" permite acompanhar o agendamento
                e receber notificações sobre consultas médicas e exames,
                oferecendo mais controle e praticidade aos usuários.
              </div>
            </div>
          </a>

          {/* PAGUE SEUS TRIBUTOS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaHome className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  PAGUE SEUS TRIBUTOS
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Pague seus Tributos" oferece uma forma conveniente e
                segura de realizar o pagamento de impostos municipais.
              </div>
            </div>
          </a>
        </div>

        {/* 3ª Fileira de botões */}
        <div className="flex gap-2 h-36">
          {/* RESULTADO DE EXAMESL */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaFileMedical className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  RESULTADO DE EXAMES
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Resultado de Exames" permite acessar os resultados
                online, proporcionando comodidade e agilidade aos pacientes.
              </div>
            </div>
          </a>

          {/* PESQUISAS DE PREÇO */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaMoneyCheckAlt className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  PESQUISAS DE PREÇO
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Pesquisas de Preço" permite comparar preços de
                produtos ou serviços em diferentes estabelecimentos, facilitando
                a escolha consciente e a economia dos consumidores.
              </div>
            </div>
          </a>

          {/*RELAÇÃO DAS ESCOLAS MUNICIPAIS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaSchool className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  RELAÇÃO DAS ESCOLAS MUNICIPAIS
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Relação das Escolas Municipais" fornece informações
                sobre as escolas públicas do município, ajudando os pais a
                encontrar a melhor opção de ensino para seus filhos.
              </div>
            </div>
          </a>

          {/* LISTA DE MEDICAMENTO (REMUME) */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPills className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  LISTA DE MEDICAMENTO (REMUME)
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                A Lista de Medicamentos (REMUME) é uma relação dos medicamentos
                disponíveis na rede pública de saúde, garantindo o acesso da
                população aos tratamentos necessários.
              </div>
            </div>
          </a>

          {/* OUVIDORIA MUNICIPAL */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaWeixin className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  OUVIDORIA MUNICIPAL
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                A Ouvidoria Municipal é um serviço que recebe manifestações dos
                cidadãos sobre os serviços públicos municipais, buscando
                melhorias e soluções para as demandas da população.
              </div>
            </div>
          </a>

          {/* LICENCIAMENTO INTEGRADO */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaWeixin className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  LICENCIAMENTO INTEGRADO
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O Licenciamento Integrado simplifica e agiliza a obtenção de
                licenças e autorizações necessárias para empreendimentos,
                garantindo conformidade com as regulamentações aplicáveis.
              </div>
            </div>
          </a>
        </div>

        {/* 4ª Fileira de botões */}
        <div className="flex gap-2 h-36">
          {/* CIPTEA */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPuzzlePiece className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  CIPTEA
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                CIPTEA
              </div>
            </div>
          </a>

          {/* SISTEMAS DE RECURSOS HUMANOS (SARH) */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPortrait className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2, text-center pt-3">
                  SISTEMAS DE RECURSOS HUMANOS (SARH)
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                SISTEMAS DE RECURSOS HUMANOS (SARH)
              </div>
            </div>
          </a>

          {/* ACESSO AO SINDEC */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaSearch className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  ACESSO AO SINDEC
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Acesso ao SINDEC" permite aos consumidores registrar
                reclamações e obter informações sobre direitos do consumidor de
                forma prática e eficiente.
              </div>
            </div>
          </a>

          {/* JABOATÃO EM AÇÃO */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaViruses className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  JABOATÃO EM AÇÃO
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                "Jaboatão em Ação" é um serviço de combate ao COVID-19 que
                implementa ações de prevenção, testagem, vacinação e
                fiscalização para proteger a população.
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cidadao;
