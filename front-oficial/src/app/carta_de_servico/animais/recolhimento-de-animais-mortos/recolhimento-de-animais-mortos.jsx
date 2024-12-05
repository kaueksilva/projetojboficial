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
                <h2 className="font-bold text-blue-800 mt-4 mb-4">DESCRIÇÃO</h2>
                  <p>
                  A Secretaria Executiva de Serviços Urbanos é responsável pelo recolhimento de animais mortos em vias públicas. Para solicitar a remoção o munícipio poderá entrar em contato com a Gerência de Limpeza Urbana através do tele atendimento pelos números 81- 3134-9258 ou 81-3462-8776, de segunda-feira a sexta-feira, no horário de 8h às 12h e 13h às 17h. Ou ainda, se dirigindo presencialmente a qualquer uma das Regionais de Serviço.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4 mt-4">
                Informar dados pessoais (nome completo, telefone, endereço).<br/>
                Endereço da ocorrência.
                </p>

              </div>

              <div className="pl-10 w-full">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4 mb-4">ENDEREÇO:</h2>
                <h2 className="font-bold text-blue-800 mt-4 mb-4">REGIONAL 1 – JABOATÃO CENTRO</h2>
                  <p>
                  E-mail Institucional: regional1@jaboatao.pe.gov.br / regional01pjg@gmail.com <br/>
                  Rua Barão de Lucena, S/N – Centro – Jaboatão dos Guararapes-PE – CEP:54110-000<br/>
                  Fone: (81)3482-8236 / 99226-0329
                  </p>

                  <h2 className="font-bold text-blue-800 mt-4 mb-4">REGIONAL 2 – CAVALEIRO</h2>
                  <p>
                  E-mail Institucional: regional2@jaboatao.pe.gov.br / regional02pjg@gmail.com<br/>
                  Rua Severino Monteiro, S/N – Cavaleiro – Jaboatão dos Guararapes-PE – CEP:54250-538<br/>
                  Fone: (81)3455-8498/ 99529-9658
                  </p>

                  <h2 className="font-bold text-blue-800 mt-4 mb-4">REGIONAL 3 – CURADO</h2>
                  <p>
                  E-mail Institucional: regional3@jaboatao.pe.gov.br/ regional3pjg@gmail.com<br/>
                  Rua Leonardo da Vinci, 28 – Curado – Jaboatão dos Guararapes-PE – CEP:54220-000<br/>
                  Fone: (81) 3255-2412/ 99401-3707
                  </p>

                  <h2 className="font-bold text-blue-800 mt-4 mb-4">REGIONAL 4 – MURIBECA</h2>
                  <p>
                  E-mail Institucional: regional4@jaboatao.pe.gov.br / regional4pjg@gmail.com<br/>
                  Eixo da Integração da Muribeca, 3033 – Muribeca – Jaboatão dos Guararapes-PE – CEP:54350-000<br/>
                  Fone: (81) 3377-5517/ 99939-5969
                  </p>

              </div>

              <div className="pl-10 w-full">
              <h2 className="font-bold text-blue-800 mt-4 mb-4">REGIONAL 5 – PRAZERES</h2>
                  <p>
                    E-mail Institucional: regional5@jaboatao.pe.gov.br / regional5@jaboatao.pe.gov.br<br/>
                    Mercado das Mangueiras – Rua Dr. Luiz Regueira, 85 – 1º andar – Prazeres – Jaboatão dos Guararapes – PE – CEP: 54335-160<br/>
                    Fone: (81) 3476-2946/ 99388-9786
                    </p>

                <h2 className="font-bold text-blue-800 mt-4 mb-4">REGIONAL 6 – PRAIAS</h2>
                  <p>
                  E-mail Institucional: regional6@jaboatao.pe.gov.br / regional6pjg@gmail.com<br/>
                  Av. Pres. Kennedy, 578 – Piedade – Jaboatão dos Guararapes-PE – CEP:54430-030<br/>
                  Fone: (81) 3469-4280/ 99975-4230
                  </p>

                <h2 className="font-bold text-blue-800 mt-4 mb-4">REGIONAL 7 – GUARARAPES</h2>
                  <p>
                  E-mail Institucional: regional7@jaboatao.pe.gov.br / regional7pjg@gmail.com<br/>
                  Mercado das Mangueiras – Rua Dr. Luiz Regueira, 85 – 1º Andar – Prazeres – Jaboatão dos Guararapes – PE – CEP: 54335-160<br/>
                  Fone: (81) 3476-4174/ 99128-4762
                  </p>
              </div>
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

export default Pet;
