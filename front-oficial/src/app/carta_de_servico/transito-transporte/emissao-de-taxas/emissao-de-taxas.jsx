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
                  <p>
                  Informar e expedir taxas e multas de transporte  <br/>relativas as pendências administrativas dos  <br/>cadastros  dos modais.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
               

                  
                 
              
                
                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS</h2>
                <p>O permissionário ou o preposto deverá se dirigir <br/>à coordenação de cadastro e solicitar a emissão<br/> do boleto referente a taxa do serviço que deseja <br/>ou referente ao pagamento de multa de transporte existente.</p>
                
                <br/>
             </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                
          
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
                <p className="mb-4">Presencial</p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2><br/>
                <p className="mb-4">
                
                
                <a
                    className="roboto-medium w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-full text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/TAXAS.pdf"
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                    
                  >
                    
                    ACESSE OS VALORES DAS TAXAS

                    </a>

                </p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
          <h2 className="font-bold text-blue-800 mt-4 mb-4">SECRETARIA EXECUTIVA DE MOBILIDADE E <br/>ORDEM PÚBLICA – SEMOP</h2>
            <p>
            Central de Atendimento SEMOP –  (81) 99476-3655  <br/>

            <br/> Endereço:  R. Zelindo Marafante, 20 – Piedade <br/>

            <br/> Horário de atendimento:
            Segunda a Sexta, das 08h às 12h e das 13h às 17h <br/>
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
                    href="ouvidoria@jaboatao.pe.gov.br"
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
                    correio eletrônico também: <br/>
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
                  É disponibilizado ao cidadão um canal de comunicação de correio eletrônico também:
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
                  <p>Segunda a sexta-feira, das 08:00h às 14:00h.</p>
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
