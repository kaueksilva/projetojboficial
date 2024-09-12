import {
    FaCity,
    FaPaw
} from "react-icons/fa";
const Cartaservico = () => {
    return (
        <div className="w-full flex ">


        {/* TODOS OS BOTOES */}
        <div className="flex flex-col gap-2 pt-10 pb-8 w-8/12 ml-8 mr-8">


          {/* 1ª Fileira de botões */}
        <div className="flex gap-2 h-40">

            {/* GESTÃO URBANA */}
            <a
            href="https://example.com/mapescola"
            className="relative flex-1 w-64 transition-transform duration-500 group"
            >
            <div className="relative h-full w-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaCity className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                    GESTÃO URBANA
                </h3>
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
            href="https://example.com/mapescola"
            className="relative flex-1 max-w-sm transition-transform duration-500 group"
            >
            <div className="relative h-full bg-[#003476] bg-center">
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <FaPaw className="text-4xl text-white" />
                <h3 className="text-white text-lg font-bold leading-none mt-2 text-center">
                    ANIMAIS
                </h3>
                </div>
                <div className="absolute inset-0 flex items-center text-center justify-center bg-[radial-gradient(circle_at_center,#6EC1E4,#003476)] text-white text-xs opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-2">
                Regula registro, vacinação, resgate de 
                animais em risco e adoção responsável.
                </div>
            </div>
            </a>


        </div>


        </div>
    </div>
    );
};
export default Cartaservico;

    