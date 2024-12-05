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
                O Serviço de Acolhimento em Família Acolhedora visa ofertar acolhimento para crianças vítimas de violações de direitos, tais como abandono, abuso e exploração sexual, maus tratos, negligência, de modo que a proteção integral em uma Família Acolhedora garanta a atenção individualizada e afetiva necessária para a superação da situação vivida com menor grau de sofrimento e perda. Para tanto organiza o acolhimento de crianças e adolescentes, afastados da família por medida de proteção, em residência de famílias acolhedoras cadastradas, sendo responsável por selecionar, capacitar, cadastrar e acompanhar as famílias acolhedoras, bem como realizar o acompanhamento da criança e/ou adolescente acolhido e sua família de origem, de modo que o acompanhamento às famílias de origem ocorre com vistas à reintegração familiar.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS:</h2>
                <p>São requisitos para que as famílias participem do serviço: ser residentes no Município, sendo vedada a mudança de domicílio; ao menos um de seus membros seja maior de 25 (vinte e cinco) anos, sem restrição de gênero ou estado civil; apresentarem idoneidade moral, boas condições de saúde física e mental e estejam interessadas em ter sob sua responsabilidade crianças e adolescentes, zelando pelo seu bem estar; não apresentarem problemas psiquiátricos ou de dependência de substâncias psicoativas; possuírem disponibilidade para participar do processo de habilitação e das atividades do serviço; não manifestarem interesse por adoção da criança e do adolescente participante do serviço; e estarem os membros da família em comum acordo com o acolhimento. Além dos requisitos anteriores é preciso apresentar os seguintes documentos: Documento de Identificação com foto, de todos os membros da família; Certidão de Nascimento ou Casamento, de todos os membros da família; Título de Eleitor; Comprovante de Residência; Certidão Negativa de Antecedentes Criminais de todos os membros da família, que sejam maiores de idade; Comprovante de atividade remunerada, de pelo menos um membro da família; Cartão do INSS (no caso de beneficiários da Previdência Social); e Atestado médico comprovando saúde física e mental dos responsáveis.</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS:
                </h2>
                <p>Inscrição das famílias; Análise do perfil familiar pela equipe do serviço; Ao ser identificada criança ou adolescente em determinação de medida protetiva com perfil compatível com a família inscrita a equipe do serviço realizará o acolhimento; A família passará a executar o acolhimento e assim receberá acompanhamento sistemático da equipe do serviço até que haja reintegração da criança ou adolescente à família de origem ou encaminhamento para família substituta.</p>
              </div>

              <div className="pl-10 w-full">
                
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p>Enquanto for necessário.

</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p>Presencial</p>
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
                <p>Horário de atendimento: 24hrs diárias nos sete dias da semana.</p><br />
                <p>Endereço: Secretaria Executiva de Assistência Social <br />(Rua Barão de Amaraji, 600 – Piedade Jaboatão
dos Guararapes/PE. CEP: 54400-180).<br />

Telefone: (81) 99506-8359</p>
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
