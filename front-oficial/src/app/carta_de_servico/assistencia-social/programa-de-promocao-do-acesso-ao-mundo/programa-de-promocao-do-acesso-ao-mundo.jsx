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
                O Programa de Promoção do Acesso ao Mundo do Trabalho (Acessuas Trabalho) busca a autonomia das famílias usuárias da política de assistência social, por meio da integração ao mundo do trabalho, sendo executado por meio de oficinas temáticas. O acesso a este serviço se dá por meio de encaminhamentos dos Centros de Referência de Assistência Social, sendo as oficinas ofertadas a partir do perfil dos grupos formados.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4 mb-4">
                  PRINCIPAIS ETAPAS
                </h2>
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Populações urbanas e rurais em situação de vulnerabilidade e risco social com idade entre 14* e 59 anos, com prioridade para usuários de serviços, projetos e programas de transferência de renda
                socioassistenciais.</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p>Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <div>
              <strong>
                <h1>
                ENDEREÇOS:
                </h1>
              </strong>
              <br />
              <section>
                <h2>Horário de atendimento: das 7h às 16h</h2>
                <p><br />
                CRAS JABOATÃO CENTRO<br />
Rua Santo Amaro, N° 36 – Centro Cep 54080-320<br />
Tel:81 9 9381-0016<br />
Email: crasjaboataocentro@gmail.com
<br /><br />
CRAS VILA RICA<br />
Avenida Manoel Rabelo, N° 31 – Engenho Velho<br />
Tel:81 9 9939-0477<br />
Email: crasvilarica@outlook.com
<br /><br />
CRAS SOCORRO<br />
Avenida Manoel Rabelo, N° 31 – Engenho Velho<br />
Tel: 81 9 9939-7935<br />
Email: crassocorro@outlook.com
<br /><br />
CRAS CAVALEIRO<br />
Av. Agamenon Magalhães, N° 270, Cavaleiro Cep 54210-000<br />
Tel:81 9 9488-9541<br />
Email: crascavaleiro@gmail.com
<br /><br />
CRAS ZUMBI DO PACHECO<br />
Rua. Agogo – Dois Carneiros, Jaboatão dos Guararapes – PE, 54280-618<br />
Tel:81 9 9380-6675 Email: craszumbidopacheco@gmail.com
<br /><br />
CRAS CURADO<br />
Rua 2, S/n – Curado Iv Cep 54270-010<br />
Tel: 81 9 9380-6780<br />
Email: equipecrascurado@gmail.com
<br /><br />
CRAS MURIBECA<br />
Av. Eixo Da Integração, N° 3032, Muribeca Cep 54350-310<br />
Tel: 81 9 9467-0751<br />
Email: crasmuribeca@gmail.com
<br /><br />
CRAS PRAZERES<br />
Rua Doutor Luís Regueira, 474, Prazeres Cep 54335-160<br />
Tel: 81 9 9123-7947<br />
Email: cras.prazeres@jaboatao.pe.gov.br
<br /><br />
CRAS CAJUEIRO SECO<br />
Rua Maria Helena, S/n – Cajueiro Seco Cep 54330-610<br />
Tel: 81 9 9380-8124<br />
Email: crascajueiroseco@gmail.com
<br /><br />
CRAS PRAIAS<br />
Rua Comendador De Sá Barreto, 10 Piedade Cep 54420800<br />
Tel: 81 9 8985-0372<br />
Email: cras.praias@jaboatao.pe.gov.br
<br /><br />
CRAS BARRA DE JANGADA<br />
Rua Bacharel José Mário De Oliveira, N° 388,- Barra De Jangada<br />
Tel: 81 9 9131-7155<br />
Email: crasbarrajangada@hotmail.com
<br /><br />
CRAS JARDIM JORDÃO/GUARARAPES<br />
Av. Barreto De Menezes, N° 487 Guararapes Cep 54325-000<br />
Tel: 81 9 9144 – 2520<br />
Email: crasjardimjordao@hotmail.com
                </p>
              </section>
              <br />
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
