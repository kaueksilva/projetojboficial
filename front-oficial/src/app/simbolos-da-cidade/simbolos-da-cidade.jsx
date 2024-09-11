import Image from 'next/image';

const HinoJaboatao = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Seção de Imagens com Títulos */}
      <div className="flex justify-center space-x-20 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#003476] mb-4">
            Bandeira da Cidade
          </h2>
          <Image
            src="/images/bandeiradacidade.png" // Substitua pelo caminho da sua imagem
            alt="Bandeira da Cidade"
            width={300} // Defina o tamanho da imagem
            height={200}
            className="object-cover"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#003476] mb-4">
            Brasão da bandeira
          </h2>
          <Image
            src="/images/brasao-bandeira.png" // Substitua pelo caminho da sua imagem
            alt="Brasão da bandeira"
            width={300} // Defina o tamanho da imagem
            height={200}
            className="object-cover"
          />
        </div>
      </div>

      {/* Seção do Hino */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#003476] mb-6">
          Hino da Jaboatão dos Guararapes
        </h2>
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Parte I</h3>
            <p className="leading-relaxed text-lg">
              Jaboatão<br />
              Nos verdes vivos dos teus<br />
              Altivos Canaviais,<br />
              Há sempre rindo uma esperança<br />
              Até na dança dos matagais.<br />
              É uma esperança que nunca finda<br />
              E que se alinda de inspiração<br />
              Ver-te sem guerra, terra dos altos,<br />
              linda terra da promissão
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Parte II</h3>
            <p className="leading-relaxed text-lg">
              Eu amo o teu cruzeiro,<br />
              Teu sol que é mais brasileiro;<br />
              Teus altos que a gente vence<br />
              Até sem ser jaboatonense.<br />
              Eu amo teu céu profundo,<br />
              Maior que já vi no mundo,<br />
              E no meu sonho ideal,<br />
              Quero mais a ti.<br />
              Oh! Terra natal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HinoJaboatao;
