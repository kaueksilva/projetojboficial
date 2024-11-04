"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaUsers } from "react-icons/fa";

const ambiente = () => {
  return (
    <div className="flex mx-72 my-10">
      <SideMenu activeItem="Trabalho e Emprego" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Qualificação Profissional',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Qualificação Profissional para a população do município do Jaboatão dos Guararapes. O município do Jaboatão, por meio',
              link: '#'
            },
            
            {
              title: 'Educação Ambiental',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Coordenação de Educação Ambiental – CEA realiza palestras de Sensibilização ambiental com foco em um tema',
              link: '#'
            },
            {
              title: 'Plantio ou Erradicação de Árvores',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Coordenação de Arborização, Praças e Jardins (CAPJ) é encarregada de coordenar e executar as ações de',
              link: '#'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaUsers />
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

export default ambiente;
