"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';

const GestaoUrbana = () => {
  return (
    <div className="flex mx-72 my-10">
      <SideMenu activeItem="Gestão Urbana" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
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
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Abertura e análise de processos de terrenos, obras e reformas, alvará de localização e funcionamento, autorizações eventuais.'
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
    </div>
  );
};

export default GestaoUrbana;
