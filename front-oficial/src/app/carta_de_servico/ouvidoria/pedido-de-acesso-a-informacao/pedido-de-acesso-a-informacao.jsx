"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Ouvidoria = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                  <p>
                  A Ouvidoria disponibiliza o Serviço de Atendimento ao Cidadão – SIC, onde o usuário poderá solicitar acesso à informação conforme estabelecido na Lei de Acesso à Informação Federal 12.527/2011, e na Lei Municipal 853/2013.
                  </p><br/>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4"></p><br/>

                <h2 className="font-bold text-blue-800 mt-4">O PEDIDO DE ACESSO DEVERÁ CONTER:</h2>
                <p className="mb-4">
                Nome do requerente
Especificação, de forma clara e precisa, da informação requerida; e
Endereço físico ou eletrônico do requerente, para recebimento de comunicações ou da informação requerida.</p><br/>

                <h2 className="font-bold text-blue-800 mt-4">NÃO SERÁ ATENDIDO PEDIDO DE ACESSO:</h2>
                <p className="mb-4">
                Genérico;
                Desproporcional ou desarrazoado; ou que exija trabalho adicional de análise, interpretação ou consolidação de dados e informações, ou serviço de produção ou tratamento de dados que não seja de competência da Controladoria, conforme previsto na Lei 853/2013.
                </p><br/>

              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS</h2>
                <p className="mb-4">
                O cidadão poderá entrar em contato com a Ouvidoria Geral presencialmente, por telefone ou fazer o registro online, sempre que houver necessidade ou desejo de realizar um. 
                </p>
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4">
                O Pedido será cadastrado no E-SIC. A partir do cadastramento no e-SIC, o prazo para resposta ao usuário será de até 20 dias, podendo ser prorrogado por 10 dias mediante justificativa, conforme prazo estabelecido no Decreto Municipal 063/2017. 
                </p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
                <p className="mb-4">Telefone, presencial, site, aplicativo e  e-mail.

</p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">
                Não há cobranças de taxas
                </p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>

            <p>
              Telefone: <br />
              0800.081.8899 <br />
              99422.5177 ( Whatsapp) <br />
            </p>

          <h2 className="font-bold text-blue-800 mt-4 mb-4">HORÁRIO DE ATENDIMENTO:</h2>
            <p>
            8h às 14:00h
            </p>

            <h2 className="font-bold text-blue-800 mt-4 mb-4">ENDEREÇO</h2>
            <p>
              Avenida Barreto de Menezes, 1648 – Prazeres
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
                      href="mailto:ouvidoria@jaboatao.pe.gov.br" className="text-blue-700 underline"
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
                  <p>
                  Lorena Ventura
                  </p>

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

export default Ouvidoria;