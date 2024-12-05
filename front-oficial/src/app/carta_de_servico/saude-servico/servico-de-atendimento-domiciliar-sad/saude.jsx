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
                Serviço de Atendimento Domiciliar (SAD) – É uma forma de atenção à saúde, oferecida na moradia do paciente e caracterizado por um conjunto de ações de promoção à saúde, prevenção e tratamento de doenças e reabilitação, com garantia da continuidade do cuidado e integrada à Rede de Atenção à Saúde. Este tipo de cuidado é de acordo com a necessidade do paciente, e realizado por diferentes equipes. Quando o paciente precisa ser visitado com menos frequência, por exemplo, uma vez por mês, e já está mais estável, este cuidado pode ser realizado pela equipe de Saúde da Família/Atenção Básica de sua referência. Já os casos de maior complexidade são acompanhados pelas equipes multiprofissionais de atenção domiciliar (EMAD) e de apoio (EMAP), dos Serviços de Atenção Domiciliar (SAD) – Melhor em Casa.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4 mt-4">
                Documentos necessários:
                </p>
                <li>RG</li>
                <li>Cartão do SUS</li>
                <li>Comprovante de residência;</li>

                <h2 className="font-bold text-blue-800 mt-4 mb-4">
                  PRINCIPAIS ETAPAS
                </h2>
                <p>
                É geralmente feito no hospital em que o usuário estiver internado ou ainda por solicitação da equipe de Saúde da Família/Atenção Básica ou Policlínica. Caso você precise deste serviço ou saiba de alguém que precise, faça contato com a Unidade mais próxima da sua casa ou com a Secretaria de Saúde.
                </p>
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
              Jaboatão dos Guararapes – PE.
            </p>

            <a
              className="roboto-medium inline-block bg-[#004376] text-white py-2 px-6 my-4 rounded-2xl text-center text-sm md:text-base hover:bg-[#00AEF9] transition-colors"

              href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/CARTILHA-DE-SERVICOS.pdf"

              target="_blank"
              rel="noopener noreferrer"
            >
              ENDEREÇO DE TODAS AS UNIDADES BÁSICAS <br /> DE SAÚDE
            </a>


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
