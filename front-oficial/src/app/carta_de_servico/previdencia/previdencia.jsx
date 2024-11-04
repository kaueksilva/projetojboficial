"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaPiggyBank } from "react-icons/fa6";

const previdencia = () => {
  return (
    <div className="flex mx-72 my-10">
      <SideMenu activeItem="previdencia" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Simulação de Cálculo de Aposentadoria',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Simulação de Cálculo de Aposentadoria – O Instituto de Previdênciados Servidores Públicos do Município do Jaboatão dos',
              link: '#'
            },
            
            {
              title: 'Concessão de Aposentadoria',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Concessão de aposentadoria – O Instituto de Previdência dos Servidores Públicos do Município do Jaboatão dos Guararapes',
              link: '#'
            },
            {
              title: 'Concessão de Pensão',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Concessão de pensão – O Instituto de Previdência dos Servidores Públicos do Município do Jaboatão dos Guararapes',
              link: '#'
            },
            {
              title: 'Emissão de Certidão de Tempo de Contribuição',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Emissão de Certidão de Tempo de Contribuição – O Instituto de Previdência dos Servidores Públicos do Município',
              link: '#'
            },
            {
              title: 'Revisão de Benefícios e Proventos',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Revisão de Benefícios e Proventos – O Instituto de Previdência dosServidores Públicos do Município do Jaboatão dos',
              link: '#'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaPiggyBank  />
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

export default previdencia;
