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
                Economia Solidária. Fomento as ações dos empreendimentos econômicos solidários do município do Jaboatão dos Guararapes. Por meio da Gerência de Economia Solidária, o município de Jaboatão apoia a organização de empreendimentos econômicos solidários, ajudando-os a formatar e elaborar projetos com o objetivo de proporcionar oportunidades de comercialização de produtos e serviços de grupos solidários. Além disso, promove e fortalece o segmento, incentivando a constituição de cadeias produtivas, apoiando a organização, a legalização e o registro de empreendimentos; atua na difusão do artesanato local; promove a qualificação de artesãos; e apoia o cooperativismo popular. Exemplo disso são as Feiras Itinerantes de Economia Solidária realizadas no município que abrem oportunidades para artesãos comercializarem seus produtos, promovendo a geração de renda para os participantes, além de difundir a Economia Solidária para a população em geral, disseminando princípios de cooperação, democracia, finanças solidárias, comércio justo e consumo responsável. A Coordenação de Economia Solidária faz parte do organograma da Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo (SETQE) que, por sua vez, foi criada em janeiro de 2011 e está abrigada na Secretaria Municipal de Desenvolvimento Econômico e Sustentabilidade. Sob sua ação, Jaboatão criou o Conselho Municipal de Economia Popular Solidária (CMEPS) conforme a Lei 711/2011 promulgada no dia 21/12/2011, conforme Diário Oficial de n.º 241. Proporcionou também o surgimento do Fórum de Economia Popular Solidária do Jaboatão dos Guararapes (FEPS/JG), cujo lançamento ocorreu no dia 25 de novembro de 2011. Em março de 2014, realizou a 1ª Conferência Municipal de Economia Solidária e em outubro do mesmo ano inaugurou o Centro de Orientação Permanente à Economia Solidária (COPES).

Outras informações: Além das atividades mencionadas, Jaboatão conta com 3 lojas colaborativas em formato de container que são geridas pelos próprios empreendedores solidários e estão localizadas em Prazeres, Jaboatão, Centro e Cavaleiro.
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
