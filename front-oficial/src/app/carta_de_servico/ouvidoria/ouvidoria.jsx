"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { IoMegaphone } from "react-icons/io5";

const Ouvidoria = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Ouvidoria" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Registro de reclamações, denúncias, solicitações, elogios e sugestões',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Ouvidoria Geral do município do Jaboatão dos Guararapes é um espaço de comunicação entre o cidadão',
              link: '/carta_de_servico/ouvidoria/registro-de-reclamacoes,-denuncias,-solicitacoes,-elogios-e-sugestoes'
            },
            
            {
              title: 'Pedido de Acesso à Informação',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Ouvidoria disponibiliza o Serviço de Atendimento ao Cidadão – SIC, onde o usuário poderá solicitar acesso',
              link: '/carta_de_servico/ouvidoria/pedido-de-acesso-a-informacao'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <IoMegaphone />
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

export default Ouvidoria;
