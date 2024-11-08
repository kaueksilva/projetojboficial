"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Fiscalizacao = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <ul className="list-disc pl-5 mb-4">
                  <p>
                    Abertura e análise de processos de terrenos, obras e
                    reformas, alvará de localização e funcionamento,
                    autorizações eventuais, alvará de publicidade, alvará de
                    serviços especiais, certidões/consultas e cópias de plantas.
                  </p>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4">
                  A documentação para abertura de processos de licenciamento
                  urbanístico é solicitada de acordo com a especificidade de
                  cada processo, podendo ser verificada no ato da abertura do
                  mesmo através do Portal de Licenciamento Integrado
                  <a href="https://cidadao-jaboatao.sissofia.com.br/login" className="text-blue-800 hover:underline"> (https://cidadao-jaboatao.sissofia.com.br/login.) </a>
                   Salientamos
                  que mediante a análise dos processos, documentos
                  complementares podem ser solicitados.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">
                  Principais Etapas:
                </h2>
                <p className="mb-4">
                  – Abertura do Processo <br />
                  – Pagamento da Taxa de Licenciamento
                  <br />
                  – Urbanístico
                  <br />
                  – Análise de Documentos
                  <br />
                  – Solicitação de Documentos Complementares ou Correção dos
                  Documentos Entregues (Se necessário)
                  <br />
                  – Emissão do Alvará
                  <br />– Deferimento/ Indeferimento do Processo.
                </p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão e empresas</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Online:</p>

                <a
                  className="mt-2 w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                  href="https://cidadao-jaboatao.sissofia.com.br/login"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  SITES
                </a> <br/> <br/>
                <a
                  className="mt-2 w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe_T437VLuFM9fpI6jlk1XZkmlFR0_juqrpF1DLlB_juuUIRA/viewform"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  FORMULARIO DE SOLICITAÇÃO
                </a>


                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">
                  As taxas são baseadas conforme previsto no Anexo IV da Lei
                  1.246/15,sendo atualizada anualmente com base no art. 185
                  desta Lei.
                </p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <p>
              Atendimento presencial para consultas e dúvidas do processo –
              terças e quintas por agendamento. <br />
              Horário de atendimento: 08h às 14h
              <br />
              Telefone:(81) 9 99975 – 2403
              <br />
              Endereço: Av. Estrada da Batalha, 1200, Galpão N – Jardim Jordão,
              Jaboatão dos Guararapes – PE <br />
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
                    PRESENCIALMENTE
                  </h2>
                  <p className="text-justify">
                    É disponibilizado ao cidadão um canal de comunicação de
                    forma física também. A Ouvidoria da Prefeitura Municipal de
                    Jaboatão dos Guararapes está disponível a todos os cidadãos
                    no seguinte endereço:
                  </p>
                  <p className="mt-1 ml-4">
                    Avenida Barreto de Menezes, 1648 – Prazeres
                  </p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    E-MAIL
                  </h2>
                  <p className="text-justify">
                    É disponibilizado ao cidadão um canal de comunicação de
                    correio eletrônico também:
                  </p>
                  <p className="mt-1 ml-4">
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
                  <p className="ml-4">0800.081.8899</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    WHATSAPP
                  </h2>
                  <p>
                    É disponibilizado ao cidadão um canal de comunicação de
                    aplicativo para mensagens instantâneas:
                  </p>
                  <p className="font-semibold ml-4">99422.5177</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    GESTOR DA OUVIDORIA
                  </h2>
                  <p>
                    Nome do Gestor: <strong>Lorena Ventura</strong>
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

export default Fiscalizacao;
