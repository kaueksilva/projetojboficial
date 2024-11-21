"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";


const Fiscalizacao = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <ul className="list-disc list-inside" >
                  <li className="mb-4">1. Sessão de mediação sobre Divórcio, Alimentos, Regulamentação de Visita, Dissolução de União Estável, Exoneração de Pensão Alimentícia, Revisão de Alimentos, Conversão de Separação Judicial em divórcio, Danos e Cobrança na área cível.</li>
                  <li className="mb-4">2. Triagem, marcação de sessão de mediação, sessão de mediação, assinatura e encaminhamento do Termo de Sessão de Mediação para homologação do Juiz de Direito no qual a Câmara é vinculada, que homologa por sentença o Termo de Sessão de Mediação.</li>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className=" mb-4 mt-4">– Cópia do RG e CPF dos envolvidos<br/>
– Cópia de Comprovante de Residência<br/>
– Cópia de Comprovante de Renda ou Declaração de Hipossuficiência<br/>
– Cópia da Certidão de Nascimento dos filhos ( mesmo que maiores) ou cópia do RG.<br/>
– Cópia da Certidão do Imóvel, devidamente registrado junto ao Cartório de imóveis e documentos dos bens móveis.</p>
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                <p className="mb-4 mt-4">Triagem/ distribuição e marcação de audiência/sessão de mediação ( se for positiva ira ser encaminhada para o Forum e, se não conseguir obter êxito será arquivada).</p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4 mt-4">A realização de audiências acontecem por agendamento, no prazo estimado de 30 dias.</p>
                
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                Presencial ou Online
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
          <h2 className="font-bold text-[#144aa7] mt-4">TELEFONE:</h2>
          <h2 className=" mt-4">(81) 3476-3478 e (81) 9975-6420</h2>
          <h2 className="font-bold text-[#144aa7] mt-4">E-MAIL:</h2>
            <p className="mt-4 mb-4 text-gray-500 hover:underline">
            <a className="mailto:cpcm.jaboatao@gmail.com" >cpcm.jaboatao@gmail.com</a>
            </p>
            
            <p className="mt-4 mb-4  hover:underline">
            <a className="mailto:orientacaojuridicajg@hotmail.com" >orientacaojuridicajg@hotmail.com</a>
            </p>
            <h2 className="font-bold text-[#144aa7] mt-4">ENDEREÇO::</h2>
            <p className="mt-4 mb-4">
            Endereço: R. Arão Lins de Andrade, 866 – Prazeres, Jaboatão dos Guararapes – PE, 54310-335, Brasil.
            </p>
            <p className="mt-4 mb-4">
            Telefone: (81) 9975-6420
            </p>
            <p className=" mt-4 mb-4">
            E-mail:<a href="mailto:cpcm.jaboatao@gmail.com" className="hover:underline text-gray-500"> cpcm.jaboatao@gmail.com</a>
            </p>
            <p className=" mt-4 mb-4">
            Horário de atendimento: Segunda a Sexta feira de 8h às 14h – presencial
            </p>
            <p className=" font-bold mt-[50px] mb-4">
            Segunda a Sexta feira de 8h às 17h – virtual através do número (81) 9975-6420 ( Watshapp)
            </p>
            
          </>
        }
        duvidas={
          <>
            <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="md:pr-8">
                  <h2 className="font-bold text-blue-800 text-lg mb-4 text-left">
                    CANAIS DE ATENDIMENTO:
                  </h2>
                  <p className="mb-3 text-justify">
                    Disponibilizamos alguns mecanismos para realização de
                    manifestações:
                  </p>
                  <h2 className="font-bold text-blue-800 text-lg mb-2">
                    VIA INTERNET:
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
                    PRESENCIALMENTE:
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

                  <h2 className=" font-bold text-blue-800 text-lg mt-6 mb-2">
                    E-MAIL:
                  </h2>
                  <p className="text-justify">
                    É disponibilizado ao cidadão um canal de comunicação de
                    correio eletrônico também:
                  </p>
                  <p className="mt-3 ">
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
                  <p className="mt-3">0800.081.8899</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    WHATSAPP
                  </h2>
                  <p>
                    É disponibilizado ao cidadão um canal de comunicação de
                    aplicativo para mensagens instantâneas:
                  </p>
                  <p className="font-semibold mt-3">99422.5177</p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    GESTOR DA OUVIDORIA
                  </h2>
                  <p>
                    <strong>Lorena Ventura</strong>
                  </p>

                  <h2 className="font-bold text-blue-800 text-lg mt-6 mb-2">
                    HORÁRIO DE ATENDIMENTO
                  </h2>
                  <p>Segunda a sexta-feira, das 08:00h às 14:00h.</p>
                </div>
              </div>
            </div>
          </>
        }
      />

      
    </div>
  );
};

export default Fiscalizacao;
