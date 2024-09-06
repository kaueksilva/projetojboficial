import {
FaUmbrellaBeach,
FaMapMarkerAlt,
FaShoppingBag,
FaMapSigns,
FaUtensils,
FaRoad,
FaBed,
} from "react-icons/fa";

const Turista = () => {
return (
    <div className="w-full flex items-center justify-center">
      {/* TODOS OS BOTOES */}
    <div className="flex flex-col pt-12 pb-8 md:w-2/5">
        {/* 1ª Fileira de botões */}
        <div className="flex -2 h-24 justify-center">
          {/* TURISMO.JG */}
        <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
        >
            <div className="flex flex-col items-center justify-center">
            <FaUmbrellaBeach className="text-4xl text-[#003476] hover:text-[#3263B7]" />
            <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                TURISMO.JG
            </h3>
            </div>
        </a>

          {/* CONHEÇA JABOATÃO */}
        <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
        >
            <div div className="flex flex-col items-center justify-center">
            <FaMapMarkerAlt
                lass
                className="text-4xl text-[#003476] hover:text-[#3263B7]"
            />
            <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                CONHEÇA JABOATÃO
            </h3>
            </div>
        </a>

          {/* SHOPPINGS */}
        <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
        >
            <div className="flex flex-col items-center justify-center">
            <FaShoppingBag className="text-4xl text-[#003476] hover:text-[#3263B7]" />
            <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                SHOPPINGS
            </h3>
            </div>
        </a>

          {/* PONTOS TURÍSTICOS */}
        <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
        >
            <div className="flex flex-col items-center justify-center">
            <FaMapSigns className="text-4xl text-[#003476] hover:text-[#3263B7]" />
            <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                PONTOS TURÍSTICOS
            </h3>
            </div>
        </a>
        </div>

        {/* 2  Fileira de botões */}
        <div className="flex  h-24 justify-center">
          {/*GASTRONOMIA */}
        <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
        >
            <div className="flex flex-col items-center justify-center">
            <FaUtensils className="text-4xl text-[#003476] hover:text-[#3263B7]" />
            <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                GASTRONOMIA
            </h3>
            </div>
        </a>

          {/* ROTEIROS */}
        <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
        >
            <div className="flex flex-col items-center justify-center">
            <FaRoad
                lass
                className="text-4xl text-[#003476] hover:text-[#3263B7]"
            />
            <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                ROTEIROS
            </h3>
            </div>
        </a>

          {/* HOTELARIA */}
        <a
            href="https://example.com/mapescola"
            className="flex-1 transition-transform duration-500 group"
        >
            <div className="flex flex-col items-center justify-center">
            <FaBed className="text-4xl text-[#003476] hover:text-[#3263B7]" />
            <h3 className="text-[#003476] text-sm font-bold leading-none mt-2 text-center">
                HOTELARIA
            </h3>
            </div>
        </a>
        </div>
    </div>
    </div>
);
};

export default Turista;
