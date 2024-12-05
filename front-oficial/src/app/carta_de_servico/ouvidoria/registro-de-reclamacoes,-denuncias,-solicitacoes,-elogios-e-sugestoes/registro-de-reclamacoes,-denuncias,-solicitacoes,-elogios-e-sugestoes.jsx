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
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2><br/>
                  <p>
                    A Ouvidoria Geral do município do Jaboatão dos Guararapes é um espaço de comunicação entre o cidadão e o governo local, onde é possível registrar suas reclamações, denúncias, solicitações, elogios e sugestões.
                  <br />
                  <br />
                    Tem como finalidade fomentar a participação e conscientização da população acerca do direito de receber um serviço público de qualidade, eficiente e respeitoso, e, em alguns casos, auxiliar a identificar o fórum apropriado para a resolução do problema relatado.
                  <br />
                  <br />
                    Importante esclarecer que a Ouvidoria figura como órgão de segunda instância, o que significa dizer que o usuário deverá, em primeiro lugar, procurar o órgão responsável pela execução do serviço, e, na hipótese de não ser atendido, poderá recorrer à Ouvidoria Geral do Município. 
                  </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4">
                  Qualquer registro poderá ser realizado de forma identificada, onde o usuário poderá incluir seus dados pessoais (nome, e-mail ,telefone e endereço) ou de forma anônima (sem identificação). Os dados fornecidos são protegidos conforme a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018.
                <br />
                <br />
                  Todo cidadão é potencialmente beneficiário dos serviços da Ouvidoria Geral do Município, podendo se manifestar espontaneamente por meio dos canais de atendimento.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS PARA ANÁLISE E ATENDIMENTO DE DENUNCIAS:</h2><br/>
                <p className="mb-4">
                  – O usuário deve relatar uma irregularidade ou ato ilícito cuja solução depende da atuação de órgão de controle; <br />
                  – A manifestação deve conter elementos mínimos indispensáveis à sua apuração (autoria e materialidade); <br />
                  – Exposição dos fatos conforme a verdade; <br />
                  – Proceder com lealdade, urbanidade e boa-fé; <br />
                  – Prestar as informações que lhe forem solicitadas. <br />
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS PARA ANÁLISE E ATENDIMENTO DE RECLAMAÇÕES:</h2><br/>
                <p className="mb-4">
                  – O usuário deve relatar uma irregularidade ou ato ilícito cuja solução depende da atuação de órgão de controle; <br />
                  – A manifestação deve conter elementos mínimos indispensáveis à sua apuração (autoria e materialidade); <br />
                  – Exposição dos fatos conforme a verdade; <br />
                  – Proceder com lealdade, urbanidade e boa-fé; <br />
                  – Prestar as informações que lhe forem solicitadas. <br />
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS PARA ANÁLISE E ATENDIMENTO DE SOLICITAÇÕES:</h2><br/>
                <p className="mb-4">
                  – O usuário deve solicitar o atendimento ou serviço a ser prestado pela Ouvidoria. Para isso é importante o usuário informar a solicitação realizada primeiramente nos órgãos responsáveis pela prestação do serviço ou as Regionais de Serviços: <br />
                  – Apresentar número de protocolo de atendimento anterior; <br />
                  – Apresentar informações mínimas necessárias à sua solução; <br />
                  – Proceder com lealdade, urbanidade e boa-fé; <br />
                  – Prestar as informações que lhe forem solicitadas. <br />
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS PARA ANÁLISE E  ATENDIMENTO DE ELOGIOS:</h2><br/>
                <p className="mb-4">
                  A manifestação deve conter elementos mínimos indispensáveis ao encaminhamento da manifestação: como nome do servidor elogiado e qual o setor responsável pela prestação do serviço.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS PARA ANÁLISE E  ATENDIMENTO DE SUGESTÕES:</h2><br/>
                <p className="mb-4">
                  O usuário deverá apresentar proposta de melhoria de políticas e serviços prestados pela gestão municipal.
                </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS</h2>
                <p className="mb-4">
                  O cidadão poderá entrar em contato com a Ouvidoria Geral por meio dos canais: telefone, e-mail, presencial, WhatsApp e o registro online através de site ou aplicativo, sempre que houver necessidade ou desejo de manifestar uma reclamação, denúncia, solicitação, sugestão ou elogio pertinente a qualquer órgão, ou colaborador integrante da estrutura administrativa da Prefeitura Municipal do Jaboatão dos Guararapes. 
                </p>
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4">
                  A partir do cadastramento da manifestação no sistema online Eouve, o prazo de resposta à manifestação é de 20 dias, podendo ser prorrogado por 10 dias mediante justificativa, conforme prazo estabelecido no decreto municipal 070/2021. 
                </p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
                <p className="mb-4">Presencial</p>

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
