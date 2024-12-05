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
                Entende-se por Auxílio Moradia o benefício destinado ao atendimento de famílias em situação de emergência em decorrência de riscos e desastres naturais, antrópicos ou mistos que acarretem déficits habitacionais no Município do Jaboatão dos Guararapes e que não tenham condições de prover para seus familiares os custos com moradia.<br />
Art. 1º Estabelecer os critérios de identificação para os beneficiários do Auxílio Moradia e regulamentar as condições e os procedimentos para a sua concessão e manutenção.<br />
§ 1º.<br />
§ 2º. O Auxílio Moradia somente poderá ser concedido quando for decretado situação de emergência, estado de calamidade pública ou em situações que a Defesa Civil do Município caracterize risco muito alto e que anuncie a interdição do imóvel a partir de comprovação com relatório técnico circunstanciado.<br />
§ 3º. A concessão do benefício pressupõe insuficiência da renda da família beneficiária para cobrir os custos com habitação.<br />
§ 4º. O benefício terá caráter temporário e será concedido por período máximo de 1 (um) ano, podendo ser renovado, caso permaneçam inalteradas as condições que autorizaram a concessão do benefício.<br />
Art. 2º Para efeito de concessão do benefício serão elaborados pela Defesa Civil relatórios técnicos justificando-se a caracterização de risco ou desastres e as vulnerabilidades sociais no tocante às pessoas.<br />
Art.3º Os relatórios técnicos elaborados pela Defesa Civil serão encaminhados à Secretaria Municipal de Assistência Social e Cidadania (SAS), que os analisará considerando como parâmetro para a avaliação socioeconômica do núcleo familiar.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS:</h2>
                <p>O Auxílio Moradia somente será concedido por unidade familiar, após
apresentação do relatório técnico elaborado pela Defesa Civil, que deverá conter, pelo menos, as seguintes informações:<br />
I – localização do imóvel em risco ou sinistrado;<br />
II – situação do imóvel que comprove o risco ou o desastre natural, humano ou misto;<br />
III – número de pessoas desabrigadas com a destruição ou interdição do imóvel.<br />
IV – caracterização da família, em destaque, pessoa idosa, mulher, mulher gestante, pessoa com deficiência, crianças e adolescentes em risco;<br />
V – caracterização do grau de risco do imóvel e risco do cenário;<br /><br />

O benefício do Auxílio Moradia poderá ser concedido, desde que a família cumulativamente, preencha os seguintes requisitos:<br /><br />

I – comprove, por documento emitido pela Defesa Civil do Município, que o imóvel em que residiam foi interditado;<br />
II – seja cadastrada no Cadastro Único para Programas Sociais – CadÚnico, do Governo Federal;<br />
III – resida no Município do Jaboatão dos Guararapes.<br /><br /></p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS:
                </h2>
                <p>A concessão do benefício Auxílio Moradia seguirá o seguinte procedimento:<br />
I – recebida a solicitação da Defesa Civil, a SAS deverá encaminhar para a Secretaria Executiva de Assistência Social (SEASO) efetuar a análise preliminar de enquadramento nos critérios de atendimento previstos na presente Portaria;<br />
II – em seguida, instruirá a solicitação com a relação de potenciais beneficiários e será autuado processo administrativo;<br />
III – após finalizado, o processo administrativo ou o expediente deverá ser encaminhado para autorização do titular da SAS, onerando dotação orçamentária específica;<br />
IV – concedida a autorização, os beneficiários deverão ser cadastrados no Sistema e convocados para assinatura do “Termo de Concessão do Benefício”;<br />
V – a relação dos beneficiários deverá ser publicada no Diário Oficial do Município para consulta pública.<br /><br /></p>
              </div>

              <div className="pl-10 w-full">
                
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p>Variável de acordo com o perfil da demanda.</p>
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
            <h2 className="font-bold text-blue-800 mt-4">ENDEREÇO:</h2> <br />
                <p>Horário de atendimento: Segunda a sexta 08h às 16h<br />
Endereço: Estrada da Batalha 1200 Galpão N – Jardim Jordão, Jaboatão dos
Guararapes – PE<br />
Telefone: (81)99529.2166 (Telefone institucional)<br />
E-mail: gerenciadebeneficios.jg@gmail.com</p>
                
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
