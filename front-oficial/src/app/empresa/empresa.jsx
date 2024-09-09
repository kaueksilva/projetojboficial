import { FaUsers, FaHome, FaSearch, FaRegListAlt, FaRegNewspaper, FaRegFileAlt,FaUsersCog } from "react-icons/fa";

const Empresa = () => {
  return (
    <div className="w-full flex items-center justify-center">
      {/* TODOS OS BOTOES */}
      <div className="flex flex-col pt-12 pb-8 md:w-2/5">

        {/* 1ª Fileira de botões */}
        <div className="flex -2 h-24 justify-center">
          {/* PORTAL DA TRANSPARÊNCIA */}
          <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
          >
            <div className="flex flex-col items-center justify-center">
              <FaUsers className="text-4xl text-[#003476] hover:text-[#3263B7]" />
              <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                PORTAL DO CONTRIBUINTE
              </h3>
            </div>
          </a>

          {/* ACESSO AO SINDEC */}
          <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
          >
            <div className="flex flex-col items-center justify-center">
              <FaSearch
                lass
                className="text-4xl text-[#003476] hover:text-[#3263B7]"
              />
              <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                ACESSO AO SINDEC
              </h3>
            </div>
          </a>

          {/* PAGUE SEUS TRIBUTOS */}
          <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
          >
            <div className="flex flex-col items-center justify-center">
              <FaHome className="text-4xl text-[#003476] hover:text-[#3263B7]" />
              <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                PAGUE SEUS TRIBUTOS
              </h3>
            </div>
          </a>
        </div>

        {/* 2  Fileira de botões */}
        <div className="flex  h-24 justify-center">
          {/* EDITAIS E LICITAÇÕES */}
          <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
          >
            <div className="flex flex-col items-center justify-center">
              <FaRegListAlt className="text-4xl text-[#003476] hover:text-[#3263B7]" />
              <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                EDITAIS E LICITAÇÕES
              </h3>
            </div>
          </a>

          {/* DIÁRIO OFICIAL */}
          <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
          >
            <div className="flex flex-col items-center justify-center">
              <FaRegNewspaper 
                lass
                className="text-4xl text-[#003476] hover:text-[#3263B7]"
              />
              <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                DIÁRIO OFICIAL
              </h3>
            </div>
          </a>

          {/* NOTA FISCAL ELETRÔNICO (NFS-E) */}
          <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
          >
            <div className="flex flex-col items-center justify-center">
              <FaRegFileAlt className="text-4xl text-[#003476] hover:text-[#3263B7]" />
              <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
              NOTA FISCAL ELETRÔNICO (NFS-E)
              </h3>
            </div>
          </a>
        </div>

        {/* 3  Fileira de botões */}
        <div className="flex h-32 justify-center">

          {/* LICENCIAMENTO INTEGRADO */}
          <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
          >
            <div className="flex flex-col items-center justify-center">
              <FaUsersCog className="text-4xl text-[#003476] hover:text-[#3263B7]" />
              <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
              LICENCIAMENTO INTEGRADO
              </h3>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Empresa;
