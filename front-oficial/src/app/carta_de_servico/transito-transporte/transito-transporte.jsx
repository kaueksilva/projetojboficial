"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaBusAlt } from "react-icons/fa";

const ambiente = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Trânsito e Transporte" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Manutenção da Rede Semafórica',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A ação de manutenção deve ocorrer no menor tempo possível, evitando acidente ao pedestre e ao usuário',
              link: '/carta_de_servico/transito-transporte/manutencao-de-rede-semaforica'
            },
            
            {
              title: 'Planejamento e Programação do Transporte Público',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Secretaria Executiva de Mobilidade e Ordem Pública é responsável pelo cadastramento e vistoria dos operadores e',
              link: '/carta_de_servico/transito-transporte/planejamento-e-progracao-do-transporte-publico'
            },
            {
              title: 'Cadastramento e Vistoria dos Operadores e dos Veículos de Transporte Público',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Secretaria Executiva de Mobilidade e Ordem Pública é responsável pelo cadastramento e vistoria dos operadores e',
              link: '/carta_de_servico/transito-transporte/planejamento-e-progracao-do-transporte-publico'
            },
            {
              title: 'Emissão de Credenciais Para Uso de Vagas de Estacionamento Destinadas a Idosos, Deficientes, Pessoas Com Dificuldade de Locomoção e Gestantes',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Emitir credenciais para uso de vagas de estacionamentos destinadas a idoso, portadores de deficiência, pessoa com dificuldade',
              link: '/carta_de_servico/transito-transporte/emissao-de-credenciais'
            },
            {
              title: 'Emissão de Taxas de Serviço e Multas dos Modais do Serviço de Transporte Público',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Informar e expedir taxas e multas de transporte relativas as pendências administrativas dos cadastros dos modais. REQUISITOS',
              link: '/carta_de_servico/transito-transporte/emissao-de-taxas'
            },
            {
              title: 'Expedição de Declaração de Acidente Com e Sem Vítimas',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Verificar a via e os possíveis fatores que acarretaram o acidente, além de coletar o depoimento das',
              link: '/carta_de_servico/transito-transporte/expedicao-de-declaracao'
            },
            {
              title: 'Fornecimento de Cópia do Auto de Infração de Trânsito',
              description:
                'DADADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO REQUISITOS Documento oficial que identifique a parte envolvida. PRINCIPAIS ETAPAS Solicitação – A solicitação deverá ser realizada',
              link: '/carta_de_servico/transito-transporte/fornecimento-de-copia'
            },
            {
              title: 'Implantação e Manutenção da Sinalização Gráfica Vertical e Horizontal',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O usuário poderá solicitar a manutenção de sinalização já existente como: faixa de pedestres,  parada, abrigo, terminal',
              link: '/carta_de_servico/transito-transporte/implantacao-e-manutencao'
            },
            {
              title: 'Fiscalização de Acidentes de Trânsito',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Realizar ação de fiscalização no local do acidente de trânsito ocorrido em via pública, para garantir a',
              link: '/carta_de_servico/transito-transporte/fiscalizacao-de-acidentes'
            },
            {
              title: 'Fiscalização dos Operadores e dos Veículos Prestadores de Serviço do Sistema de Transporte Público',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Realizar fiscalização de forma rotineira por agentes de trânsito e transporte. REQUISITOS PRINCIPAIS ETAPAS Para a realização',
              link: '/carta_de_servico/transito-transporte/fiscalizacao-dos-operadores'
            },
            {
              title: 'Fiscalização de Trânsito',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Fiscalizar situações que apresentem desacordo com as leis de trânsito brasileira. REQUISITOS Apresentar informações básicas de identificação',
              link: '/carta_de_servico/transito-transporte/fiscalizacao-de-transito'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaBusAlt />
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
