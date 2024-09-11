const Feriados = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Título em destaque */}
      <div className="bg-[#003476] rounded-lg p-4 mb-6">
        <h1 className="text-white text-3xl font-bold text-center">
          Lei n.º 1247/2015
        </h1>
      </div>

      {/* Conteúdo da Lei */}
      <div className="text-left">
        <h2 className="text-xl font-semibold text-[#003476] mb-2">
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
