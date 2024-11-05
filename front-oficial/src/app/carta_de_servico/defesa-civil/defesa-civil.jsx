"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaBalanceScaleRight  } from "react-icons/fa";

const ambiente = () => {
  return (
    <div className="flex mx-72 my-10">
      <SideMenu activeItem="Trabalho e Emprego" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'VISTORIA EM EDIFICAÇÕES',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Vistoria em edificações: prédios, pontes, casas ou muros.Informações necessárias para acessar os serviços:Nome:Endereço:Data de Nascimento:Tipo de Ocorrência:',
              link: '#'
            },
            
            {
              title: 'VISTORIA EM ÁRVORES E ÁREAS DE ENCOSTAS',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Vistoria em árvores e áreas de encostas.Informações necessárias para acessar os serviços: Nome:Endereço:Data de Nascimento:Tipo de Ocorrência:',
              link: '#'
            },
            {
              title: 'ERRADICAÇÃO DE ÁRVORES DE PEQUENO PORTE',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Erradicação de árvores de pequeno porte. Informações necessárias para acessar os serviços:Nome:Endereço:Data de Nascimento:Tipo de Ocorrência: PERGUNTAS',
              link: '#'
            },
            {
              title: 'Direcionamento e Orientação de Famílias que Estão em Área de Riscos',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Direcionamento/orientação de famílias que estão em área de riscos.Informações necessárias para acessar os serviços: Nome:Endereço:Data de Nascimento:Tipo',
              link: '#'
            },
            {
              title: '(Re)Colocação de Lonas Plásticas em Áreas de Encostas',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO (Re)Colocação de lonas plásticas em áreas de encostas.Informações necessárias para acessar os serviços:Nome:Endereço:Data de Nascimento:Tipo de Ocorrência:',
              link: '#'
            },
            {
              title: 'Capinação em Áreas de Encostas',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Capinação em áreas de encostas.Informações necessárias para acessar os serviços:Nome:Endereço:Data de Nascimento:Tipo de Ocorrência: PERGUNTAS COMPLEMENTARES 1',
              link: '#'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaBalanceScaleRight />
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
