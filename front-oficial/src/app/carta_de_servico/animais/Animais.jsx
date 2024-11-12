"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { MdOutlinePets } from "react-icons/md"; 

const Animais = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="animais" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'UBS PET',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: A Unidade Básica de Saúde Animal possui os seguintes serviços a população: Consultas e Vacina Antirrábica, avaliação',
              link: '/carta_de_servico/animais/ubs-pet'
            },
            {
              title: 'Vacinação Antirrábica Animal',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Vigilância Ambiental em Saúde oferece vacinação contra raiva para cães e gatos. A vacinação é anual',
              link: '/carta_de_servico/animais/vacina-antirrabica'
            },
            {
              title: 'Atendimento Clínico de Cães e Gatos',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Abertura e análise de processos de terrenos, obras e reformas, alvará de localização e funcionamento, autorizações eventuais.',
              link: '/carta_de_servico/animais/atendimento-clinico-de-caes-e-gatos'
            },
            {
              title: 'Cadastro para Cirurgia de Castração de Cães e Gatos',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O serviço de castração de cães e gatos é disponibilizado aos animais pertencentes aos munícipes de baixa',
              link: '/carta_de_servico/animais/castracao-de-caes-e-gatos'
            },
            {
              title: 'Maus Tratos de Animais de Grande Porte – Denúncia',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Secretaria Executiva de Bem-Estar Animal possui um canal para atendimento de denúncias de maus-tratos a equinos.',
              link: '/carta_de_servico/animais/maus-tratos-de-animais-de-grande-porte-denuncia'
            },
            {
              title: 'Maus Tratos de Cães e Gatos – Denúncia',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Secretaria Executiva de Bem-Estar Animal atua na averiguação de denúncias relacionadas a maus-tratos de cães e',
              link: '/carta_de_servico/animais/maus-tratos-de-caes-e-gatos-denuncia'
            },
            {
              title: 'Recolhimento de Animais Mortos',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Secretaria Executiva de Serviços Urbanos é responsável pelo recolhimento de animais mortos em vias públicas.',
              link: '/carta_de_servico/animais/recolhimento-de-animais-mortos'
            },
            {
              title: 'Resgate de Animais Marinhos e Silvestres',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A solicitação também poderá ser realizada nas Regionais de Serviço ou na Ouvidoria Geral do município.',
              link: '/carta_de_servico/animais/resgate-de-animais-marinhos-e-silvestres'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <MdOutlinePets />
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

export default Animais;
