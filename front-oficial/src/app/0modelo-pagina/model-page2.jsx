import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Model({children, caminhoImagem, titulo, subtitulo }) {
  return (
    <div>
      <Menu />
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Imagem de fundo */}
        <img
          src={caminhoImagem}
          alt="background"
          className="absolute inset-0 w-full h-screen object-cover"
        />
        {/* Camada de sobreposição para escurecer a imagem */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#59C7F7] to-[#003476] opacity-60"></div>
        {/* Conteúdo sobre a imagem */}
        <div className="z-10 text-center justify-center text-white ">
          <h1 className=" text-8xl font-bold ">{titulo}</h1>
          {/* Aumenta o título */}
          <p className="text-[14px]">{subtitulo}</p>
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
}
