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
                Serviço de Proteção em Situações de Calamidades Públicas e Emergenciais é um serviço que promove apoio e proteção à população atingida por situações de emergência e calamidade pública, com a oferta de alojamentos provisórios, atenções e provisões materiais, conforme as necessidades detectadas. O atendimento é direcionado para atingidos por situações de emergência e calamidade pública (incêndios, desabamentos, deslizamentos, alagamentos, dentre
                  outras) que tiveram perdas parciais ou totais de moradia, objetos ou utensílios pessoais, e se encontram temporária ou definitivamente desabrigados e pessoas removidas de áreas consideradas de risco, por prevenção ou determinação do Poder Judiciário.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p>Encaminhamento da Defesa Civil.</p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS
                </h2>
                <p>Assegurar acolhimento imediato em condições dignas e de segurança; Manutenção dos alojamentos provisórios, quando necessário; Identificação das perdas e danos ocorridos e cadastrar a população atingida;
Articulação com a rede de políticas públicas e redes sociais de apoio para prover as necessidades detectadas;
Promoção da inserção das famílias atingidas na rede socioassistencial e ao acesso a benefícios eventuais.</p>
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p>Enquanto for necessário.

</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p>Presencial</p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p>Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <div>
            <p>Horário de atendimento: De acordo com a demanda</p><br />
              <strong>
                <h1>
                ENDEREÇOS:
                </h1>
              </strong>
              <br />
              <p>Em todo território municipal.</p>
              <br />
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