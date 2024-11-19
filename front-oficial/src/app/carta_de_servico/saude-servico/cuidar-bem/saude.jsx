"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Saude = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <br />
                <p>
                Cuidar bem – É um programa de transporte eletivo criado pela Secretaria de Saúde da Prefeitura Municipal de Jaboatão dos Guararapes, que tem o objetivo de fornecer transporte de qualidade para usuários do Sistema Único de Saúde – SUS, residentes do município, que fazem tratamento de saúde em clínicas e hospitais públicos ou conveniados com o SUS.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4 mt-4">
                Documentos necessários para participar:
                </p>
                <li>Foto 3×4;</li>
                <li>Documento oficial de identificação com foto;</li>
                <li>CPF;</li>
                <li>Cartão do SUS;</li>
                <li>Cartão Cidadão;</li>
                <li>Comprovante de Residência;</li>
                <li>Comprovante de Renda;</li>
                <li>Laudo médico ou de um profissional de nível superior de saúde;</li>
                <p>Encaminhamento ou marcação do serviço de saúde a ser realizado ou que esteja em acompanhamento com as seguintes informações: nome do serviço, dias, horários e tipo de tratamento. <br/><br/>

                Pacientes que estão realizando tratamento de:</p>

                <li>Terapia Renal Substitutiva (hemodiálise);</li>
                <li>Quimioterapia/Radioterapia;</li>
                <li>Pacientes em Reabilitação com:deficit de locomoção, total ou parcialmente dependentes;</li>
                <li>Crianças acometidas pela Síndrome Congênita do Zika Vírus;</li>
                <li>Usuários do SUS Jaboatão dos Guararapes classificados como totalmente dependente de acordo com o Índice de Katz;</li>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA
                </h2>
                <p className="mb-4">Presencial </p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <h2 className="font-bold text-blue-800 mt-4 mb-4">
              SECRETARIA MUNICIPAL DE SAÚDE
            </h2>
            <p>
            Av. Barreto de Menezes, S/N – Prazeres, <br />
            Jaboatão dos Guararapes – PE.<br />
            Telefone: (81) 99823-0131 / (81) 99939-1889
            </p>

            <iframe
              className="w-full mt-4 h-[400px] md:h-[600px]"
              src="https://www.google.com/maps/d/u/1/embed?mid=1ORcftMNYjkSyf8TbVk2kFJSvDXDW7sU&amp;ehbc=2E312F"
              width="100%"
              height="600px"
              title="Descrição da página"
              allowFullScreen
            />
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

export default Saude;
