"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaIndustry } from "react-icons/fa";

export const metadata = {
  title: "Serviços Urbanos  - Prefeitura do Jaboatão dos Guararapes",
};

const ambiente = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Serviços Urbanos" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Pavimentação e Drenagem',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Serviços de pavimentação e drenagem com pararalepípedosRealizar a requalificação e manutenção de pavimentação asfáltica com CBUQ (concreto',
              link: '/carta_de_servico/servicos-urbanos/pavimentacao-e-drenagem'
            },
            
            {
              title: 'Pavimentação',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Serviços de pavimentação em asfalto quente CBUQ (Concreto Betuminoso Usinado a Quente). Realizar a requalificação e manutenção',
              link: '/carta_de_servico/servicos-urbanos/pavimentacao'
            },
            {
              title: 'Operação tapa buraco',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Operação tapa buraco. Realizar a manutenção de vias públicas com asfalto pré misturado a frio-PMF. REQUISITOS Solicitação',
              link: '/carta_de_servico/servicos-urbanos/operacao-tapa-buraco'
            },
            {
              title: 'Recolhimento de Resíduos',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Remoção de podas, entulhos e resíduos domiciliares. REQUISITOS Solicitação de municípios (Ouvidoria Geral e Regional de Serviço),',
              link: '/carta_de_servico/servicos-urbanos/recolhimento-de-residuos'
            },
            {
              title: 'Poda e Corte de Árvores',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Os serviços de poda que envolver fiações deverão ser enviadas diretamente a Neoenergia, quanto as demais, devem',
              link: '/carta_de_servico/servicos-urbanos/poda-e-corte-de-arvores'
            },
            {
              title: 'Drenagem Urbana',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Responsável por serviços ligados às questões de saúde pública e meio ambiente, como:– Limpeza de canaletas;– Limpeza',
              link: '/carta_de_servico/servicos-urbanos/drenagem-urbana'
            },
            {
              title: 'Capinação',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Capinação. REQUISITOS Solicitação de muncípios (Ouvidoria Geral e Regional de Serviço), Órgãos de fiscalização, Câmara dos Vereadores,',
              link: '/carta_de_servico/servicos-urbanos/capinacao'
            },
            {
              title: 'Micro Drenagem Urbana',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Realizar a manutenção de vias públicas com problemas de micro drenagem urbana. REQUISITOS Solicitação de municípios (Ouvidoria',
              link: '/carta_de_servico/servicos-urbanos/micro-drenagem-urbana'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaIndustry />
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
