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
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2><br/>
                  <p>
                  O Procon do Município do Jaboatão dos Guararapes está à disposição dos consumidores, auxiliando o cidadão na atuação da proteção dos seus direitos como consumidor, evitando que práticas abusivas sejam exercidas pelos fornecedores nas relações de consumo. O Procon do Jaboatão dos Guararapes disponibiliza os seguintes serviços.<br/>
                  1 – Sessões de conciliação entre consumidor e fornecedor; <br/>
                  2 – Recepciona e orienta o consumidor;<br/>
                  3 – Elaborar minuta, pareceres, contratos, convênios e demais documentos de interesse do Procon/JG;<br/>
                  4 – Registra as reclamações no Sistema Nacional de Informações de Defesa do Consumidor – SINDEC, bem como classificá-las;<br/>
                  5 – Promove junto à policia a instauração de inquérito para apreciação de delito contra os consumidores;<br/>
                  6 – Acompanha as reclamações encaminhadas à Defensoria Pública e ao Ministério Público;<br/>
                  7 – Orienta e instrui os atendentes do Procon;<br/>
                  8 – Realiza palestras com temas de defesa do consumidor;<br/>
                  9 – Saneia e julga processos administrativos em trâmite no órgão;<br/>
                  10 – Elabora cadastro de Reclamações Fundamentadas;<br/>
                  11 – Executa atividades de fiscalização relativas às normas de defesa do consumidor;<br/>
                  12 – Fiscaliza a publicidade dos produtos e serviços, coibindo aquelas consideradas enganosas e abusivas;<br/>
                  13 – Comunica às autoridades competentes infrações às relações de consumo;<br/>
                  14 – Pratica atos de cartório para processamento de processos administrativos e expede as respectivas notificações;<br/>
                  15 – Participa de “blitz” nas ruas e programas de desenvolvimento que envolvem conteúdos relativos à área de atuação ou neles atuar.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4">
                Para abrir uma reclamação no Procon Jaboatão dos Guararapes, o consumidor pode se dirigir a um dos locais de atendimentos descritos abaixo, trazendo os seguintes documentos:<br/>
                – Documentos pessoais (original e 1 cópia) – RG, CPF, Comprovante de Residência.<br/><br/>

                – Documentos de mérito (referentes ao problema que será reclamado) – nota fiscal, ordem de serviço, fatura, entre outros.<br/><br/>

                OBS1: O consumidor deve trazer original e a quantidade de cópias será referente à quantidade de empresas reclamadas mais uma que constará do processo no Procon. Ex: Loja + Assistência Técnica + Fabricante ( serão três cópias dos documentos mais a do processo, totalizando 4).<br/><br/>

                OBS2: Se a abertura de reclamação for feita pelo representante do consumidor (pai, mãe, filho, companheiro, etc), o responsável deverá baixar o modelo de procuração no site do Procon, e trazer devidamente preenchida e assinada, junto com seus documentos pessoais (original e 1 cópia):<br/>
                </p>
                <a
                className=" w-full md:w-auto bg-[#004376] text-white py-2 px-6 rounded-full text-sm md:text-base hover:bg-[#00ACED] transition-colors"
                    href="https://procon.jaboatao.pe.gov.br/material-de-consulta/"
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                  >
                    Clique Aqui
                  </a>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4 mb-4">PRINCIPAIS ETAPAS</h2>
                <p className="mb-4">
                  Triagem – No atendimento presencial na sede ou em uns dos locais de atendimento do Procon/JG, inicia-se com a triagem, onde é verificado se o assunto é ou não de competência do órgão municipal. Caso não seja, o cidadão será encaminhado a procurar o órgão competente.<br/><br/>

                Processamento da Reclamação – Nesta fase será realizado o registro da reclamação; retorno da CIP (respostas com prazo de 10 dias para fornecedores conveniados); agendamento e realização de audiência (em caso de não solução com o passo anterior).<br/><br/>

                O PROCON também pode, de ofício, instaurar procedimentos preliminares e processos administrativos quando verificar indícios de práticas abusivas no mercado de consumo.<br/><br/>

                Todavia, acaso a reclamação do consumidor não seja atendida na esfera administrativa, sendo verificada a legalidade e viabilidade de seu pedido, o cidadão é encaminhado ao Judiciário ou ao órgão competente com a documentação que tramitou na esfera administrativa.<br/><br/>

                Alternativamente uma denúncia pode ser realizada através dos telefones:<br/><br/>

                Ou pelo canal de atendimento na internet, através do site da instituição do Procon de Jaboatão: AQUI<br/><br/>

                Obs: O denunciante pode optar pela denúncia anônima e sua identidade será preservada.
</p>


                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
                <p className="mb-4">Presencial ou telefone</p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">
                Não há cobranças de taxas
                </p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">Endereço:</h2>
                <h2 className="font-bold text-blue-800 mt-4">PROCON MUNICIPAL DE JABOATÃO DOS GUARARAPES – SEDE</h2>
                  <p>
                  Endereço : Av. Barreto de Menezes, 1648 – Prazeres<br/>
                  CEP- 54.310-310<br/>
                  Telefone : (81) 99939-0887<br/>
                  Horário de Atendimento: 8h às 14h.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">NÚCLEO DO PROCON – REGIONAL 1 – JABOATÃO CENTRO</h2>
                <p className="mb-4">
                Endereço: Av. Barão de Lucena, s/n. Antiga Sede da Prefeitura.<br/>
                Telefone : (81) 3482-5490<br/>
                Horário de Atendimento: 8h às 14h
                </p>

                <h2 className="font-bold text-blue-800 mt-4">NÚCLEO DO PROCON – REGIONAL 2 – CAVALEIRO</h2>
                <p className="mb-4">
                Endereço: Praça Severina Rita Coelho, 20, Cavaleiro<br/>
                Telefone : (81) 3249-2803<br/>
                Horário de Atendimento: 8h às 14h
                </p>

                <h2 className="font-bold text-blue-800 mt-4">NÚCLEO DO PROCON – REGIONAL 3 – CURADO</h2>
                <p className="mb-4">
                Endereço: Rua 02 (dois), s/n, Curado IV, Jaboatão dos Guararapes – PE,<br/>
                CEP: 54.270-010, Ponto de Referência: Em frente ao Bloco 19<br/>
                Telefone : (81) 3452-5610<br/>
                Horário de Atendimento: 8h às 14h
                </p> 
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">NÚCLEO DO PROCON – REGIONAL 4 – MURIBECA</h2>
                <p className="mb-4">Rodovia Empresário João Santos Filho, Eixo Integração, 3033, Muribeca.<br/>
                Telefone : (81) 3376-1230 <br/>
                Horário de Atendimento: 8h  às 14h
                </p>
                <h2 className="font-bold text-blue-800 mt-4">NÚCLEO DO PROCON – REGIONAL 5/7 – MERCADO DAS MANGUEIRAS</h2>
                <p className="mb-4">Av. Barreto de Menezes – Jaboatão dos Guararapes, PE, 54315-000<br/>
                Horário de Atendimento: 8h  às 14h</p>

                <h2 className="font-bold text-blue-800 mt-4">NÚCLEO DO PROCON – REGIONAL 6 – PRAIAS</h2>
                <p className="mb-4">
                Endereço: Av. Presidente Kennedy, 578, Piedade.<br/>
                Telefone : (81) 3476-2951<br/>
                Horário de Atendimento: 8h às 14h
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
                      href="mailto:ouvidoria@jaboatao.pe.gov.br" className="text-blue-700 underline"
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
                  <p>
                  Lorena Ventura
                  </p>

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
