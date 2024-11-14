"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaHandshake } from "react-icons/fa6";

const ServicosDeDireitosHumanos = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Serviços de Direitos Humanos" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'INTEGRA',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa INTEGRA está vinculado à Secretaria Executiva de Direitos humanos, da Família e de Política',
              link: '/carta_de_servico/servicos-direitos-humanos/integra'
            },
            {
              title: 'FORTALECENDO LAÇOS',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa Fortalecendo Laços está vinculado à Secretaria Executiva de Direitos Humanos, da Família e de',
              link: '/carta_de_servico/servicos-direitos-humanos/fortalecendo-lacos'
            },
            {
              title: 'COMUNICA LIBRAS',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa Comunica Libras está vinculado à Secretaria Executiva de Direitos Humanos, da Família e de',
              link: '/carta_de_servico/servicos-direitos-humanos/comunica-libras'
            },
            {
              title: 'CARTEIRA CIPTEA',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa CIPTEA está vinculado à Secretaria Executiva de Direitos Humanos, da Família e de Política',
              link: '/carta_de_servico/servicos-direitos-humanos/carteira-ciptea'
            },
            {
              title: 'Balcão da Cidadania',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa Balcão da Cidadania está vinculado à Secretaria Executiva de Direitos Humanos, da Família e',
              link: '/carta_de_servico/servicos-direitos-humanos/balcao-da-cidadania'
            },
            {
              title: 'Núcleo de Apoio a Vítimas de Violência',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Núcleo de Apoio às Vítimas de Violência (NAVV) está vinculado à Secretaria Executiva de Direitos',
              link: '/carta_de_servico/servicos-direitos-humanos/nucleo-de-apoio-a-vitimas-de-violencia'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaHandshake  />
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

export default ServicosDeDireitosHumanos;
