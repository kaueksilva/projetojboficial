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
                  <li className="mb-4">Emissão de Certidão de Tempo de Contribuição – O Instituto de Previdência dos Servidores Públicos do Município do Jaboatão dos Guararapes – JABOATÃOPREV – é uma Autarquia criada através da Lei 108/2001, com atualizações dadas pelas Leis nºs 102//2006, 153/2007, 703/2011, 1.265/2016 e 1.334/2017, e tem a finalidade reconhecer o direito e viabilizar o acesso de todos os servidores públicos efetivos da Prefeitura Municipal de Jaboatão dos Guararapes e consequentemente, a seus dependentes, à aposentadoria e pensão por morte.</li>
                 
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className=" mb-4 mt-4">Cópia do RG / CPF;<br/>
Comprovante de Endereço;<br/>
Número do PIS/PASEP.

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
                <p className="mb-4 mt-4">Os servidores que estejam desvinculados da Prefeitura Municipal do Jaboatão dos Guararapes e desejem utilizar o tempo trabalhado neste Ente Municipal, em outro Ente, poderão se dirigir ao JaboatãoPrev nos dias de atendimento, segunda e sexta-feira, no horário de 8h às 13h, munido da documentação abaixo relacionada, e abrir requerimento na recepção do Instituto, solicitando Certidão de Tempo de Contribuição. 
                No requerimento deverá ser informado o número da matrícula que o ex-servidor esteve vinculado à Prefeitura, e para qual Ente (municipal ou federal) deseja direcionar o tempo trabalhado. O Setor de Benefícios solicitará a pasta funcional do ex-servidor à Secretaria de Gestão de Pessoas, que por se tratar de servidor desligado da Prefeitura, irá solicitar ao Arquivo Central da Prefeitura a referida pasta. Com o recebimento da pasta funcional, será analisada toda documentação do ex-servidor, e preparada a Certidão de Tempo de Contribuição, que será assinada pelo Gerente de Benefícios. Em seguida será comunicado ao ex-servidor que a Certidão se encontra disponível.
                </p>
               
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4">O trâmite do processo termina num período de até três meses, a contar da entrada do requerimento.</p>
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
          <p className="mb-4 mt-4">Relação de setores públicos onde este serviço é oferecido.</p>
          <h2 className="font-bold text-[#144aa7] mt-4">INSTITUTO DE PREVIDÊNCIA DOS SERVIDORES PÚBLICOS DO MUNICÍPIO DO JABOATÃO DOS GUARARAPES</h2>
          <h2 className=" mt-4">Endereço: Rua Coronel Waldemar Basgal, 576 – Piedade</h2>
          <h2 className=" mt-4">Telefone:  (81) 3462.4855/(81) 3462.4619/(81)99756-0292</h2>
            <p className="mt-4 mb-4 ">E-mail:
            <a className="mailto:jaboataoprev@hotmail.com hover:underline" > jaboataoprev@hotmail.com</a> /
            <a className="mailto:beneficio@jaboatao.pe.gov.br hover:underline" > beneficio@jaboatao.pe.gov.br</a> 
            </p>
            <p className="mt-4 mb-4  hover:underline">
            Horário de atendimento:
            </p>
            <p className="mt-4 mb-4">
            de 8h às 13h.
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
