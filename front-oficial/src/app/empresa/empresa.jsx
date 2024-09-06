import {
  FaInfoCircle,
  FaUsers,
  FaPassport,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa6";
const Empresa = () => {
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
      </div>
    </div>
  );
};

export default Empresa;
