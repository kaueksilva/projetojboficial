"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaFileCircleCheck } from "react-icons/fa6";

const GestaoUrbana = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Gestão Urbana" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Fiscalização Urbana',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Denúncia de Obra Irregular; Ocupação de Espaço Público; Alvarás de Funcionamento para atividades irregulares; Publicidade Irregular. REQUISITOS',
              link: '/carta_de_servico/gestao-urbana/fiscalizacao-urbana'
            },
            {
              title: 'Cadastro Multifinalitário',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: Inscrição imobiliária para fins de tributação REQUISITOS: Cadastramento territorial e/ou predial urbano Para abertura do processo de cadastro',
              link: '/carta_de_servico/gestao-urbana/cadastro-multifinalitario'
            },
            {
              title: 'Licenciamento Urbano',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Abertura e análise de processos de terrenos, obras e reformas, alvará de localização e funcionamento, autorizações eventuais.',
              link: '/carta_de_servico/gestao-urbana/licenciamento-urbano'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaFileCircleCheck />
              </div>
              <div className="ml-4">
                <a href={item.link}>
                  <h2 className="font-bold text-2xl hover:text-[#003476] hover:underline">{item.title}</h2>
                </a>
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
