"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Funeral = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2><br/>
                  <p>
                  A NECRÓPOLE tem o compromisso de prestação de serviços funerários aos municípios: sepultamentos, manutenção de covas, jazigos, os usuários e de um atendimento humanizado a todo cidadão Jaboatonense. Prezamos pelo cuidado e transparência em todo o processo necessário.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4">
                
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS</h2><br/>
                <p className="mb-4">
                
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2><br/>
                <p className="mb-4">
                  Para dar entrada em uma solicitação de sepultamento leva em média de 1h a 2h.
                </p>
                
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
                <p className="mb-4">Presencial</p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">
                <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2024/01/Nova-tabela-2024.pdf">Taxas utilizadas pelos Cemitérios Municipais de Jaboatão dos Guararapes 2024 (clique aqui para mais detalhes)</a>
                </p>
              </div>
            </div>
          </>
        }
        setorPublico={

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                  <p>
                  Relação de setores públicos onde este serviço é oferecido. <br /> <br />
                  Telefone: (81) 3462-8046 ou (81) 3462-8776 <br /> <br />
                  E-mail: <br /> 
                  Cemitério Parque da Paz:  cemiterioparquedapaz@gmail.com <br />  <br /> 
                  Cemitério da Saudade: <a href="cemiteriodasaudade22@gmail.com">cemiteriodasaudade22@gmail.com.</a>
                  </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">Onde encontrar (google maps):</h2>
                  
                    <br />

                    <a
                      className=" w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                      href="https://www.google.com.br/maps/place/Cemit%C3%A9rio/@-8.1530666,-34.951896,17z/data=!3m1!4b1!4m5!3m4!1s0x7aae1f80ad2fd45:0x391ab9db1d58b367!8m2!3d-8.1530693!4d-34.9497083?shorturl=1"
                      target="_blank" // Abre o link em uma nova aba
                      rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                    >
                      CEMITÉRIO DA PAZ
                    </a>

                    <br />
                    <br />


                    <a
                      className=" w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                      href="https://www.google.com.br/maps/place/Cemit%C3%A9rio/@-8.1530666,-34.951896,17z/data=!3m1!4b1!4m5!3m4!1s0x7aae1f80ad2fd45:0x391ab9db1d58b367!8m2!3d-8.1530693!4d-34.9497083?shorturl=1"
                      target="_blank" // Abre o link em uma nova aba
                      rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                    >
                      CEMITÉRIO DA SAUDADE
                    </a>

                    <br />
                    <br />

                    <a
                      className=" w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                      href="https://www.google.com.br/maps/place/Cemit%C3%A9rio/@-8.1530666,-34.951896,17z/data=!3m1!4b1!4m5!3m4!1s0x7aae1f80ad2fd45:0x391ab9db1d58b367!8m2!3d-8.1530693!4d-34.9497083?shorturl=1"
                      target="_blank" // Abre o link em uma nova aba
                      rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                    >
                      CEMITÉRIO MURIBECA DOS GUARARAPES
                    </a>
              </div>
            </div>
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

export default Funeral;
