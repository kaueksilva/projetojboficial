import {
  FaInfoCircle,
  FaUsers,
  FaPassport,
  FaNewspaper,
  FaDigitalTachograph,
  FaPhoneSquareAlt,
  FaEye,
  FaHome,
  FaFileMedical 
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";

const Cidadao = () => {
  return (
    <div className="h-screen w-full flex ">
      {/* TODOS OS BOTOES */}
      <div className="flex flex-col gap-3 p-1 w-full ml-7 mr-7">
        {/* 1ª Fileira de botões */}
        <div className="flex gap-4">
          {/* PORTAL DA TRANSPARÊNCIA */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaInfoCircle className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            <div className="relative h-[10rem] bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaUsers className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            <div className="relative h-[10rem] bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <IoDocumentTextOutline className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            <div className="relative h-[10rem] bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPassport className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            <div className="relative h-[10rem] bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaUserGraduate className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
        <div className="flex gap-4">
          {/* DIÁRIO OFICIAL */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaNewspaper className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaDigitalTachograph className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold text-center leading-none mt-2">
                  AGENDAMENTO DOS SERVIÇOS DO INSS
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
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPhoneSquareAlt className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaEye className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaHome  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
                PAGUE SEUS TRIBUTOS
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O serviço "Pague seus Tributos" oferece uma forma 
              conveniente e segura de realizar o pagamento de impostos 
              municipais.
              </div>
            </div>
          </a>

        </div>


        {/* 3ª Fileira de botões */}
        <div className="flex gap-4">
          {/* RESULTADO DE EXAMESL */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaFileMedical className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
                RESULTADO DE EXAMES
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O serviço "Resultado de Exames" permite 
              acessar os resultados online, proporcionando 
              comodidade e agilidade aos pacientes.
              </div>
            </div>
          </a>

          {/* AGENDAMENTO DOS SERVIÇOS DO INSS */}
          <a
            href="https://example.com/mapescola"
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaDigitalTachograph className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold text-center leading-none mt-2">
                  AGENDAMENTO DOS SERVIÇOS DO INSS
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
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPhoneSquareAlt className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaEye className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
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
            className="relative flex-1 w-64 h-40 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaHome  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2">
                PAGUE SEUS TRIBUTOS
                </h3>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              O serviço "Pague seus Tributos" oferece uma forma 
              conveniente e segura de realizar o pagamento de impostos 
              municipais.
              </div>
            </div>
          </a>

        </div>

      </div>
    </div>
  );
};

export default Cidadao;
