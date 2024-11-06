"use client";

import React from 'react';
import CartaDeServico from '../../../../components/carta-de-servicos';

const Fiscalizacao = () => {
  return (
    <CartaDeServico 
      dadosGerais={
        <> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
          {/* Primeira coluna */}
          <div className="pr-10 w-full"> {/* Espaçamento adicional à direita */}
            <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
            <ul className="list-disc pl-5 mb-4">
              <li>Denúncia de Obra Irregular;</li>
              <li>Ocupação de Espaço Público;</li>
              <li>Alvarás de Funcionamento para atividades irregulares;</li>
              <li>Publicidade Irregular.</li>
            </ul>
            <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
            <p className="mb-4">
              Endereço completo do local denunciado com ponto de referência.
              <br />
              Etapas do Serviço: Vistoria no local para verificação.
            </p>
            <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS</h2>
            <p className="mb-4">Vistoria no local para verificação.</p>
            <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
            <p className="mb-4">Tempo médio de atendimento: 08 dias úteis</p>
          </div>

          {/* Segunda coluna */}
          <div className="pl-10 w-full"> {/* Espaçamento adicional à esquerda */}
            <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
            <p className="mb-4">Cidadão</p>
            <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
            <p className="mb-4">Presencial ou telefone</p>
            <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
            <p className="mb-4">Não há cobranças de taxas</p>
          </div>
        </div>
        </>
      }
      setorPublico={
        <>
          <p>Av. Estrada da Batalha, 1200, Galpão N – Jardim Jordão, Jaboatão dos Guararapes – PE<br/>
          Telefone: (81) 99975-2561<br/>
          E-mail: gefuape@gmail.com<br/>
          Horário de atendimento: 08h às 14h <br/>
          </p>
        </>
      }
      duvidas={
        <>
          <h2 className="font-bold text-blue-800 mt-4">CANAIS DE ATENDIMENTO</h2>
          <p>Disponibilizamos alguns mecanismos para realização de manifestações:</p>
          <ul className="list-disc pl-5">
            <li className="mt-2">
              <strong>VIA INTERNET:</strong> Caso não encontre o que procura, faça uma manifestação por meio do Sistema da Ouvidoria Eletrônica, acessando o endereço eletrônico disponível abaixo.
              <button className="mt-2 inline-block bg-blue-700 text-white py-1 px-4 rounded">ATENDIMENTO ONLINE</button>
            </li>
            <li className="mt-4">
              <strong>PRESENCIALMENTE:</strong> É disponibilizado ao cidadão um canal de comunicação de forma física também. A Ouvidoria da Prefeitura Municipal de Jaboatão dos Guararapes está disponível a todos os cidadãos no seguinte endereço: <br/>
              Avenida Barreto de Menezes, 1648 – Prazeres
            </li>
            <li className="mt-4">
              <strong>E-MAIL:</strong> É disponibilizado ao cidadão um canal de comunicação de correio eletrônico também: <br/>
              <a href="mailto:ouvidoria@jaboatao.pe.gov.br" className="text-blue-700">ouvidoria@jaboatao.pe.gov.br</a>
            </li>
          </ul>
          <h2 className="font-bold text-blue-800 mt-6">TELEFONE</h2>
          <p className="mb-4">É disponibilizado ao cidadão um canal de comunicação de ligação gratuita: <br/>
            0800.081.8899
          </p>
          <h2 className="font-bold text-blue-800 mt-6">WHATSAPP</h2>
          <p className="mb-4">É disponibilizado ao cidadão um canal de comunicação de aplicativo para mensagens instantâneas: <br/>
            99422.5177
          </p>
          <h2 className="font-bold text-blue-800 mt-6">GESTOR DA OUVIDORIA</h2>
          <p className="mb-4">Nome do Gestor: Lorena Ventura</p>
          <h2 className="font-bold text-blue-800 mt-6">HORÁRIO DE ATENDIMENTO</h2>
          <p>08h às 14h – de segunda a sexta-feira</p>
        </>
      }
    />
  );
};

export default Fiscalizacao;
