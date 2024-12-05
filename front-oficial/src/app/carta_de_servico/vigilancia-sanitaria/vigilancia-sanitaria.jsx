"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaEye } from "react-icons/fa";

const Vigilancia = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Vigilância Sanitária" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Análise de Processos de Licenciamento',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO De acordo com a Lei Federal nº 8080/90, a Vigilância Sanitária é responsável por desenvolver um conjunto',
              link: '/carta_de_servico/vigilancia-sanitaria/analise-de-processos-de-licenciamento'
            },
            {
              title: 'Atendimento ao Setor Regulado',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO De acordo com a Lei Federal nº 8080/90, a Vigilância Sanitária é responsável por desenvolver um conjunto',
              link: '/carta_de_servico/vigilancia-sanitaria/atendimento-ao-setor-regulado'
            },
            {
              title: 'Emissão de Licenças Sanitárias',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO De acordo com a Lei Federal nº 8080/90, a Vigilância Sanitária é responsável por desenvolver um conjunto',
              link: '/carta_de_servico/vigilancia-sanitaria/emissao-de-licencas-sanitarias'
            },
            {
              title: 'Engenharia',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO De acordo com a Lei Federal nº 8080/90, a Vigilância Sanitária é responsável por desenvolver um conjunto',
              link: '/carta_de_servico/vigilancia-sanitaria/engenharia'
            },
            {
              title: 'Inspeção em Estabelecimentos Regulados (Alimentos e Serviços de Saúde)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO De acordo com a Lei Federal nº 8080/90, a Vigilância Sanitária é responsável por desenvolver um conjunto',
              link: '/carta_de_servico/vigilancia-sanitaria/inspecao-em-estabelecimentos-regulados-alimentos-e-servicos-de-saude'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaEye />
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

export default Vigilancia;
