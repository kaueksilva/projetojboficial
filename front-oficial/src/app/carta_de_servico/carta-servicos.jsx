import { FaCity, FaPaw, FaHandsHelping, FaUserTie, FaCross, FaLightbulb, FaTree, FaBusAlt, FaBullhorn, FaPiggyBank, FaBalanceScale, FaBriefcaseMedical, FaHammer,FaEye,FaExclamationTriangle } from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";
import { IoSchool, IoWoman } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Cartaservico = () => {
  return (
    <div className="w-full">
      {/* TODOS OS BOTOES */}
      <div className=" pt-10 pb-8 ml-8 mr-8">
        {/* 1ª Fileira de botões */}
        <div className="flex gap-2 h-40 mb-4">
    
          {/* GESTÃO URBANA */}
          <a
            href="/carta_de_servico/gestao-urbana"
            className="relative flex-1 w-64 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaCity className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  GESTÃO URBANA
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  3 Servicos
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Define diretrizes para planejamento, licenciamento de obras e
                preservação do patrimônio.
              </div>
            </div>
          </a>

          {/* ANIMAIS */}
          <a
            href="/carta_de_servico/animais"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPaw className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  ANIMAIS
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  8 Servicos
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Regula registro, vacinação, resgate de animais em risco e adoção
                responsável.
              </div>
            </div>
          </a>

          {/* DEFESA DO CONSUMIDOR */}
          <a
            href="/carta_de_servico/defesa-do-consumidor"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <PiBookOpenTextFill className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  DEFESA DO CONSUMIDOR
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  1 Serviço
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Protege os direitos dos consumidores e resolve conflitos.
              </div>
            </div>
          </a>

          {/* DIREITOS HUMANOS */}
          <a
            href="/carta_de_servico/servicos-direitos-humanos"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaHandsHelping className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  DIREITOS HUMANOS
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  5 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Promove igualdade, acesso à justiça e proteção às vítimas de
                violência.
              </div>
            </div>
          </a>

          {/* EDUCAÇÃO */}
          <a
            href="/carta_de_servico/educacao"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <IoSchool className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  EDUCAÇÃO
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  21 Serviço
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Estabelece compromissos educacionais, apoio pedagógico e
                inclusão.
              </div>
            </div>
          </a>

          {/* TRABALHO E EMPREGO */}
          <a
            href="/carta_de_servico/trabalho-emprego"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaUserTie className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  TRABALHO E EMPREGO
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  11 Serviço
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Protege direitos trabalhistas e facilita a busca por emprego.
              </div>
            </div>
          </a>

          {/* ASSISTÊNCIA SOCIAL */}
          <a
            href="/carta_de_servico/assistencia-social"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <MdFamilyRestroom className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                  ASSISTÊNCIA SOCIAL
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  18 Servicos
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                A assistência social busca promover o bem-estar, igualdade de
                oportunidades e proteção para pessoas vulneráveis.
              </div>
            </div>
          </a>
        </div>


        {/* 2ª Fileira de botões */}
        <div className="flex gap-2 h-40 mb-4">
    
          {/* FEIRAS E MERCADOS PÚBLICOS */}
          <a
            href="/carta_de_servico/feiras-mercados"
            className="relative flex-1 w-64 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <HiBuildingStorefront className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                FEIRAS E MERCADOS PÚBLICOS
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  1 Serviço
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Regula funcionamento e qualidade dos produtos.
              </div>
            </div>
          </a>

          {/* FUNERÁRIO */}
          <a
            href="/carta_de_servico/funerario"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaCross  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                FUNERÁRIO
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  1 Serviço
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Define procedimentos para atendimento a famílias enlutadas.
              </div>
            </div>
          </a>

          {/* ILUMINAÇÃO */}
          <a
            href="/carta_de_servico/iluminacao"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaLightbulb  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                ILUMINAÇÃO
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  1 Serviço
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Estabelece padrões de manutenção e reparo da iluminação pública.
              </div>
            </div>
          </a>

          {/* IMPOSTOS E TAXAS */}
          <a
            href="/carta_de_servico/impostos-taxas"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaMoneyBillTrendUp  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                IMPOSTOS E TAXAS
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  5 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Orienta pagamento de tributos municipais.
              </div>
            </div>
          </a>

          {/* MEIO AMBIENTE */}
          <a
            href="/carta_de_servico/meio-ambiente"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaTree  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                MEIO AMBIENTE
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  3 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Regula licenciamento ambiental, controle de poluição e educação ambiental.
              </div>
            </div>
          </a>

          {/* TRÂNSITO E TRANSPORTE */}
          <a
            href="/carta_de_servico/transito-transporte"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaBusAlt className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                TRÂNSITO E TRANSPORTE
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  13 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Estabelece normas de segurança viária e transporte público.
              </div>
            </div>
          </a>

          {/* MULHER */}
          <a
            href="/carta_de_servico/mulher"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <IoWoman  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                MULHER
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  2 Servicos
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Promove igualdade de gênero e combate à violência contra a mulher.
              </div>
            </div>
          </a>
        </div>


        {/* 3ª Fileira de botões */}
        <div className="flex gap-2 h-40 mb-4">
    
          {/* OUVIDORIA */}
          <a
            href="/carta_de_servico/ouvidoria"
            className="relative flex-1 w-64 transition-transform duration-500 group"
          >
            <div className="relative h-full w-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaBullhorn   className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                OUVIDORIA
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  3 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Recebe manifestações e melhora serviços públicos por meio do feedback dos cidadãos.
              </div>
            </div>
          </a>

          {/* PREVIDÊNCIA */}
          <a
            href="/carta_de_servico/previdencia"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPiggyBank   className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                PREVIDÊNCIA
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  8 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              DeOrienta acesso a benefícios previdenciários.
              </div>
            </div>
          </a>

          {/* PROCURADORIA */}
          <a
            href="/carta_de_servico/procuradoria"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaBalanceScale className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                PROCURADORIA
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  2 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Oferece serviços jurídicos e mediação de conflitos.
              </div>
            </div>
          </a>

          {/* SAÚDE */}
          <a
            href="/carta_de_servico/saude"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaBriefcaseMedical  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                SAÚDE
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  26 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Define direitos dos usuários e acesso a serviços de saúde.
              </div>
            </div>
          </a>

          {/* SERVIÇOS URBANOS  */}
          <a
            href="/carta_de_servico/servicos-urbanos"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaHammer className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                SERVIÇOS URBANOS 
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  10 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Aborda limpeza, conservação, manejo de resíduos e fornecimento de água.
              </div>
            </div>
          </a>

          {/*VIGILÂNCIA SANITÁRIA*/}
          <a
            href="/carta_de_servico/vigilancia-sanitaria"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaEye className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                VIGILÂNCIA SANITÁRIA
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  5 Serviços
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Controla a segurança sanitária em alimentos, água e saúde pública.
              </div>
            </div>
          </a>

          {/*DEFESA CIVIL*/}
          <a
            href="/carta_de_servico/defesa-civil"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
          >
            <div className="relative h-full bg-[#003476] bg-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaExclamationTriangle className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                DEFESA CIVIL
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300">
                  
                  7 Servicos
                </p>
              </div>
              <div className="absolute inset-0 flex items-center text-center justify-center hover:bg-gradient-to-br hover:from-[#002A66] hover:to-[#377BB5] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
              Promover ações de prevenção e redução de riscos de desastres
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};
export default Cartaservico;
