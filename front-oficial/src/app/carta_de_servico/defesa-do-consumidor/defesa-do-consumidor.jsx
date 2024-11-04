"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaCartFlatbed } from "react-icons/fa6";

const Defesa = () => {
  return (
    <div className="flex mx-72 my-10">
      <SideMenu activeItem="animais" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Abertura de Reclamação – Defesa do Consumidor',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O Procon do Município do Jaboatão dos Guararapes está à disposição dos consumidores, auxiliando o cidadão na',
              link: '#'
            }
            
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaCartFlatbed />
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

export default Defesa;
