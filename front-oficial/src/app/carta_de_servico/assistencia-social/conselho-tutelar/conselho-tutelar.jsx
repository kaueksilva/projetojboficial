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
                Os Conselhos Tutelares de Jaboatão dos Guararapes são regidos pela Lei Municipal nº 1.546 /2023. São órgãos permanentes e autônomos, não jurisdicionais, encarregados pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente, no âmbito deste Município. Cada Região Político-administrativa do Município do Jaboatão dos Guararapes possui 1 (um) Conselho Tutelar com 05 (cinco) conselheiros tutelares. Qualquer cidadão pode acessar o Conselho Tutelar para denunciar qualquer tipo de
violência contra criança e adolescente. Não precisa de agendamento.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS:</h2>
                <p></p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS:
                </h2>
                <p></p>
              </div>

              <div className="pl-10 w-full">
                
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p></p>
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
                <p>Horário de atendimento:
De segunda-feira as sextas-feiras, das 08H às 17H. <br/>
Plantão: de segunda-feiras as sextas-feiras, a partir das 17H / Final de semana, o dia todo.<br/><br/>

Conselho Tutelar 01 – Jaboatão Centro<br/>
Av. General Manoel Rabelo , 25, Engenho Velho, Jaboatão dos Guararapes /PE. CEP
54.160 -000<br/>
Telefone: (81) 99314-9533<br/><br/>

Conselho Tutelar 02 – Cavaleiro<br/>
Rua Murilo Braga, 117-B, Sucupira , Jaboatão dos Guararapes /PE. CEP
54.210 -320<br/>
Telefone: (81)99402-3038<br/><br/>

Conselho Tutelar 03 – Curado<br/>
Rua Leonardo da Vince, 80, Curado II, Jaboatão dos Guararapes /PE. CEP
54.220 -000<br/>
Telefone: (81) 99314-9545<br/><br/>

Conselho Tutelar 04 – Muribeca<br/>
Rua 01, n.º 04 – Conjunto Muribeca , Muribeca , Jaboatão dos Guararapes
/PE. CEP 54.350 -273<br/>
Telefone: (81)99314-9544<br/><br/>

Conselho Tutelar 05 – Prazeres<br/>
Rua Aroases , 64 – Apto. 01, Prazeres , Jaboatão dos Guararapes /PE. CEP
54.340 -740<br/>
Telefone: (81) 99144-9276<br/><br/>

Conselho Tutelar 06 – Praias<br/>
Rua Rosangela Carneiro da Cunha Wanderley, 143, Piedade, Jaboatão dos Guararapes
/PE. CEP 54.420-180<br/>
Telefone: (81) 99372-2796<br/><br/>

Conselho Tutelar 07 – Guararapes<br/>
Av. General Barreto de Menezes , 487-A, Guararapes , Jaboatão dos Guararapes /PE.
CEP 54.360-160<br/>
Telefone: (81) 99975-4688<br/>
Plantão
Telefone: (81) 99144-9276</p>
                
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
