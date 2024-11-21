"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";


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
                Economia Criativa. Fomento as ações dos empreendimentos econômicos criativos do município do Jaboatão dos Guararapes. A gestão municipal decidiu encarar o estimulante desafio de promover o desenvolvimento da economia criativa na cidade e, por intermédio da Coordenação de Economia Criativa da SETQE, assumiu o compromisso de implantar ações que fomentassem o empreendedorismo criativo, ampliassem a visão dos empreendedores acerca de seus negócios e incentivassem o aquecimento da economia no intuito de fortalecer empreendimentos já existentes, atrair novos para o município e fomentar a cultura da inovação por meio de treinamentos, incubação de startups, consultoria em gestão de negócios e parcerias institucionais. O município mantém uma incubadora de novos empreendimentos (startups) nas áreas de moda, aplicativos e jogos digitais, bem como promover qualificação profissional nesses respectivos campos, além de oferecer serviços e espaços que vão desde banco de informações sobre o setor criativo até área de coworking e ciclos de palestras em economia criativa, empreendedorismo, tecnologia e inovação.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4">Para estar devidamente inscrito na secretaria, o empreendedor precisa comprovar residência no município, documentos pessoais e os produtos/serviços que desenvolve.</p>
              </div>
              <div className="pl-10 w-full">
                
                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS
                </h2>
                <p className="mb-4">Cadastro na secretaria através de editais publicados em diário oficial.</p>

                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA
                </h2>
                <p className="mb-4"> Presencialmente, telefone e e-mail.</p>

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
                Horário de atendimento: 08:00 às 16:00 <br/><br/>

Telefones: 81-9.9937-2986 <br/><br/>

Endereço: Rua Coronel Francisco Galvão, 769 – Piedade – Jaboatão dos Guararapes <br/><br/>

E-mail: rafael.saap@gmail.com <br/><br/>

Posto Jaboatão Centro: supervisorcvagas.jaboatao@gmail.com <br/><br/>

Posto Cavaleiro: postocavaleiros@gmail.com <br/><br/>

Posto Curado: curadopostospvimosd@gmail.com <br/><br/>

Posto Piedade: supervisoragencia@hotmail.com <br/><br/>

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

      
    </div>
  );
};

export default Vigilancia;
