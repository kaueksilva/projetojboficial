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
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2><br/>
                  <p>
                  A regulação é o mecanismo de gestão que possibilita que o usuário seja atendido
                  pelos diferentes serviços de saúde especializados da rede própria e conveniada no
                  SUS. A organização, controle, gerenciamento e priorização de acesso e dos fluxos
                  assistenciais ocorre sob gestão da Central de Regulação pela Secretaria Municipal de
                  Saúde.A Central de Regulação possibilita que o usuário acesse os procedimentos
                  ambulatoriais, seja de exames ou consultas especializadas, assim como o
                  referenciamento a serviços da rede hospitalar que demandam maior complexidade.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4">
                Usuário ser residente do município e estar com a solicitação de encaminhamento,
                feito por profissional de saúde da rede, para procedimentos especializados.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS</h2><br/>
                <p className="mb-4">
                Identificação da Necessidade: O primeiro passo é identificar a necessidade de
                atendimento especializado. Isso pode ocorrer após uma consulta inicial com um
                médico generalista ou de família, onde foi determinado que o problema requer
                cuidados especializados.
                 Elaboração da Solicitação de Encaminhamento: Se o médico generalista
                determinar que o usuário precisa de atendimento especializado, ele elaborará
                uma solicitação de encaminhamento para um especialista ou para um serviço de
                saúde específico.
                 Cadastro no SISREG: A equipe da Unidade de Saúde responsável pelo
                encaminhamento cadastrará o usuário no Sistema de Regulação (SISREG), que é
                responsável por gerenciar o acesso dos pacientes aos serviços de atenção
                especializada.
                 Acompanhamento do Encaminhamento: Após o cadastro no SISREG, o usuário
                pode acompanhar o andamento do encaminhamento, verificando o status da
                solicitação através do app/site “De Olho na Consulta” ou solicitando
                informações na própria Unidade de Saúde.
                 Marcação da Consulta Especializada: Quando o encaminhamento for
                autorizado, os dados do agendamento estarão disponíveis no “de Olho na
                Consulta”. Essas informações também estarão disponíveis no SISREG podendo
                ser consultada na sua unidade de saúde;
                 Comparecimento à Consulta: No dia e horário marcados, o usuário deve
                comparecer à consulta com o especialista, levando consigo todos os
                documentos necessários, como documentos de identificação, cartão do SUS e a
                solicitação de encaminhamento.

                É necessário estarem atualizadas as informações pessoais que constam no Cartão
                Nacional de Saúde do usuário.

                Informamos que para agendamento para os grandes Hospitais da Região
                Metropolitana e procedimentos de alta complexidade, a solicitação é realizada nas
                policlínicas, em sistema especifico do Estado de Pernambuco. Esses procedimentos
                são de responsabilidade da Secretaria Estadual de Saúde.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4">
                Depende da especialidade, da justificativa clínica que consta no encaminhamento e do critério de priorização. </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Usuários do SUS</p>
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
          <h2 className="font-bold text-blue-800 mt-4 mb-4">ENDEREÇO</h2>
            <p>
            Av. Zequinha Barreto, 380 – Piedade, Jaboatão dos Guararapes – PE<br/>
              Praça Murilo Braga, Cavaleiro – Das 8h às 15h.<br/><br/>
              Atendimento de Segunda a Sexta de 8h às 14h<br/>
              Telefone: (81) 99939-9652 – Apenas Whatsapp
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
                    target="_blank" 
                    rel="noopener noreferrer" 
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

export default Pet;
