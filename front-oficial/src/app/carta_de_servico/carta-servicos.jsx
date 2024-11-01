import {
    FaCity,
    FaPaw,
    FaHandsHelping,
    FaUserTie 
} from "react-icons/fa";
import { PiBookOpenTextFill } from "react-icons/pi";
import { IoSchool } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";


const Cartaservico = () => {
    return (
        <div className="w-full flex ">


        {/* TODOS OS BOTOES */}
        <div className="flex flex-col gap-2 pt-10 pb-8 w-8/12 ml-8 mr-8">


          {/* 1ª Fileira de botões */}
        <div className="flex gap-2 h-40">

            {/* GESTÃO URBANA */}
            <a
            href=" "
            className="relative flex-1 w-64 transition-transform duration-500 group"
            >
            <div className="relative h-full w-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaCity className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                    GESTÃO URBANA
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300"> 3 Servicos </p>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Define diretrizes para planejamento, 
                licenciamento de obras e preservação do 
                patrimônio.
                </div>
            </div>
            </a>

            {/* ANIMAIS */}
            <a
            href=" "
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
            >
            <div className="relative h-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPaw className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                    ANIMAIS
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300"> 8 Servicos </p>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Regula registro, vacinação, resgate de 
                animais em risco e adoção responsável.
                </div>
            </div>
            </a>

             {/* DEFESA DO CONSUMIDOR */}
             <a
            href=" "
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
            >
            <div className="relative h-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <PiBookOpenTextFill  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                DEFESA DO CONSUMIDOR
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300"> 1 Servicos </p>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Protege os direitos dos consumidores e resolve conflitos.
                </div>
            </div>
            </a>

            {/* DIREITOS HUMANOS */}
            <a
            href=" "
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
            >
            <div className="relative h-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaHandsHelping  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                DIREITOS HUMANOS
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300"> 1 Servicos </p>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Promove igualdade, acesso à justiça e proteção às vítimas de violência.
                </div>
            </div>
            </a>

            {/* EDUCAÇÃO */}
            <a
            href=" "
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
            >
            <div className="relative h-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <IoSchool className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                EDUCAÇÃO
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300"> 21 Servicos </p>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Estabelece compromissos educacionais, apoio pedagógico e inclusão.
                </div>
            </div>
            </a>

            {/* TRABALHO E EMPREGO */}
            <a
            href=" "
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
            >
            <div className="relative h-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaUserTie  className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                TRABALHO E EMPREGO
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300"> 11 Servicos </p>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Protege direitos trabalhistas e facilita a busca por emprego.
                </div>
            </div>
            </a>

            {/* ASSISTÊNCIA SOCIAL */}
            <a
            href=" "
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
            >
            <div className="relative h-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <MdFamilyRestroom className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                ASSISTÊNCIA SOCIAL
                </h3>
                <p className="text-white bg-[#3a5498] bg-opacity-70 rounded-full px-3 py-1 my-2 transition-colors duration-300"> 18 Servicos </p>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                A assistência social busca promover o bem-estar, igualdade de oportunidades e proteção para pessoas vulneráveis.
                </div>
            </div>
            </a>


        </div>


        </div>
    </div>
    );
};
export default Cartaservico;

    