import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Model({children, cor, caminhoImagem, caminhoImagem2, titulo, subtitulo1, subtitulo2, subtitulo3, subtitulo4, texto, texto2, texto3, texto4 }) {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#59C7F7,#003476)] opacity-60"></div>
        {/* Conteúdo sobre a imagem */}
        <div className="z-10 text-center justify-center text-white ">
          <h1 className=" text-8xl futura-heavy font-bold">{titulo}</h1>
          <div className="border-t-2 border-gray-300 my-4 w-1/4 mx-auto"/>
        </div>
      </div>

    <div className="relative overflow-hidden">
        <img
            src={caminhoImagem2}
            alt="background"
            className="absolute inset-0 w-full h-screen object-cover"
            style={{ transform: 'translateZ(0)' }}  
        />
        <div className="relative z-10 p-8 bg-{cor}"> 
            <h1 className="text-white text-4xl">{subtitulo1}</h1>
            <p className="text-white text-2xl">{texto}</p>
        </div>
    </div>


      {children}
      <Footer />
    </div>
  );
}
