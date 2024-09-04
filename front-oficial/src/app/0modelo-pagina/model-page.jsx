const Model = () => {
  return (
    <div style={{ height: "260px", width: "100%" }}>
      <div className="relative h-full w-full">
        <img
          src="../images/servicos-cidadao.jpg"
          alt="Model Page"
          className="h-full w-full object-cover object-[center_top_50%]"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex flex-col justify-end items-center text-white font-bold text-center pb-8">
          <div className="text-[40px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
            <h1>SERVIÇOS PARA O CIDADÃO</h1>
          </div>
          <div className="text-xs">
            <p>HOME » SERVIÇOS PARA O CIDADÃO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
