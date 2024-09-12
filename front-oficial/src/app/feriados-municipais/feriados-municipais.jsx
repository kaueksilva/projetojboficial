const Feriados = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Título em destaque */}
      <div className="bg-[#003476] rounded-[30px] p-4 mb-10">
        <h1 className="text-white text-5xl font-bold text-center pb-3 pt-3">
          Lei n.º 1247/2015
        </h1>
      </div>

      {/* Conteúdo da Lei */}
      <div className="text-left text-[#003476] max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">
          Lei n.º 1247/2015
        </h2>

        <ul className="space-y-4">
          <li>
            <span className="font-bold">15 de janeiro</span> | Dia de Santo Amaro – Padroeiro da Cidade
          </li>
          <li>
            <span className="font-bold">Feriado móvel</span> | 08 dias após o domingo de Páscoa (Dia de N. Sra. dos Prazeres – Padroeira de Prazeres).
          </li>
          <li>
            <span className="font-bold">04 de maio</span> | Dia do aniversário da Cidade
          </li>
          <li>
            <span className="font-bold">24 de junho</span> | Dia de São João
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feriados;
