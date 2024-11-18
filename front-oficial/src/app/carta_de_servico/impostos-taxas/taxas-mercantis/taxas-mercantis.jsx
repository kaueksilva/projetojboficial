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
                  A taxa de poder de polícia é devida pela atividade municipal
                  de vigilância ou fiscalização do cumprimento da legislação a
                  que se submete qualquer pessoa que se localiza, instala ou
                  exerce atividade dentro do território do Município do Jaboatão
                  dos Guararapes.Especificamente, em relação às taxas cobradas
                  pela Secretaria Municipal de Planejamento e Fazenda, temos:
                  (a) TLF, taxa pela fiscalização, em função do funcionamento de
                  estabelecimentos sediados no Município; (b) TP, taxa de
                  fiscalização, em função do uso de meios de publicidade em
                  geral; e (c) TLM, taxa pela fiscalização, em função do uso de
                  máquinas, antenas de transmissão, motores e assemelhados.
                  Essas Taxas são cobradas em duas parcelas semestrais através
                  do documento de arrecadação municipal, popularmente conhecido
                  como CIM.
                  <br />
                  <br />
                  PRINCIPAIS SERVIÇOS: <br />
                  – Isenção
                  <br />
                  – Restituição
                  <br />
                  – Parcelamento
                  <br />
                  – Alteração/Cadastro Mercantil – Pessoa Jurídica
                  <br />
                  – Revisão/ Reclamação contra lançamento
                  <br />
                  – Certidão de Regularidade Fiscal
                  <br />
                  – Suspensão de atividade mercantil
                  <br />
                  – Reinício da atividade temporariamente suspensa
                  <br />
                  <br />
                  Link do Serviço:
                  <br />
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <br />
                <p className="mb-4">
                  Informações sobre prazos e documentos necessários na
                </p>
                <a
                  className="roboto-medium w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-full text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                  href="https://jaboatao.pe.gov.br/wp-content/uploads/2024/07/CARTA_DE_SERVICOS_SEREC_VERSAO_10_DE_09_07_2024-publicacao-nos-sites.pdf"
                  target="_blank" // Abre o link em uma nova aba
                  rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                >
                  CARTA DE SERVIÇOS COMPLETA
                </a>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4 mb-4">
                  PRINCIPAIS ETAPAS
                </h2>
                <p className="mb-4">
                  Visando facilitar a vida do cidadão, a Prefeitura
                  disponibiliza abertura de processo de forma on-line, evitando
                  que o munícipe tenha que se deslocar até as Unidades de
                  Atendimento ao Contribuinte. Ele poderá acessar diretamente
                  através do Portal do Contribuinte pelo site na tela principal
                  na área GERAL clicar na aba Processos - abrirá uma nova tela e
                  nessa clicar na caixa Abertura de Processos On-Line, ali
                  constarão os serviços oferecidos. O acompanhamento dos
                  processos abertos, poderão ser feitos através dos canais
                  (e-mail e WhatsApp) disponibilizados na Carta de Serviços.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4">
                  Tempo de Espera no Atendimento presencial: de 15 a 30 minutos.
                </p>
                <a
                  className="roboto-medium w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-full text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                  href="https://jaboatao.pe.gov.br/wp-content/uploads/2024/07/CARTA_DE_SERVICOS_SEREC_VERSAO_10_DE_09_07_2024-publicacao-nos-sites.pdf"
                  target="_blank" // Abre o link em uma nova aba
                  rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                >
                  CARTA DE SERVIÇOS COMPLETA
                </a>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Empresa</p>

                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">Telefone, site, e-mail e presencial</p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p>Informações sobre taxas na</p>
                <br />
                <a
                  className="roboto-medium w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-full text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                  href="https://jaboatao.pe.gov.br/wp-content/uploads/2024/07/CARTA_DE_SERVICOS_SEREC_VERSAO_10_DE_09_07_2024-publicacao-nos-sites.pdf"
                  target="_blank" // Abre o link em uma nova aba
                  rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                >
                  CARTA DE SERVIÇOS COMPLETA
                </a>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <div>
            <strong><h1>
                Caso prefira o atendimento presencial, este poderá ser feito nas
                Unidades de Atendimento ao Contribuinte:
              </h1></strong>
              <br />
              <section>
                <h2>Sede da Prefeitura</h2>
                <p>
                  Palácio da Batalha – Av. Barreto de Menezes, 1.648, Prazeres –
                  Jaboatão dos Guararapes – PE. CEP: 54.330-900.
                </p>
                <p>
                  É necessário fazer o agendamento prévio no site{" "}
                  <a
                    href="https://jaboatao.pe.gov.br/contribuinte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://jaboatao.pe.gov.br/contribuinte
                  </a>
                  . Na tela principal, na área GERAL, clicar na aba *Agendamento
                  de Atendimento*. Escolha a data e a hora que deseja ser
                  atendido.
                </p>
                <p>
                  O agendamento também pode ser feito através do e-mail{" "}
                  <a href="mailto:atendimento.sefaz@jaboatao.pe.gov.br">
                    atendimento.sefaz@jaboatao.pe.gov.br
                  </a>{" "}
                  ou pelo WhatsApp: (81) 99975-5532 (somente mensagens).
                </p>
              </section>
              <br />
              <section>
                <h2>Nas Regionais 01, 02 e 03 onde a Secretaria Municipal de Planejamento e Fazenda – SPF dispõem de servidores a disposição e o atendimento acontece por ordem de chegada e estão localizadas nos seguintes endereços:</h2>
                <br />
                <ul>
                  <li>
                    <strong>Regional 01 – Jaboatão Centro</strong>
                    <br />
                    Av. Barão de Lucena, s/n, Centro – CEP: 54.110-000
                  </li>
                  <br />
                  <li>
                    <strong>Regional 02 – Cavaleiro</strong>
                    <br />
                    Rua Severino Monteiro, 20, Cavaleiro – CEP: 54.250-538
                  </li>
                  <br />
                  <li>
                    <strong>Regional 03 – Curado</strong>
                    <br />
                    Rua 02, s/n – Curado IV, Anexo ao Bloco 19 – CEP: 54.270-010
                    (próximo à Policlínica Manoel Calheiros)
                  </li>
                </ul>
              </section>
              <br />
              <section>
                <h2>A qualquer momento o contribuinte poderá obter informações/esclarecimentos através Central de Atendimento ao Contribuinte através do WhatsApp: (81) 99975-1601 (somente mensagem).</h2>
              </section>
              <br />
              <section>
                <h2>Horário de Atendimento</h2>
                <p>
                  Atendimento online ou presencial: de segunda a sexta-feira,
                  das 08h às 14h.
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
