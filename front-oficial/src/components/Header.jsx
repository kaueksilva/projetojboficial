import Title from "./Title";
import SubTitle from "./SubTitle";

const Header = ({ caminhoImagem, titulo, subtitulo }) => {

  return (
    <div style={{ height: "260px", width: "100%" }}>
      <div className="relative h-full w-full">
        <img
          src={caminhoImagem}
          alt="Model Page"
          className="h-full w-full object-cover object-[center_top_50%]"
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold text-center pb-8">
          <Title>{titulo}</Title>
          <SubTitle>{subtitulo}</SubTitle>
        </div>
      </div>
    </div>
  );
};

export default Header;
