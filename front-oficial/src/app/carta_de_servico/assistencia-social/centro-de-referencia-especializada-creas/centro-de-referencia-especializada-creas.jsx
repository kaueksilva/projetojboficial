"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Pet = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO GERAL:</h2>
                <p>
                O Centro de Referência Especializada em Assistência Social (CREAS) é a unidade pública estatal que oferta serviços continuados de proteção social especial de média complexidade e destina-se ao atendimento e acompanhamento de famílias e indivíduos em situação de risco pessoal ou social, cujos direitos tenham sido violados ou ameaçados. O atendimento pode ser através de demanda espontânea e encaminhamentos da rede socioassistencial, saúde, sistema de justiça e outros. O CREAS oferece os seguintes serviços: <br/><br/>

● Serviço de Proteção e Atendimento Especializado a Famílias e Indivíduos -PAEFI que atende crianças e/ou adolescentes vítimas de violência intrafamiliar; Crianças ou adolescentes vítimas de abuso ou exploração sexual; Crianças ou adolescentes em situação de trabalho infantil; Pessoas idosas vítimas de violência intrafamiliar física, psicológica ou sexual, negligência ou abandono; Pessoas com deficiência vítimas de violência intrafamiliar física, psicológica ou sexual, negligência ou abandono; Pessoas vítimas de tráfico de seres humanos e pessoas vítimas de discriminação por orientação sexual.<br/>
● Serviço Especializado de Abordagem Social que consiste na oferta de forma continuada e programada com a finalidade de assegurar trabalho social de abordagem e busca ativa que identifique nos territórios a incidência de trabalho infantil, exploração sexual de crianças e adolescentes, situação de rua, dentre outras.<br/>
● Serviço de proteção social a adolescentes em cumprimento de medida socioeducativa de Liberdade Assistida (LA) e de Prestação de Serviços à Comunidade (PSC);
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS:</h2>
                <p></p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS:
                </h2>
                <p></p>
              </div>

              <div className="pl-10 w-full">
                
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p>Variável de acordo com o perfil da demanda.</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p>Presencial</p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS:</h2>
                <p>Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <div>
            <h2 className="font-bold text-blue-800 mt-4">ENDEREÇO:</h2> <br />
                <p>Horário de atendimento: das 7h às 16h<br /><br />

CREAS – Prazeres<br />
Rua Brás Moscow, no 126 – Piedade<br />
(atende as Regionais 4,5,6 e 7)<br />
Telefone: (81) 9.9975-4133 E-mail:creas.prazeres@jaboatao.pe.gov.br<br /><br />

CREAS Cavaleiro<br />
Av. Agamenon Magalhães, no 370 – Cavaleiro<br />
(atende as Regionais 1,2,3)<br /><br />

Telefone: (81) 9.9975-2216 E-mail: creas.cavaleiro@jaboatao.pe.gov.br
                </p>
                
            </div>
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
                    className="roboto-medium w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-full text-sm md:text-base hover:bg-[#00ACED] transition-colors"
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

export default Pet;
