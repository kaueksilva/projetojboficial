"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaFileInvoiceDollar } from "react-icons/fa6";

const Imposto = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Impostos e Taxas" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'TAXAS MERCANTIS',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A taxa de poder de polícia é devida pela atividade municipal de vigilância ou fiscalização do cumprimento',
              link: '/carta_de_servico/impostos-taxas/taxas-mercantis'
            },
            {
              title: 'IPTU e TLP',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O IPTU é o imposto sobre a propriedade predial e territorial urbana, tem como fato gerador a',
              link: '#'
            },
            {
              title: 'ITBI',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO ITBI é o imposto que incidirá sobre a transmissão de bens imóveis ou direitos a eles relativos,',
              link: '#'
            },
            {
              title: 'ISS Imposto Sobre Serviço',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O ISS ou ISSQN é o imposto sobre serviços de qualquer natureza, da competência constitucional dos Municípios',
              link: '#'
            },
            {
              title: 'Simples Nacional',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O Simples Nacional é um regime de tributação diferenciado para as Micro Empresas – ME e Empresas',
              link: '#'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaFileInvoiceDollar  />
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

export default Imposto;
