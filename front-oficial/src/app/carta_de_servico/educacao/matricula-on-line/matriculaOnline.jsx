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
                <ul className="  mb-4">
                  <li>O Núcleo de Apoio às Vítimas de Violência (NAVV) está vinculado à Secretaria Executiva de Direitos Humanos, da Família e Políticas sobre Drogas, da Secretaria Municipal de Assistência Social e Cidadania do Jaboatão dos Guararapes. Funciona como principal porta de entrada de denúncias de supostas violações dos direitos humanos relativas às pessoas idosas, às pessoas com deficiência, à população negra e aos povos tradicionais e à população LGBTQIAPN+. O serviço recebe as denúncias e realiza visitas domiciliares, registrando as informações em bancos de dados (PMAVV), prestando orientações às vítimas e seus familiares, quanto aos seus direitos e realizando os encaminhamentos necessários junto a rede municipal e Estadual de promoção dos Direitos Humanos.</li>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                
        
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                <p className="mb-4">
                Acolhimento de denúncias; 
                  <br />
                  Visitas domiciliares;
                  <br />
                  Escuta e orientações sobre direitos humanos;
                  <br />
                  Encaminhamento a rede socioassistencial e ao Ministério Público.
                </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mb-4">Variável.</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Pessoas Idosas; </p>
                <p className="mb-4">Pessoas com Deficiência; </p>
                <p className="mb-4">LGBTQIAPN+; e </p>
                <p className="mb-4">População Negra e Povos Tradicionais.</p>
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
          <h2 className="font-bold text-blue-800 mt-4">COMO DENUNCIAR</h2>
            <p className="mt-4">
            *Disque 100 
            </p>
            <p className="mt-4">
            *Ministério Público de Pernambuco – Promotoria de Justiça de Jaboatão dos Guararapes 
            </p>
            <p className="mt-4">
            (81) 3182-3335/3182-3642
            </p>
            <p className="mt-4">
            *Disque Denúncia da Secretaria de Defesa Social de PE (81) 3421-9595 ou <a href="https://www.disquedenunciape.com.br" className="hover:underline">www.disquedenunciape.com.br</a>
            </p>
            <p className="mt-4">
            *Núcleo de Apoio às Vítimas de Violência (NAVV):
            </p>
            <p className="mt-4">
            Telefones: (81) 9.9400-3280 ou 9.9477-3061
            </p>
            <p className="mt-4">
            Horário de atendimento:  das 08h às 15h, de segunda a sexta-feira.
            </p>
            <p className="mt-4">
            E-mail: <a href="mailto:nav.jaboatao@gmail.com" className="hover:underline">nav.jaboatao@gmail.com</a>
            </p>
            <h2 className="font-bold text-blue-800 mt-4">DENÚCIA:</h2>
            <p className="mt-4">
            Disque 100 (24 horas)
            </p>
            <h2 className="font-bold text-blue-800 mt-4">TELEFONE:</h2>
            <p className="mt-4">
            (081) 9.9400-3280 ou 9.9894-1852
            </p>
            <p className="mt-4">
            Horário de atendimento:  8h às 17h.
            </p>
            <h2 className="font-bold text-blue-800 mt-4">E-MAIL:</h2>
            <p className="mt-4">
            <a href="mailto:nav.jaboatao@gmail.com" className="hover:underline">nav.jaboatao@gmail.com</a>
            </p>
            <h2 className="font-bold text-blue-800 mt-4">ENDEREÇO:</h2>
            <p className="mt-4">
            Rua Almirante Dias Fernandes, nº 271-A – Prazeres – Jaboatão dos Guararapes/PE.
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
