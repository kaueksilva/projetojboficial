"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaBalanceScale } from "react-icons/fa";

const ambiente = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="procuradoria" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Débitos da dívida ativa judicial (DAJ) e Débitos da dívida ativa procuradoria (DAP), executados via processo judicial',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Equipe de Apoio Técnico e Administrativo da Procuradoria da Fazenda Municipal realiza o atendimento aos contribuintes,',
              link: '#'
            },
            
            {
              title: 'Câmara Privada de Mediação e Conciliação da Prefeitura de Jaboatão dos Guararapes',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Sessão de mediação sobre Divórcio, Alimentos, Regulamentação de Visita, Dissolução de União Estável, Exoneração de Pensão Alimentícia,',
              link: '#'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaBalanceScale />
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
