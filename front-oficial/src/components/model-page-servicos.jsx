import AccessibilityButton from "./AccessibilityButton";
export default function Model({ children, caminhoImagem, titulo, subtitulo }) {
  return (
    <div>
      <AccessibilityButton />
      <div className="relative w-full h-[250px] flex items-end bg-[#172C4E] px-6 md:px-20 lg:px-80">
        <img
          src={caminhoImagem}
          width={40} // Tamanho menor da imagem para telas pequenas
          height={40}
          className="mr-4 mb-4 md:mr-6 md:mb-6 lg:mr-10 lg:mb-7"
          style={{
            width: 'auto', // Ajuste automático de largura para telas menores
            maxWidth: '60px', // Limita a largura máxima
          }}
        />
        <div className="z-10 text-left text-white pb-2 md:pb-3 lg:pb-4">
          <p className="text-[13px] md:text-[15px] lg:text-[15px] mb-1 md:mb-2">{subtitulo}</p>
          <h1 className="text-[24px] md:text-[30px] lg:text-[35px] leading-[28px] md:leading-[36px] lg:leading-[40px] pb-[3px] md:pb-[4px] lg:pb-[5px] font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
            {titulo}
          </h1>
        </div>
      </div>
      {children}
    </div>
  );
}
