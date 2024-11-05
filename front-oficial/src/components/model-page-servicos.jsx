export default function Model({ children,caminhoImagem, titulo, subtitulo }) {
  return (
    <div>
      
      <div className="relative w-full h-[250px] flex items-end bg-[#172C4E] px-80">
      <img
            src={caminhoImagem} 
            width={60}
            height={60}
            className="mr-12 mb-7"
          />
        <div className="z-10 text-left text-white pb-4 ">
          <p className="text-[13px] mb-2">{subtitulo}</p>
          <h1 className=" text-[35px] leading-[40px] pb-[5px] font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">{titulo}</h1>
        </div>
      </div>

      {children}
      
    </div>
  );
}
