"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Fiscalizacao = () => {
  return (
    <div >
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <ul className="  mb-4">
                  <li>O Programa CIPTEA está vinculado à Secretaria Executiva de Direitos Humanos, da Família e de Política sobre Drogas da Secretaria Municipal de Assistência Social e Cidadania.<strong> A Carteira de Identificação da Pessoa com Transtorno do Espectro do Autismo – CIPTEA</strong>  foi instituída pela Lei Municipal nº 1.548/2023. O referido documento servirá, entre outras coisas, para a visibilização da pessoa com Transtorno do Espectro do Autismo nos diversos espaços sociais, dispensando assim a apresentação do Laudo Médico.  Além de contribuir para o censo sobre os munícipes de Jaboatão dos Guararapes, possibilitando assim aos órgãos públicos contabilizar o quantitativo de pessoas com esse transtorno e pensar em políticas públicas mais efetivas. 
                <br className="mt-4" />
                Conta com 03 (três) equipes de técnicos e agentes redutores de vulnerabilidade social que atendem as 07 (sete) Regionais do Município do Jaboatão dos Guararapes. </li>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mt-4 mb-4">
                Ter laudo de Transtorno do Espectro do Autismo; e
                Ser Residente no município do Jaboatão dos Guararape
                </p>
        
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                <p className="mb-4">
                Ter laudo de Transtorno do Espectro do Autismo;
                  <br />
                  Ser Residente no município do Jaboatão dos Guararapes
                  <br />
                  Recebimento do documento na regional escolhida.
                </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Munícipios com Transtorno do Espectro do Autismo residentes no município do Jaboatão dos Guararapes. </p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                Formulário Online.
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
          <h2 className="font-bold text-blue-800 mt-4">ENDEREÇO:</h2>
            <p className="mt-4">
            Complexo Administrativo, Estrada da Batalha, nº 1200, Galpão N, Jardim Jordão – Jaboatão dos Guararapes/PE
            </p>
            <p className="mt-4">
            Horário de atendimento: das 08h às 15h.
            </p>
            <p className="mt-4">
            Telefones: (81)  9.9899-5216 e 9.8604-5965
            </p>
            <p className="mt-4">
            E-mail: <a href="mailto:superitendenciadireitospcdsjab@gmail.com" className="hover:underline">superitendenciadireitospcdsjab@gmail.com</a>
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

      <PesquisaSatisfacao/>

      
    </div>
  );
};

export default Fiscalizacao;
