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
                <ul className="  mb-4">
                  <li>Forma de ingresso para os estudantes novatos que desejam estudar na Rede Pública de Ensino da Secretaria Municipal de Educação do Jaboatão dos Guararapes.</li>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mt-4">Não ser estudante da Rede Pública Municipal de Ensino do Jaboatão dos Guararapes. Para preenchimento do formulário on-line, é necessário os seguintes dados: <br/>
– Certidão de Nascimento do menor, para os dados pessoais do estudante;<br/>
–Comprovante de residência dos pais e/ou responsáveis ou do estudante, quando este for maior de idade;<br/>
– Saber o ano correto que o estudante irá cursar.</p>
        
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                <p className="mb-4">
                A Para realizar a reserva da matrícula on-line (1ª Etapa), os pais ou responsáveis devem acessar o link amplamente divulgado e preencher o formulário com os dados exigidos em tela. Em seguida, deve-se selecionar o ano que o estudante irá cursar, escolher o turno e a escola, lembrando de finalizar o cadastro. Após essa etapa, os pais ou responsáveis devem se atentar para o período de efetivação da
matrícula divulgado no Protocolo de reserva, comparecendo à escola reservada (2ª Etapa) com a documentação necessária:<br/>
– Cópia da Certidão de Nascimento do estudante (caso seja menor de idade) ou Carteira de Identidade;<br/>
– Cópia do RG e do CPF do Estudante (se possuir);<br/>
– Cópia do Cartão de Vacinação do Estudante;<br/>
– Histórico Escolar Original;<br/>
– Uma foto 3×4<br/>
– Cópia do Cartão do SUS e do Bolsa Família<br/>
– Cópia do Comprovante de Residência (últimos 60 dias)<br/>
– Cópia do RG e CPF da mãe, pai ou responsável.
                </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4">Entre novembro e janeiro.</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão </p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                Online
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
          <h2 className="font-bold text-blue-800 mt-4">SECRETARIA MUNICIPAL DE EDUCAÇÃO</h2>
            <p className="mt-4">
            Endereço: Av. Barreto de Menezes, 1648 – Prazeres
            </p>
            <p className="mt-4">
            Atendimento: Das 8h às 13h e das 14h às 17h
            </p>
            <p className="mt-4">
            Telefone: (81) 99975-3340 | (81) 99975-4249
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
