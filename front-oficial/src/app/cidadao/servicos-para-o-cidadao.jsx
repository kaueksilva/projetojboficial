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
import { FaUserGraduate, FaUserGear } from "react-icons/fa6";
const Cidadao = () => {
  return (
    <div>
      {/* primeira fileira */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-[10px] my-[50px] mx-[30px]">

        {/* PORTAL DA TRANSPARÊNCIA */}
        <a
          href="http://portaldatransparencia.jaboatao.pe.gov.br"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaInfoCircle className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
              PORTAL DA TRANSPARÊNCIA
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O Portal da Transparência é uma plataforma online que
              disponibiliza informações sobre a gestão pública, como orçamento,
              licitações e contratos, promovendo a transparência e o controle
              social.
            </div>
          </div>
        </a>

        {/* PORTAL DO CONTRIBUINTE */}
        <a
          href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaUsers className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
              PORTAL DO CONTRIBUINTE
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O Portal do Contribuinte é uma plataforma online que oferece
              serviços e informações sobre impostos municipais, facilitando o
              cumprimento das obrigações fiscais.
            </div>
          </div>
        </a>

        {/* CRÉDITO NFS-E */}
        <a
          href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp?013BRbO9665ucenl65822KgEX3536ip=thiI20Reu800ZoY88426XYvVh464PlHXw6122B3064267RNfv404&amp;CHATELA=opcoes.csp-WLILEV1=8-WLILEV2=-577xSKV0388fqxLr54345EOJu1776QL=muDM92PHp015sGt89160eANUs679gFqex7038s9133882kqXr914"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <IoDocumentTextOutline className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
              CRÉDITO NFS-E
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O serviço "Crédito NFS-e" permite o aproveitamento de créditos
              gerados a partir da emissão de Notas Fiscais de Serviço
              Eletrônicas (NFS-e) para compensação de impostos municipais.
            </div>
          </div>
        </a>

        {/* EMISSÃO CTPS */}
        <a
          href="https://trabalho.jaboatao.pe.gov.br/agendamento-ctps/"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaPassport className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
              EMISSÃO CTPS
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O serviço de "Emissão da CTPS" permite obter a Carteira de
              Trabalho e Previdência Social, documento importante para o
              registro de informações trabalhistas e direitos dos trabalhadores.
            </div>
          </div>
        </a>

        {/* PROGRAMA JABOATÃO APRENDIZ */}
        <a 
        href="https://trabalho.jaboatao.pe.gov.br/aprendiz/" target="_blank">
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaUserGraduate className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
              PROGRAMA JABOATÃO APRENDIZ
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O Programa Jaboatão Aprendiz oferece oportunidades de aprendizagem
              e estágio para jovens, visando a inserção no mercado de trabalho e
              o desenvolvimento profissional.
            </div>
          </div>
        </a>

        {/* DIÁRIO OFICIAL */}
        <a
          href="https://diariooficial.jaboatao.pe.gov.br"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaNewspaper className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            DIÁRIO OFICIAL
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O Diário Oficial é um serviço que disponibiliza informações
                oficiais e publicações do município, promovendo transparência e
                acesso às ações do governo.
            </div>
          </div>
        </a>

        {/* AGENDAMENTO DOS SERVIÇOS DO INSS */}
        <a
          href="https://desenvolvimento.jaboatao.pe.gov.br/agendamento-inss/"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaDigitalTachograph className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            AGENDAMENTO DOS SERVIÇOS <br /> DO INSS
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O serviço de "Agendamento do INSS" permite marcar horários para
                atendimento presencial nas agências do Instituto Nacional do
                Seguro Social, agilizando o acesso aos serviços e beneficiando
                os segurados.
            </div>
          </div>
        </a>

        {/* DENÚNCIAS PROCON */}
        <a
          href="https://procon.jaboatao.pe.gov.br/denuncias/"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaPhoneSquareAlt className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            DENÚNCIAS PROCON
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O serviço "Denúncias PROCON" permite que os consumidores
                denunciem irregularidades relacionadas a produtos ou serviços,
                buscando a proteção e defesa dos direitos do consumidor.
            </div>
          </div>
        </a>

        {/* DE OLHO NA CONSULTA */}
        <a
          href="https://deolhonaconsulta.jaboatao.pe.gov.br/"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaEye className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            DE OLHO NA CONSULTA
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O serviço "De Olho na Consulta" permite acompanhar o agendamento
                e receber notificações sobre consultas médicas e exames,
                oferecendo mais controle e praticidade aos usuários.
            </div>
          </div>
        </a>

        {/* PAGUE SEUS TRIBUTOS */}
        <a 
        href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp?013BRbO9665ucenl65822KgEX3536ip=thiI20Reu800ZoY88426XYvVh464PlHXw6122B3064267RNfv404&amp;CHATELA=opcoes.csp-WLILEV1=14-WLILEV2=-248jbfo7211DWLlv96379tXwD7604kJ=RsvX08trY698mdu47175KFjsr919FvleI2332c7400927jkRx844" target="_blank">
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaHome className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            PAGUE SEUS TRIBUTOS
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O serviço "Pague seus Tributos" oferece uma forma conveniente e
            segura de realizar o pagamento de impostos municipais.
            </div>
          </div>
        </a>

        {/* RESULTADO DE EXAMESL */}
        <a
          href="https://jaboatao.pe.gov.br/resultado-de-exames/"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaFileMedical className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            RESULTADO DE EXAMES
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O serviço "Resultado de Exames" permite acessar os resultados
            online, proporcionando comodidade e agilidade aos pacientes.
            </div>
          </div>
        </a>

        {/* PESQUISAS DE PREÇO */}
        <a
          href="hhttps://procon.jaboatao.pe.gov.br/pesquisas-de-preco/"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaMoneyCheckAlt className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            PESQUISAS DE PREÇO
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O serviço "Pesquisas de Preço" permite comparar preços de
                produtos ou serviços em diferentes estabelecimentos, facilitando
                a escolha consciente e a economia dos consumidores.
            </div>
          </div>
        </a>

        {/*RELAÇÃO DAS ESCOLAS MUNICIPAIS */}
        <a
          href="https://jaboatao.pe.gov.br/mapa-das-escolas/"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaSchool className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            RELAÇÃO DAS ESCOLAS MUNICIPAIS
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            O serviço "Relação das Escolas Municipais" fornece informações
                sobre as escolas públicas do município, ajudando os pais a
                encontrar a melhor opção de ensino para seus filhos.
            </div>
          </div>
        </a>

        {/* LISTA DE MEDICAMENTO (REMUME) */}
        <a
          href="https://jaboatao.pe.gov.br/wp-content/uploads/2018/11/REMUME-2018.pdf"
          target="_blank"
        >
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaPills className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            LISTA DE MEDICAMENTO (REMUME)
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            A Lista de Medicamentos (REMUME) é uma relação dos medicamentos
                disponíveis na rede pública de saúde, garantindo o acesso da
                população aos tratamentos necessários.
            </div>
          </div>
        </a>

        {/* OUVIDORIA MUNICIPAL */}
        <a 
        href="https://ouvidoria.jaboatao.pe.gov.br" target="_blank">
          <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg  hover:text-white group transition-all duration-300 ease-in-out relative">
          <FaWeixin className="text-4xl text-white" />
            <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
            OUVIDORIA MUNICIPAL
            </h3>
            <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
            A Ouvidoria Municipal é um serviço que recebe manifestações dos
                cidadãos sobre os serviços públicos municipais, buscando
                melhorias e soluções para as demandas da população.
            </div>
          </div>
        </a>

        {/* LICENCIAMENTO INTEGRADO */}
        <a
            href="https://cidadao-jaboatao.sissofia.com.br/"
            target="_blank"
          >
            <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
            <FaUserGear className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  LICENCIAMENTO INTEGRADO
                </h3>
              
                <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O Licenciamento Integrado simplifica e agiliza a obtenção de
                licenças e autorizações necessárias para empreendimentos,
                garantindo conformidade com as regulamentações aplicáveis.
              </div>
            </div>
        </a>

        {/* CIPTEA */}
        <a
            href="https://jaboatao.pe.gov.br/cadastro-da-carteira-de-identificacao-da-pessoa-com-transtorno-do-espectro-do-autismo/"
            target="_blank"
          >
            <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
                <FaPuzzlePiece className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  CIPTEA
                </h3>
                <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                CIPTEA
              </div>
            </div>
        </a>

        {/* SISTEMAS DE RECURSOS HUMANOS (SARH) */}
        <a
            href="https://sarh.jaboatao.pe.gov.br/PORTAL_TRANSPARENCIA-0.0.1-SNAPSHOT"
            target="_blank"
          >
            <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
                <FaPortrait className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2, text-center pt-3">
                  SISTEMAS DE RECURSOS HUMANOS (SARH)
                </h3>
                <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                SISTEMAS DE RECURSOS HUMANOS (SARH)
              </div>
            </div>
        </a>

        {/* ACESSO AO SINDEC */}
        <a
            href="http://www.sindec.pe.gov.br/sindecconsulta2/public/consumidor/acesso"
            target="_blank"
          >
            <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
                <FaSearch className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  ACESSO AO SINDEC
                </h3>
                <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                O serviço "Acesso ao SINDEC" permite aos consumidores registrar
                reclamações e obter informações sobre direitos do consumidor de
                forma prática e eficiente.
              </div>
            </div>
        </a>

        {/* JABOATÃO EM AÇÃO */}
        <a
            href="https://jaboataoemacao.jaboatao.pe.gov.br/"
            target="_blank"
          >
            <div className="bg-[#002A66] text-white w-full sm:w-[300px] h-[200px] mx-auto flex flex-col justify-center items-center shadow-lg hover:text-white group transition-all duration-300 ease-in-out relative">
                <FaViruses className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  JABOATÃO EM AÇÃO
                </h3>
                <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                "Jaboatão em Ação" é um serviço de combate ao COVID-19 que
                implementa ações de prevenção, testagem, vacinação e
                fiscalização para proteger a população.
              </div>
            </div>
        </a>

      </div>
    </div>
  );
};

export default Cidadao;
