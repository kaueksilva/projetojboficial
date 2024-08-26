import Image from "next/image";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Menu />

      <main>
        <div className=" text-center w-full h-screen overflow-hidden flex justify-center items-center">
          <div className="absolute inset-0 w-full h-full z-[-1] flex">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
              style={{ backgroundImage: "url('images/igrejaaa.jpg')" }}
            ></div>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-100"
              style={{ backgroundImage: "url('images/igreja-1.jpg')" }}
            ></div>
          </div>

          <div>
            <div className=" flex-wrap font-roboto justify-center gap-4 grid grid-cols-4">
              <button
                className="bg-[#0056b3] text-white py-3 my-2 text-lg cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
                id="cidadao"
              >
                CIDADÃO
              </button>

              <button
                className="bg-[#0056b3] text-white py-3 my-2 text-lg cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
                id="empresa"
              >
                EMPRESA
              </button>

              <button
                className="bg-[#0056b3] text-white py-3 my-2 text-lg cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
                id="servidor"
              >
                SERVIDOR
              </button>

              <button
                className="bg-[#0056b3] text-white py-3 my-2 text-lg cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
                id="turista"
              >
                TURISTA
              </button>
            </div>

            <div className="flex flex-wrap font-roboto justify-center gap-4">
              <button
                className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
                id="portal"
              >
                PORTAL DA TRANSPARÊNCIA
              </button>

              <button
                className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
                id="carta"
              >
                CARTA DE SERVIÇOS
              </button>

              <button
                className="bg-[#0056b3] text-white py-3 px-6 my-2 text-lg cursor-pointer border-2 border-white rounded-full transition-transform duration-300 hover:bg-[#003f7f] hover:scale-110 focus:outline-none"
                id="ppp"
              >
                PPP - SAÚDE
              </button>
            </div>
          </div>
        </div>

        <div className="mapas border-t border-[#FFC719] bg-[#003470] ">
          <h1 className="text-white font-montserrat font-semibold text-4xl flex  justify-center p-20">
            MAPAS
          </h1>
        </div>
        <div className="mapas-cartaz mt-40 mb-40">
          <div className="bg-[#00000] flex items-center justify-center ">
            <div
              className="border-r-2 border-[#FFC719] items-center justify-center flex-1 p-40 h-[410px]"
              style={{ backgroundImage: "url('images/mapescola.jpg')" }}
            ></div>

            <div
              className="border-r-2 border-[#FFC719] items-center justify-center flex-1 p-40 h-[410px]"
              style={{ backgroundImage: "url('images/mapsaude.jpg')" }}
            ></div>

            <div
              className="border-r-2 border-[#FFC719] items-center justify-center flex-1 p-40 h-[410px]"
              style={{ backgroundImage: "url('images/maprestaurante.jpg')" }}
            ></div>

            <div
              className="border-r-2 border-[#FFC719] items-center justify-center flex-1 p-40 h-[410px]"
              style={{ backgroundImage: "url('images/mapmercado.jpg')" }}
            ></div>

            <div
              className=" items-center justify-center flex-1 p-40 h-[410px]"
              style={{ backgroundImage: "url('images/mapcras.jpg')" }}
            ></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
