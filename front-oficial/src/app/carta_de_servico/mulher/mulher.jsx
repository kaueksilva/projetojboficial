"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { IoWomanSharp } from "react-icons/io5";

const Mulher = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Meio Ambiente" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Atendimento às Mulheres Vítimas de Violência',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: Centro de Referência a Mulher Maristela Just é um espaço destinado a prestar acolhimento e atendimento humanizado',
              link: '/carta_de_servico/mulher/atendimento-as-mulheres-vitimas-de-violencia'
            },
            
            {
              title: 'Espaço Mulher Empreendedora',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: O Espaço mulher empreendedora tem a finalidade de formular, implementar, coordenar acompanhar desenvolver políticas, programas projetos e',
              link: '/carta_de_servico/mulher/espaco-mulher-empreendedora'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <IoWomanSharp />
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

export default Mulher;
