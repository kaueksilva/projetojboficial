import React from 'react';

const SideMenu = () => {
  return (
    <div className="flex">
      {/* Menu lateral */}
      <div className="w-1/4 bg-gray-100 p-4">
        <ul className="space-y-2">
          <li className="font-bold text-white bg-blue-700 p-2 rounded">Gestão Urbana</li>
          <li>Animais</li>
          <li>Defesa do Consumidor</li>
          <li>Serviços de Direitos Humanos</li>
          <li>Educação</li>
          <li>Feiras e Mercados Públicos</li>
          <li>Funerário</li>
          <li>Iluminação</li>
          <li>Impostos e Taxas</li>
          <li>Meio Ambiente</li>
          <li>Mulher</li>
          <li>Ouvidoria</li>
          <li>Previdência</li>
          <li>Procuradoria</li>
          <li>Saúde</li>
          <li>Trabalho e Emprego</li>
          <li>Trânsito e Transporte</li>
          <li>Serviços Urbanos</li>
          <li>Vigilância Sanitária</li>
          <li>Defesa Civil</li>
          <li>Assistência Social</li>
        </ul>
      </div>

      {/* Conteúdo principal */}
      <div className="w-3/4 p-4">
        {[
          {
            title: 'Fiscalização Urbana',
            description:
              'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Denúncia de Obra Irregular; Ocupação de Espaço Público; Alvarás de Funcionamento para atividades irregulares; Publicidade Irregular. REQUISITOS'
          },
          {
            title: 'Cadastro Multifinalitário',
            description:
              'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: Inscrição imobiliária para fins de tributação REQUISITOS: Cadastramento territorial e/ou predial urbano Para abertura do processo de cadastro'
          },
          {
            title: 'Licenciamento Urbano',
            description:
              'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Abertura e análise de processos de terrenos, obras e reformas, alvará de localização e funcionamento, autorizações eventuais,'
          }
        ].map((item, index) => (
          <div key={index} className="flex items-start mb-4 border-b pb-4">
            <div className="w-16 h-16 bg-blue-700 text-white flex items-center justify-center rounded">
              {/* Ícone substituto */}
              <span className="text-4xl">🏅</span>
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
