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
                  <li>Inscrição imobiliária para fins de tributação</li>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4">
                  Cadastramento territorial e/ou predial urbano Para abertura do
                  processo de cadastro de imóvel solicitamos anexar as seguintes
                  documentaçõe.
                  <br />
                  – Documento que comprove a propriedade do imóvel (contrato de
                  compra e venda, RGI,escritura);
                  <br />
                  – RG e CPF com a data de nascimento expressa;
                  <br />
                  – Comprovante de residência (celpe ou compesa);
                  <br />
                  – Foto da fachada;
                  <br />
                  – Planta de locação e coberta e planta arquitetônica com
                  assinatura do responsável técnico com art ou rrt;
                  <br />– Foto do google maps da localização.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">
                  REVISÃO CADASTRAL:
                </h2>
                <p className="mb-4">
                  Para abertura do processo de revisão cadastral solicitamos
                  anexar as seguintes documentações:
                  <br />
                  – Documento que comprove a propriedade do imóvel (contrato de
                  compra e venda, RGI, escritura);
                  <br />
                  – Sequencial ou n° da inscrição imobiliária do imóvel;
                  <br />
                  – RG e CPF com a data de nascimento expressa;
                  <br />
                  – Comprovante de residência (celpe ou compesa);
                  <br />
                  – Foto da fachada;
                  <br />
                  – Planta de locação e coberta e planta arquitetônica com
                  assinatura do responsável técnico com art ou rrt;
                  <br />– Foto do google maps da localização.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">
                  CERTIDÃO NARRATIVA
                </h2>
                <p className="mb-4">
                  Para abertura do processo de certidão narrativa solicitamos
                  anexar as seguintes documentações:
                  <br />
                  – Documento que comprove a propriedade do imóvel (contrato de
                  compra e venda, RGI, escritura);
                  <br />
                  – Sequencial ou n° da inscrição imobiliária do imóvel;
                  <br />
                  – RG e CPF com a data de nascimento expressa;
                  <br />– Comprovante de residência (celpe ou compesa)
                </p>
                <h2 className="font-bold text-blue-800 mt-4">
                  ETAPAS DO SERVIÇO:
                </h2>
                <p className="mb-4">
                  Visita técnica, análise de processos, atualização de planta
                  quadra, georreferenciamento, digitação, tributação, emissão de
                  certidão.
                  <br />
                  <br />
                  OBS: Para solicitação de revisão cadastral e certidão
                  narrativa de endereço faz-se necessário informar sequencial ou
                  n° da inscrição imobiliária do imóvel.
                  <br />– Comprovante de residência (celpe ou compesa)
                </p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4">
                  Tempo médio de atendimento: 08 dias úteis
                </p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadãos</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                  E-Mail: cadastroimobiliario@jaboatao.pe.gov.br /{" "}
                  <a
                    href="mailto:nlcpjg@gmail.com"
                    className="text-blue-800 hover:underline"
                  >
                    nlcpjg@gmail.com
                  </a>
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
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
