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
                Cadastro Único para Programas Sociais é o cadastro que as famílias de baixa renda podem fazer para ter acesso a programas sociais, como: o Bolsa Família, o desconto na conta de luz, a carteira do idoso, o BPC (LOAS) e muitos outros que podem ajudar as famílias. Seu público alvo são as famílias que vivem com renda mensal de até meio salário-mínimo por pessoa. O cadastro não é individual, mas sim da família. A pessoa da família que for ao posto de cadastramento, vai informar os dados e levar os documentos de todas as pessoas que moram com ela. Não é preciso que as pessoas da família sejam parentes “de sangue”, basta que elas morem na mesma casa e dividam renda e despesas.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS:</h2>
                <p>O Responsável Familiar, vai declarar as informações de todas as pessoas da família, por isso precisa levar um documento com foto como, por exemplo, sua carteira de identidade ou sua carteira de trabalho. Além disso, precisa levar o seu CPF e um comprovante de residência. Se não possuir comprovante de residência, deve preencher uma declaração no posto de cadastramento em que for realizar seu atendimento, informando onde mora. Além dos documentos do Responsável Familiar, é necessário levar pelo menos um documento de cada pessoa da sua família: CPF, certidão de nascimento ou casamento, carteira de identidade, carteira de trabalho ou título de eleitor. De todos esses documentos, o CPF é o mais importante.
                O cadastro é gratuito!</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS:
                </h2>
                <p>O agendamento para a sede do Cadastro Único é realizado por agendamento no site <a href="https://jaboatao.pe.gov.br/cadunico/" target="_blank" rel="noopener noreferrer">https://jaboatao.pe.gov.br/cadunico/</a> . Reforçamos que o agendamento é mensal e abre sempre no dia 01 de cada mês para realizar os agendamentos.</p>
              </div>

              <div className="pl-10 w-full">
                
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p></p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p></p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS:</h2>
                <p>Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <div>
            <h2 className="font-bold text-blue-800 mt-4">ENDEREÇO:</h2>
                <p>Horário de atendimento: das 7h às 16h</p><br />
                <p>SEDE CADASTRO ÚNICO – agendamento site: https://jaboatao.pe.gov.br/cadunico/ <br /> Av. Alm. José Dias Fernandes, 271a – Prazeres.<br /><br />

CRAS Barra de Jangada – agendamento no local:<br />
Rua Bacharel José Mário De Oliveira, N° 388 – Barra de Jangada.<br /><br />

CRAS Praias – agendamento no local:<br />
Rua Comendador De Sá Barreto, 10 – Piedade.<br /><br />

CRAS Muribeca – agendamento no local:<br />
Av. Eixo da Integração, 3032, Muribeca.<br /><br />

CRAS Cavaleiro – agendamento no local:<br />
Av. Governador Agamenon Magalhães, 270 – Cavaleiro.<br /><br />

CRAS Centro – agendamento no local:<br />
Rua Santo Amaro, 36 – Centro.<br /><br />

CRAS Vila Rica/Socorro – agendamento no local:<br />
Rua General Manoel Rabelo, 43 – Engenho Velho.<br /><br />

CRAS Zumbi do Pacheco – agendamento no local:<br />
Rua do Agogó, II Carneiros Baixo – Estação da Cidadania.<br /><br />

CRAS Curado – agendamento no local:<br />
Rua 2, S/n – Curado IV – Curado.<br />
E-mail: gerenciadebeneficios.jg@gmail.com</p>
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
