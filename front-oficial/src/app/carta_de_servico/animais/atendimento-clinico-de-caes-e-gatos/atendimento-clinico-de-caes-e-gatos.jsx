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
                <h2 className="font-bold text-blue-800 mt-4 mb-4">DESCRIÇÃO</h2>
                  <p>
                  A Secretaria Executiva de Bem-Estar Animal realiza atendimento clínico-veterinário (consultas médicas veterinárias de acompanhamento) e vacinação antirrábica por meio das Unidades Básicas
                  de Saúde Pet. UBS-PET <br /> 
                  Para saber mais sobre os atendimentos ou tirar dúvidas sobre o atendimento nas Unidades, o usuário pode mandar mensagem via whatsapp para o telefone (81) 9.9939-9652 e aguardar atendimento.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className="mb-4 mt-4">
                – Documento de identificação RG;<br/>
                – Comprovante de residência;<br/>
                – Número de identificação social - NIS (originais e xerox) ou documento que comprove baixa renda.
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PRINCIPAIS ETAPAS</h2>
                <p className="mb-4 mt-4">
                  Ordem de chegada
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4 mt-4">
                São distribuídas 20 fichas para atendimento diário na UBS-PET Massangana e 10 fichas para a UBS-PET Cavaleiro.
                </p> 

              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Munícipes de Jaboatão</p>

                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">
                Não há cobranças de taxas
                </p>

                <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
                <p className="mb-4">Presencial</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <h2 className="font-bold text-blue-800 mt-4 mb-2"></h2>
            <p>
            Endereço: UBS Pet Massagana (Localizada na Av. Zequinha Barreto, 380, Praça de <br/>
            Terminal de ônibus Brigadeiro Ivo Borges) ou UBS- PET Cavaleiro (Localizada na Praça <br/>
            Murilo Braga, ao lado da estação de Metrô de cavaleiro).<br/><br/>

            Telefone: (81) 99939-9652<br/>
            E-mail: ubspet.pmjg@gmail.com<br/>
            Horário de atendimento: De segunda a sexta feira, das 8h às 15h
            </p>
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
                  <p>Segunda a sexta-feira, das 08:00h às 14:00h.</p>
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
