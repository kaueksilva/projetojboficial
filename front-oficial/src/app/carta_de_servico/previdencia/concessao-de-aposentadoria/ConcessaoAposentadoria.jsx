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
                  <li className="mb-4">Concessão de aposentadoria – O Instituto de Previdência dos Servidores Públicos do Município do Jaboatão dos Guararapes – JABOATÃOPREV – é uma Autarquia criada através da Lei 108/2001, com atualizações dadas pelas Leis nºs 102//2006, 153/2007, 703/2011, 1.265/2016 e 1.334/2017, e tem a finalidade reconhecer o direito e viabilizar o acesso de todos os servidores públicos efetivos da Prefeitura Municipal de Jaboatão dos Guararapes e consequentemente, a seus dependentes, à aposentadoria e pensão por morte.</li>
                 
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className=" mb-4 mt-4">Ser servidor efetivo,  ou ser dependente, à aposentadoria e pensão por morte.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                <p className="mb-4 mt-4"><strong>1º Passo –</strong>· Cópia do Documento de Identidade (Cópia LEGÍVEL);<br/>
· Cópia do CPF;<br/>
· Cópia do Cartão do PASEP;<br/>
· Cópia do Cartão do Banco do Santander;<br/>
· Cópia do Último Contracheque;<br/>
· Cópia do Comprovante de Residência;<br/>
· Cópia da Certidão de Casamento ou nascimento;<br/>
· Declaração de Nada Consta (Solicitar na Ouvidoria Geral do Município) – Prédio da Prefeitura, ao lado do corpo de Bombeiros;<br/>
· Em caso de Filho Menor de 24 anos – Certidão de Nascimento (Informação para Imposto de Renda);
· CNIS – Cadastro Nacional de Informação Social (INSS);<br/>
· Caso tenha tempo de contribuição anterior ao da Prefeitura, Providenciar Certidão de Tempo de Contribuição;<br/>
· Se tiver Pensão Alimentícia: RG e CPF do beneficiário da pensão; processo Judicial da Pensão Alimentícia; Comprovante de Residência do Beneficiário da pensão.</p>
                <p className="mb-4 mt-4">OBS: TRAZER CÓPIAS E ORIGINAIS DE TODOS OS DOCUMENTOS</p>
                <p className="mb-4 mt-4">Alerta importante: Procure a Secretaria de Gestão de Pessoas da Prefeitura antes de dar entrada em seu processo de aposentadoria, e verifique se existe alguma pendência de licença prêmio a ser gozada, ou qualquer outra pendência que impeça o envio de sua pasta funcional ao Instituto de Previdência. O processo só terá andamento se não houver nenhuma pendência em aberto.</p>
                <p className="mb-4 mt-4"><strong>2º passo – </strong>Comparecer na sede do Jaboatão Prev, de segunda e sexta-feira, no horário de 08h às 13h30, com toda documentação acima informada. O servidor do setor de benefício conferirá as cópias dos documentos com os originais; após, será efetuada uma simulação para definir a regra de aposentadoria. Neste momento, o servidor assinará Requerimento para dar entrada ao processo.
                O servidor receberá uma via do requerimento com um número de protocolo, que servirá para acompanhamento do andamento do processo.</p>
                <p className="mb-4 mt-4"><strong>3º passo –</strong>O setor de benefício solicita a pasta funcional do servidor à Secretaria de Gestão de Pessoas, que também prepara as certidões nos padrões exigidos pelo Tribunal de Contas do Estado. <br/>
Com o recebimento da pasta, é efetuada a instrução do processo, que segue os passos seguintes:<br/>
1. Análise da documentação contida na pasta funcional do servidor;<br/>
2. Montagem do processo com as cópias dos documentos entregues pelo servidor, bem como, cópia dos demais documentos exigidos, que constam na pasta funcional;<br/>
3. Cálculo das verbas que irão compor o valor do benefício;<br/>
4. Emissão de certidão de tempo de contribuição;<br/>
5. Parecer da Assessoria Jurídica;<br/>
6. Emissão da Portaria de Aposentadoria, que será assinada pelo Gerente de Benefícios e pela Presidente do Instituto;
7. Publicação da Portaria no Diário Oficial do município;<br/>
8. Comunicação ao servidor de que já está aposentado e que a portaria lhe será entregue no evento mensal, que o JaboatãoPrev efetua para entrega das portarias;<br/>
9. Implantação do ex-servidor aposentado no sistema de folha de pagamento.
Observação: O trâmite do processo até a concessão da aposentadoria ocorrerá num prazo máximo de 5 meses.</p>
<p className="mb-4 mt-4"><strong>4º passo – </strong> todo o processo da aposentadoria seguirá para o Tribunal de Contas do Estado – TCE, para análise e homologação quanto ao julgamento da legalidade do Ato. Sendo o processo julgado legal pela corte de contas, a pasta do ex-servidor, já aposentado, será encaminhada para a Secretaria de Gestão de Pessoas, juntamente com o requerimento de solicitação de direitos trabalhistas, que deverá ser assinada pelo ex-servidor no recebimento da portaria de aposentadoria. Este pagamento será efetuado pela Secretaria de Gestão de Pessoas, diretamente ao ex-servidor.</p>
                <p className="mb-4 mt-4">Observação: O trâmite de análise do Tribunal de Contas do Estado – TCE poderá ocorrer em até 5 meses.</p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4">Poderá ocorrer em até 5 meses.</p>
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
          <h2 className=" mt-4">Telefone: (81) 3462.4855 e (81) 3462.4619</h2>
            <p className="mt-4 mb-4  hover:underline">E-mail:
            <a className="mailto:jaboataoprev@hotmail.com" > jaboataoprev@hotmail.com</a> 
            </p>
            <p className="mt-4 mb-4  hover:underline">
            Horário de atendimento:
            </p>
            <p className="mt-4 mb-4">
            de 8h às 13h30.
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
