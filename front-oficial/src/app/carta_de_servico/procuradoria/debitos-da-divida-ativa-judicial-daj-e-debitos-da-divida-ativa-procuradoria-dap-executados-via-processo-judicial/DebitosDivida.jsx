"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";


const Fiscalizacao = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <ul className="list-disc list-inside" >
                  <li className="mb-4">A Equipe de Apoio Técnico e Administrativo da Procuradoria daFazendaMunicipalrealiza o
                  atendimento aos contribuintes, referente aos débitos (DAJ e DAP) executados via processo
                  judicial, através dos seguintes serviços:
                  1. Orientações gerais sobre débitos tributários e não tributários ajuizados em nome do
                 contribuinte, com esclarecimentos sobre as opções de pagamento, à vista ou parcelado.
                2. Requerimento de prescrição de débitos ajuizados, baixa de débitos ajuizados já quitados
                ou outras situações que estiverem em análise com a Procuradoria.</li>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="font-bold mb-4 mt-4">Documentos necessários:</p>
                <p className="font-bold mb-4 mt-4">1 – quando o requerente é pessoa física:</p>
                <p className=" mb-4 mt-4">A) Cópias do RG, CPF ou CNH, comprovante de residência atualizado; <br/>
                B) No caso de procurador: anexar procuração outorgando poderes de
                acordo requerimento a ser protocolado, e cópia do RG, CPF do outorgante
                e outorgado.</p>
                <p className=" mb-4 mt-4">
                * Em caso de solicitação de prescrição, necessário a certidão de feitos fiscais.</p>
                <p className="font-bold mb-4 mt-4">2 – quando o requerente é pessoa jurídica:</p>
                <p className=" mb-4 mt-4">A) O sócio apresentará o contrato social, RG e CPF; <br/>
                B) No caso de procurador: apresentar procuração de um dos sócios, contrato social, RG e
                CPF do outorgante e do outorgado.</p>
                <p className=" mb-4 mt-4">
                * Em caso de solicitação de prescrição, necessário a certidão de feitos fiscais.</p>
                <p className="font-bold mb-4 mt-4">3 – quando o contribuinte for falecido:</p>
                <p className=" mb-4 mt-4">A) Certidão de Óbito,cópias do RG, CPF ou CNH, comprovante de residência atualizado; <br/>
                B) Documentação do requerente: RG, CPF, certidão de casamento, Termo de Compromisso
                de Inventariante ou documentos dos herdeiros.</p>
                <p className=" mb-4 mt-4"><strong>4 – Do imóvel–</strong> Documento que comprove a propriedade, número do sequencial ou
                inscrição municipal. Observações:</p>
                <p className=" mb-4 mt-4">A) As cópias dos documentos exigidas devem estar legíveis; <br/>
                B) Não serão admitidas emendas, rasuras ou borrões nos documentos apresentados;<br/>C) A procuração deverá ter firma reconhecida em cartório.</p>
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4 mt-4">De 10 a 30 minutos para cada contribuinte.</p>
                <p className="mb-4 mt-4">Link do Serviço:
                https://www.tinus.com.br/csp/JABOATAO/portal/index.csp</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                Presencial
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
          <h2 className=" mt-4">Relação de setores públicos onde este serviço é oferecido.</h2>
          <h2 className=" mt-4">Telefone:</h2>
          <h2 className=" mt-4">81 9939-0715<br/>
81 9204-6963<br/>
81 9206-7366</h2>
          <h2 className="font-bold text-[#144aa7] mt-4">ENDEREÇO:</h2>
            <p className="mt-4 mb-4">
            Endereço: Av. Gen. Barreto de Menezes, 1648 – Prazeres, Jaboatão dos Guararapes – PE, 54315-000, Brasil.
            </p>
            <p className="mt-4 mb-4">
            Telefone: 81 9939-0715 (via chamada telefonica)
            </p>
            <p className="mt-4 mb-4">
            81 9204-6963 / 81 9206-7366 (via whatsapp)
            </p>
            <p className=" mt-4 mb-4">
            E-mail:<a href="mailto:seuatendimento.pfm.jaboatao@gmail.com" className="hover:underline text-gray-500"> seuatendimento.pfm.jaboatao@gmail.com</a>
            </p>
            <p className="mt-4 mb-4">
            Horário de atendimento: Segunda a sexta de 08h às 14h
            </p>
            <p className=" font-bold mt-4 mb-4">
            Onde encontrar (google maps):
            </p>
            <p className=" mt-4 mb-4">
            <a href="https://goo.gl/maps/zHgjdZZp1N5fCjJB7" className="hover:underline hover:text-blue-500 text-gray-500">https://goo.gl/maps/zHgjdZZp1N5fCjJB7</a>
            </p>
          </>
        }
        duvidas={
          <>
            <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="md:pr-8">
                  <h2 className="font-bold text-blue-800 text-lg mb-4 text-left">
                    CANAIS DE ATENDIMENTO:
                  </h2>
                  <p className="mb-3 text-justify">
                    Disponibilizamos alguns mecanismos para realização de
                    manifestações:
                  </p>
                  <h2 className="font-bold text-blue-800 text-lg mb-2">
                    VIA INTERNET:
                  </h2>
                  <p className="mb-3 text-justify">
                    Caso não encontre o que procura, faça uma manifestação por
                    meio do Sistema da Ouvidoria Eletrônica, acessando o
                    endereço eletrônico disponível abaixo.
                  </p>
                  <a
                    className="mt-2 w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                    href="https://ouvidoria.jaboatao.pe.gov.br/"
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                  >
                    ATENDIMENTO ONLINE
                  </a>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    PRESENCIALMENTE:
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

                  <h2 className=" font-bold text-blue-800 text-lg mt-6 mb-2">
                    E-MAIL:
                  </h2>
                  <p className="text-justify">
                    É disponibilizado ao cidadão um canal de comunicação de
                    correio eletrônico também:
                  </p>
                  <p className="mt-3 ">
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
                  <p className="mt-3">0800.081.8899</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    WHATSAPP
                  </h2>
                  <p>
                    É disponibilizado ao cidadão um canal de comunicação de
                    aplicativo para mensagens instantâneas:
                  </p>
                  <p className="font-semibold mt-3">99422.5177</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    GESTOR DA OUVIDORIA
                  </h2>
                  <p>
                    <strong>Lorena Ventura</strong>
                  </p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    HORÁRIO DE ATENDIMENTO
                  </h2>
                  <p>Segunda a sexta-feira, das 08:00h às 14:00h.</p>
                </div>
              </div>
            </div>
          </>
        }
      />

      
    </div>
  );
};

export default Fiscalizacao;
