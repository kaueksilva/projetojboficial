"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Mulher = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2><br/>
                  <p>
                  Centro de Referência a Mulher Maristela Just é um espaço destinado a prestar acolhimento e atendimento humanizado às mulheres em situação de violência, proporcionando atendimento psicológico , social, orientação e encaminhamentos jurídicos necessários à superação da situação de violência, contribuindo para o fortalecimento da mulher. <br />
                  Trata-se, portanto, de um espaço estratégico da política de enfrentamento à violência contra as mulheres que desenvolve seu trabalho por meio de uma atuação articulada com instituições governamentais e não governamentais que integram a Rede de Atendimento às Mulheres.
                  </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4">
                Acolhimento, acompanhamento da Mulher em vulnerabilidade de violência doméstica e familiar. As mulheres que procurarem o serviço deverão estar de posse da sua documentação pessoal (RG, CPF e comprovante de residência).
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS:</h2><br/>
                <p className="mb-4">
                O Centro atende demandas encaminhadas pelos serviços municipais, privados e demanda espontânea, onde as mesmas serão ouvidas de imediato por um técnico do serviço e devidamente orientada. <br />
                Após a primeira escuta, se assim for o seu desejo da vítima, ocorrerá os encaminhamentos necessários (delegacia, abrigamento, medida protetiva) para início do processo. <br />
                Além disso, o Centro promove diariamente Rodas de diálogos e Abordagem dirigida nas unidades Governamentais e não governamentais, levando a comunidade o entendimento da Lei Maria da Penha e divulgando o trabalho do Centro de Referência Maristela Just.
                </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4"></p>
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
          <h2 className="font-bold text-blue-800 mt-4 mb-4">CENTRO DE REFERÊNCIA A MULHER MARISTELA JUST</h2>
            <p>
            Rua Almirante Antonio de Farias, n° 664 – Piedade <br />
            Ponto de referência: Por trás do GOT <br />
            Horário de atendimento: segunda a sexta feira de 08h às 17h <br />
            Telefones: (81) 3468-2485 e (81)99464-6253 ( ligação e whatsapp ) <br />
            e-mail <a href="mailto:crm.maristelajust@gmail">crm.maristelajust@gmail.com</a>
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

export default Mulher;
