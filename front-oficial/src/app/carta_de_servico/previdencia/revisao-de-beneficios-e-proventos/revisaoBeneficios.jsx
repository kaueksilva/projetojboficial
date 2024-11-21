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
                <ul  >
                  <li className="mb-4">Revisão de Benefícios e Proventos – O Instituto de Previdência dos
Servidores Públicos do Município do Jaboatão dos Guararapes – JABOATÃOPREV – é uma Autarquia criada através da Lei 108/2001, com atualizações dadas pelas Leis nºs 102//2006, 153/2007, 703/2011, 1.265/2016 e 1.334/2017, e tem a finalidade reconhecer o direito e viabilizar o acesso de todos os servidores públicos efetivos da Prefeitura Municipal de Jaboatão dos Guararapes e consequentemente, a seus
dependentes, à aposentadoria e pensão por morte.
Revisão de benefício  – pode acontecer quando, por exemplo, a aposentadoria se deu com enquadramento inadequado ou alguma vantagem não foi considerada no momento da concessão. Este será avaliado pelo setor de benefícios.
Revisão de proventos  – diz respeito ao questionamento relativo aos valores dos vencimentos ou das vantagens incorporadas no ato da aposentadoria. Este será avaliado pelo setor de folha de pagamento.</li>
                 
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className=" mb-4 mt-4">Cópia do RG / CPF;<br/>
Comprovante de Endereço;<br/>
Número do PIS/PASEP.<br/>   

Você pode acessar a Carta de Serviços completa do JaboatãoPrev
                </p>
                <a
                    className="mt-4 w-full md:w-auto bg-[#004376] text-white py-2 px-4 rounded-lg text-sm md:text-base hover:bg-[#00ACED] transition-colors justify-center flex text-center"
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/08/CARTA-DE-SERVICO-JABOATAOPREV-OUVIDORIA-2023.pdf"
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                  >
                    CLICANDO AQUI
                  </a>
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                <p className="mb-4 mt-4">A abertura de requerimento para revisão de benefícios ou
                proventos poderá ocorrer de segunda a sexta-feira, no horário das 08h às 13h30, por ordem de chegada, na sede do JaboatãoPrev. Pode o requerente se comunicar pessoalmente com o setor de benefício, nos horários de atendimento informados.
                </p>
               
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4">No prazo máximo de 20 dias, o requerente será comunicado do resultado de sua solicitação</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Servidor efetivo</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                Presencial 
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
         
          <h2 className="font-bold text-[#144aa7] mt-4">INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS DO MUNICÍPIO DO JABOATÃO DOS GUARARAPES</h2>
          <h2 className=" mt-4">Endereço: Rua Coronel Waldemar Basgal, 576 – Piedade</h2>
          <h2 className=" mt-4">Telefone: (81) 3462.4855, (81) 3462.4619 e (81) 99756-0292(whatsapp).</h2>
            <p className="mt-4 mb-4 ">E-mail:
            <a className="mailto:jaboataoprev@hotmail.com hover:underline" > jaboataoprev@hotmail.com</a> /
            <a className="mailto:beneficio@jaboatao.pe.gov.br hover:underline" > beneficio@jaboatao.pe.gov.br</a> 
            </p>
            <h2 className="mt-4 mb-4 text-[#144aa7] font-bold">
            Horário de atendimento:
            </h2>
            <p className="mt-4 mb-4">
            Segunda e Sexta das 08:00 às 13hr, por ordem de chegada.
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
