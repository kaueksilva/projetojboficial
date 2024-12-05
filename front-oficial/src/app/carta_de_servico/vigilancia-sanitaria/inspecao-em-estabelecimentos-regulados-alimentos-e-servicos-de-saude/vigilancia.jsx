"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Vigilancia = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <br />
                <p className="mb-4">
                  Através de processos de licenciamento (físicos ou digitais)
                  para concessão de licença inicial ou renovação; através de
                  atendimento a denúncia ou busca ativa em estabelecimentos
                  passíveis de fiscalização sanitária. Necessitando de
                  documentos como: CNPJ, Contrato Social, Carnê de Inscrição
                  Municipal- CIM e Memorial Descritivo, entre outros documentos
                  técnicos exigidos, conforme atividade desenvolvida.
                </p>
                <a
                  href="https://cidadao-jaboatao.sissofia.com.br/login"
                  target="_blank"
                  className=" w-full md:w-auto bg-[#004376] text-white py-2 px-6  rounded-xl text-sm md:text-base hover:bg-[#00ACED] transition-colors roboto-medium"
                >
                  PORTAL DE LICENCIAMENTO
                </a>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4 mt-4">
                  Presencial na sede vigilância sanitária – Apresentar 02 (dois)
                  conjuntos completos, Padrão ANT contendo: plantas de situação,
                  locação e coberta, Planta Baixa (Escala:1/50) com cotas e
                  Layout, 2 cortes(Sendo: um longitudinal, um transversal) e
                  Fachadas, colocar no quadro de legendas: Razão Social, Nome
                  Fantasia, CNPJ, Endereço Completo, Área Terreno, Área de
                  Construção, Nome do Proprietário por Extenso, CPF e
                  Assinatura, Nome do Projetista-Assinatura e Número do
                  Conselho. Apresentar: Relatório Técnico, ART ou RRT, boleto e
                  comprovante de pagamento, memorial descritivo dos
                  Serviços/Atividades/Procedimentos Realizados com detalhes.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS
                </h2>
                <p className="mb-4 mt-4">
                  Inspeção ou reinspeção sanitária, até atendimento das
                  exigências contidas nos termos de notificação com o
                  deferimento ou indeferimento da licença.
                </p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4">
                  Imediato, porém a liberação da licença depende do atendimento
                  as exigências.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA
                </h2>
                <p className="mb-4">
                  {" "}
                  Presencial e telefone.
                  <br />
                  <br />
                  Protocolo: segunda a sexta de 8h às 16h. Inspeções aos
                  estabelecimentos: segunda a sexta de 8h às 17h e finais de
                  semana das 17h às 23h.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">De acordo com a</p>
                <a
                  href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/LEI-No-1.325-2017-Taxas.pdf"
                  target="_blank"
                  className=" w-full md:w-auto bg-[#004376] text-white py-2 px-6  rounded-xl text-sm md:text-base hover:bg-[#00ACED] transition-colors roboto-medium"
                >
                  LEI N° 1325/2017
                </a>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            
            <h2 className="font-bold text-blue-800 mt-4 mb-4">ENDEREÇO</h2>
            <p>
            Horário de atendimento: Segunda a sexta de 8h às 16h <br/> <br/>

            Protocolo: <br/>
            segunda a sexta de 8h às 16h. <br/>
            Inspeções aos estabelecimentos:  <br/>
            segunda a sexta de 8h às 17h e finais de semana das 17h às 23h. <br/> <br/>

            Endereço: R. Adalberto Coimbra, 250 – Jardim Jordão <br/> <br/>

            Telefone: 9.9975-3952
            </p>
          </>
        }
        duvidas={
          <>
            <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="md:pr-8">
                  <h2 className="font-bold text-blue-800 text-lg mb-4 text-left">
                    CANAIS DE ATENDIMENTO
                  </h2>
                  <p className="mb-3 text-justify">
                    Disponibilizamos alguns mecanismos para realização de
                    manifestações:
                  </p>
                  <h2 className="font-bold text-blue-800 text-lg mb-2">
                    VIA INTERNET
                  </h2>
                  <p className="mb-7 text-justify">
                    Caso não encontre o que procura, faça uma manifestação por
                    meio do Sistema da Ouvidoria Eletrônica, acessando o
                    endereço eletrônico disponível abaixo.
                  </p>
                  <a
                    className=" w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                    href="https://ouvidoria.jaboatao.pe.gov.br/"
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                  >
                    ATENDIMENTO ONLINE
                  </a>

                  <h2 className="font-bold text-blue-800 text-lg mt-7 mb-2">
                    PRESENCIALMENTE
                  </h2>
                  <p className="text-justify">
                    É disponibilizado ao cidadão um canal de comunicação de
                    forma física também. A Ouvidoria da Prefeitura Municipal de
                    Jaboatão dos Guararapes está disponível a todos os cidadãos
                    no seguinte endereço:
                  </p>
                  <p className="mt-2">
                    Avenida Barreto de Menezes, 1648 – Prazeres
                  </p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    E-MAIL
                  </h2>
                  <p className="text-justify">
                    É disponibilizado ao cidadão um canal de comunicação de
                    correio eletrônico também:
                  </p>
                  <p className="mt-1">
                    <a
                      href="mailto:ouvidoria@jaboatao.pe.gov.br"
                      className="text-blue-700 underline"
                    >
                      ouvidoria@jaboatao.pe.gov.br
                    </a>
                  </p>
                </div>

                <div className="md:pl-8">
                  <h2 className="font-bold text-blue-800 text-lg mb-2">
                    TELEFONE
                  </h2>
                  <p>
                    É disponibilizado ao cidadão um canal de comunicação de
                    ligação gratuita:
                  </p>
                  <p className="mt-2">0800.081.8899</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    WHATSAPP
                  </h2>
                  <p>
                    É disponibilizado ao cidadão um canal de comunicação de
                    aplicativo para mensagens instantâneas:
                  </p>
                  <p className="font-semibold mt-2">99422.5177</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    GESTOR DA OUVIDORIA
                  </h2>
                  <p>Lorena Ventura</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    HORÁRIO DE ATENDIMENTO
                  </h2>
                  <p>08h às 14h – de segunda a sexta-feira</p>
                </div>
              </div>
            </div>
          </>
        }
      />

      <PesquisaSatisfacao />
    </div>
  );
};

export default Vigilancia;
