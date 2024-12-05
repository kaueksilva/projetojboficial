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
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <br />
                <p>
                Erradicação de árvores de pequeno porte.
                  <br />
                  <br />
                  Informações necessárias para acessar os serviços:<br />
Nome:<br />
Endereço:<br />
Data de Nascimento:<br />
Tipo de Ocorrência:<br />
                </p>

                <h2 className="font-bold text-blue-800 mt-4">
                  PERGUNTAS COMPLEMENTARES
                </h2>
                <p>
                  1 – Quantas pessoas residem no imóvel?
                  <br />
                  2 – Tem criança?
                  <br />
                  3 – Tem pessoa com deficiência?
                  <br />
                  4 – Tem idoso?
                  <br />
                  5 – Tem gestante?
                  <br />
                  6 – Houve danos no mobiliário da casa? Houve danos na
                  estrutura da casa?
                  <br />
                  7 – Houve feridos?
                  <br />
                  8 – Houve óbitos?
                  <br />
                  9 – Houve desaparecidos?
                  <br />
                  10 – Óbito de animais?
                  <br />
                  11 – Outras observações pertinentes:
                  <br />
                  <br />
                  No ato da visita o solicitante ou entrevistado deverá
                  apresentar os seguintes documentos:
                  <br />
                  <br />
                  RG/CPF Declaração/Comprovante de Residência Cartão NIS
                  <br />
                  <br />
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>

                <p className="mb-4">
                  O local da ocorrência precisa estar no perímetro do município.
                  Solicitante repassar todas as informações necessárias para a
                  abertura da ocorrência, principalmente o endereço.
                </p>
                <br />
                <br />
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4 mb-4">
                  PRINCIPAIS ETAPAS
                </h2>
                <p className="mb-4">
                  Registro de ocorrência, Geração de protocolo, Agendamento da
                  vistoria, Parecer de engenharia e parecer social,
                  Encaminhamento para demais setores e secretariais, quando
                  necessário.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4">
                até 48h


                </p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>

                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                  Registro de ocorrência via 0800 ou whatsapp; Atendimento
                  presencial nas regionais e nos postos avançados da Defesa
                  Civil (Monte Verde e Curado);
                </p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p>Não há cobranças de taxas</p>
                <br />
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <div>
              <section>
                <strong>
                  <h1>SECRETRIA DE DEFESA CIVIL</h1>
                </strong>
                <p>
                  Rua Cândido Ferreira, 686, Piedade
                  <br />
                  Telefones: 3461-3443/ 99195-6655 / 0800 281 2099
                  <br />
                  <br />
                  Email: defesacivil@jaboatao.pe.gov.br
                </p>
              </section>
              <br />
              <section>
                <strong>
                  <h1>BASE AVANÇADA DO CURADO</h1>
                </strong>
                <p>
                  Rua das Flores, 95, Curado II
                </p>
              </section><br /><br />
              <section>
                <strong>
                  <h1>BASE AVANÇADA DE MONTE VERDE
                  </h1>
                </strong>
                <p>
                Avenida Chapada do Araripe, S/N
                  <br />
                </p>
              </section>
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
