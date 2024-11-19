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
                  Qualificação Profissional para a população do município do
                  Jaboatão dos Guararapes. O município do Jaboatão, por meio da
                  Coordenação de Qualificação Profissional da SETQE, já
                  desenvolve há bastante tempo inúmeras atividades relacionadas
                  à melhoria das aptidões técnicas de seus cidadãos. Entre suas
                  principais atribuições, podemos destacar:
                  <br/><br/>
                  </p>
                  <li>  Coordenar as ações de qualificação social e profissional,
                  contemplando o processo de seleção pública e contratação de
                  entidades, profissionais técnicos para execuções dos cursos,
                  supervisão institucional da execução; </li> 
                  <li>
                  Coordenar a execução dos
                  programas de qualificação social e profissional, integrando
                  suas ações aos demais programas componentes das políticas
                  públicas de emprego e renda; </li> 
                  <li> Ampliar a articulação permanente
                  com a iniciativa privada para Supervisionar as ações
                  relacionadas a estudos na área de emprego e outras pertinentes
                  ao mercado de trabalho, bem como apurar, sistematizar,
                  acompanhar e avaliar dados e informações geradas na execução
                  dos programas ou originárias de outras fontes disponíveis. 
                  </li>
                  <br/><br />
                  <p> 
                  A Prefeitura do Jaboatão dos Guararapes através da Secretaria
                  Executiva de Trabalho, Qualificação e Empreendedorismo (SETQE)
                  idealizou um projeto para oferecer a comunidade jaboatonense
                  um Centro Municipal de Qualificação Profissional (CMQP)
                  permanente, para formar, capacitar e qualificar a população do
                  município do Jaboatão dos Guararapes através de parcerias com
                  as instituições e a iniciativa privada. <br/><br/>
                  
                  A gestão municipal
                  oferece estrutura física equipada para os parceiros
                  capacitarem os beneficiários. Esse programa é realizado por
                  meio de diversas parcerias entre o município do Jaboatão e
                  instituições como a NEOBPO, o Sebrae, o Senac, entre outras, e
                  tem como objetivo melhorar as condições de empregabilidade dos
                  trabalhadores, por meio de formação e atualização para que os
                  profissionais envolvidos possam desenvolver habilidades e
                  competências mais adequadas ao desempenho de suas atividades.
                  Seu público-alvo são jovens de primeiro emprego,desempregados,
                  trabalhadores sem ocupação, intermediação de mão de obra
                  inscrita no Sine e portadores de necessidades especiais.
                </p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4">Documentos pessoais com foto e comprovação de residência no município.</p>

                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS
                </h2>
                <p className="mb-4">Sensibilização, mobilização, divulgação e inscrição dos beneficiários; Realização dos cursos de qualificação profissionalizante; Conclusão dos cursos e entrega dos certificados.</p>

                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA
                </h2>
                <p className="mb-4"> Presencial ou online.</p>

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
                Horário de atendimento: 08:00 às 16:00 <br/>
                Telefones: (81) 3482-1413 | 3343-6512 | 9.9975-6597
                </p>

                <h2 className="font-bold text-blue-800 mt-4">ENDERECO</h2>
                <p className="mb-4 mt-4">
                Rua Coronel Francisco Galvão, 769 – Piedade – Jaboatão dos Guararapes<br/><br/>

                Email: <a href="mailto:carolsetqe@outlook.com" className="underline hover:text-blue-800" target="_blank">carolsetqe@outlook.com</a> <br/><br/>
                Posto Jaboatão Centro: supervisorcvagas.jaboatao@gmail.com<br/><br/>

                Posto Cavaleiro: postocavaleiros@gmail.com<br/><br/>

                Posto Curado: curadopostospvimosd@gmail.com<br/><br/>

                Posto Piedade: supervisoragencia@hotmail.com<br/><br/>

                Posto Guararapes: postoguarapesimosd@gmail.com
                </p>

              </div>

              <div className="md:pl-8">
                  <h2 className="font-bold text-blue-800 text-lg mb-2">
                  Endereços:
                  </h2>
                  <p>
                  Posto Jaboatão Centro: Av. Barão de Lucena, 131 <br/><br/>

                  Posto Cavaleiro: Praça Severina Rita Coelho, nº 20<br/><br/>

                  Posto Curado: Rua Dois, SN – Curado IV, Jaboatão dos Guararapes/PE<br/><br/>

                  Posto Piedade: Av.Presidente Kennedy, nº 578<br/><br/>

                  Posto Guararapes: Av. Barreto de Menezes, Prazeres -Mercado Das Mangueiras, 1º Pavimento
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

export default Vigilancia;
