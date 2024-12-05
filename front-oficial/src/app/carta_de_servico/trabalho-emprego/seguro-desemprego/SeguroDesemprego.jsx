"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Vigilancia = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <br />
                <p className="mb-4">
                O Seguro Desemprego é um dos benefícios da Seguridade Social e tem a finalidade de garantir assistência financeira temporária ao trabalhador dispensado involuntariamente (sem justa causa). Nos postos de atendimento, o trabalhador pode dar entrada no processo para solicitação do benefício.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4">Documentos originais para requerer o seguro desemprego:</p>
                <p className="mt-4 mb-4">– Requerimento do Seguro-Desemprego (2 vias fornecidas pelo empregador nas situações de dispensa sem justa causa, devidamente preenchidas e assinadas);</p>
                <p className="mt-4 mb-4">– Documento de Identidade (RG ou Carteira de Trabalho, modelo passaporte, ou CNH, ou Reservista, ou Carteira de Identificação do Conselho de Classe, ou Passaporte, ou Protocolo do RG, acompanhado da Certidão de Nascimento ou Casamento);</p>
                <p className="mt-4 mb-4">– Comprovante PIS/PASEP ativo (Cartão ou Extrato Atualizado, ou Cartão do Cidadão);</p>
                <p className="mt-4 mb-4">– CPF;</p>
                <p className="mt-4 mb-4">– Carteira de Trabalho- CTPS (Todas que possuir. Será verificada a sua validade durante o atendimento, sendo que o documento ilegível, com rasuras, falta ou troca de foto, ou de páginas, contratos em aberto, divergência de dados, entre outras situações, necessitarão de regularização antes da recepção do requerimento);</p>
                <p className="mt-4 mb-4">– Termo de Rescisão do Contrato de Trabalho – TRCT, acompanhado do Termo de Quitação;</p>
                <p className="mt-4 mb-4">– Comprovante de Vínculo Empregatício (Extrato Comprobatório dos Depósitos do FGTS ou Comprovante de Saque do FGTS, ou Certidão das Comissões de Conciliação Prévia/Núcleos Intersindicais, ou Sentença/Certidão/Alvará Judicial, ou Relatório da Fiscalização);</p>
                <p className="mt-4 mb-4">– Comprovante de Salário dos três meses anteriores ao mês da dispensa(Anotação em Carteira de Trabalho, devidamente atualizada. Somente se necessário será solicitado o contracheque).</p>
              </div>
              <div className="pl-10 w-full">
                
                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS
                </h2>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA
                </h2>
                <p className="mb-4"> Presencial</p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
               
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">SECRETARIA DE TRABALHO, QUALIDADE E EMPREENDORISMO
                </h2>
                <p className="mb-4 mt-4">
                Horário de atendimento: 08h às 16h 
                </p>
                <h2 className="font-bold text-blue-800 mt-4">Telefones:</h2>
                <p className="mb-4 mt-4">– Agência do Trabalhador Jaboatão Centro: 81 3482-5487 / 3482-5494 / 3482-5384 – Central de vagas: 99975-2859</p>
                <p className="mb-4 mt-4">-Agência do Trabalhador Curado: 81 3255-1553</p>
                <p className="mb-4 mt-4">-Agência do Trabalhador Piedade: 81 3469-5476</p>
                <p className="mb-4 mt-4">Agência do Trabalhador Guararapes: 81 3378-1783</p>
                <h2 className="font-bold text-blue-800 mt-4">Endereço:</h2>
                <p className="mb-4 mt-4">-Agência do Trabalhador Jaboatão Centro: Av. Barão de Lucena,  s/n – Jaboatão Centro;</p>
                <p className="mb-4 mt-4">-Agência do Trabalhador Curado: Rua Dois, SN – Curado IV;</p>
                <p className="mb-4 mt-4">-Agência do Trabalhador Piedade:Av.Presidente Kennedy, nº 578   – Piedade;</p>
                <p className="mb-4 mt-4">-Agência do Trabalhador Guararapes: Av. Barreto de Menezes, Prazeres  – Mercado Das Mangueiras, 1º Pavimento</p>
              </div>

              <div className="md:pl-8">
                  <h2 className="font-bold text-blue-800 text-lg mb-2">
                  Email:
                  </h2>
                  <p className="mb-4 mt-4">
                  – Agência do Trabalhador Jaboatão
                  </p>
                  <p className="mb-4 mt-4">Centro: <a href="mailto:supervisorcvagas.jaboatao@gmail.com hover:underline text-gray-500 ">supervisorcvagas.jaboatao@gmail.com</a>
                 
                  </p>
                  <p className="mb-4 mt-4">Agência do Trabalhador Curado: <a href="mailto:curadopostospvimosd@gmail.com hover:underline text-gray-500 ">curadopostospvimosd@gmail.com</a>
                  </p>
                  <p className="mb-4 mt-4">– Agência do Trabalhador Piedade: <a href="mailto:supervisoragencia@hotmail.com hover:underline text-gray-500 "> supervisoragencia@hotmail.com</a>
                  </p>
                  <p className="mb-4 mt-4">– Agência do Trabalhador Guararapes:<a href="mailto:postoguarapesimosd@gmail.com hover:underline text-gray-500 "> postoguarapesimosd@gmail.com</a>
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

      
    </div>
  );
};

export default Vigilancia;
