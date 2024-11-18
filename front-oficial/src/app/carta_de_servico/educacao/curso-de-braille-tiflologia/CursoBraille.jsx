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
                <ul >
                  <li className="mb-4">Curso oferecido para capacitação dos profissionais das nossas unidades de ensino da Secretaria Municipal de Educação e Esportes, estudantes e pais de estudantes com deficiência visual. O curso visa a ensinar o sistema de escrita tátil utilizado por pessoas com deficiência visual. Tem carga horária de 160h e as matrículas são iniciadas, geralmente, no mês de fevereiro, na gerência do setor responsável. O curso é ministrado em uma das unidades de ensino da Rede, por professores deficientes visuais e coordenadores educacionais do setor da Gerência de Educação Especial da Secretaria Municipal de Educação e Esportes.

</li>
                  <a
                    className="mt-4 w-full md:w-auto bg-[#004376] text-white py-2 px-4 rounded-lg md:text-base hover:bg-[#00ACED] transition-colors justify-center flex text-center"
                    href="https://educacao.jaboatao.pe.gov.br/"
                    target="_blank" // Abre o link em uma nova aba
                    rel="noopener noreferrer" // Segurança adicional ao abrir links externos
                  >
                    SITE DA SECRETARIA MUNICIPAL DE EDUCAÇÃO
                  </a>
                
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <ul>
                    <li>Comparecer, no período de inscrição, ao setor da Gerência Educação Especial com os seguintes documentos: 1 (uma) foto 3×4, Documento de identificação (RG/carteira de identidade), CPF, Certificado de Conclusão do Ensino Médio ou equivalente e comprovante de residência.</li>
                    
                </ul>
        
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Diretores, Supervisores Pedagógicos, Professores em regência nas salas de recursos multifuncionais; Professores em regência no ensino regular; Professores readaptados; Professores em função técnica; Grupo de apoio administrativo ao magistério; Apoio pedagógico da Rede Municipal de Ensino; Funcionários de outras Secretarias Municipais; Representantes de Conselhos Municipais e associações; Associações e comunidade em geral</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                Presencial e Online
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
          <h2 className="font-bold text-blue-800 mt-4">SECRETARIA MUNICIPAL DE EDUCAÇÃO </h2>
            <p className="mt-4 mb-4">Gerência de Educação Especial – Sala 02</p>
            <p className="mt-4 mb-4">Endereço: Av. Barreto de Menezes, 1648 – Prazeres</p>
            <p className="mt-4 mb-4">E-mail: 
           <a href="mailto:educacaoespecial@educacao.jaboatao.pe.gov.br" className="hover:underline">
           educacaoespecial@educacao.jaboatao.pe.gov.br
           </a>
            </p>
            <p className="mt-4 mb-4">
            Telefone: (81) 99975-4479
            </p>
            <p className="mt-4 mb-4">Horário: 8h às 12h e 13h30 às 17h.</p>
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
