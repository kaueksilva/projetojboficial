"use client";

import React from "react";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Mulher = () => {
  return (
    <div>
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2><br/>
                  <p>
                  O Espaço mulher empreendedora tem a finalidade de formular, implementar, coordenar acompanhar desenvolver políticas, programas projetos e ações voltados para empoderamento sócio-economico da mulher, inserindo-as no mercado de trabalho e assim promovendo sua auto-estima e autonomia financeira. <br />
                  <br />
                  O Programa Mulher Empreendedora tem como objetivo empoderar o sócio e economicamente as mulheres do município do Jaboatão dos Guararapes, especialmente as que sofreram ou sofrem violência doméstica e familiar, visando a independência financeira, pessoal, profissional e social. Possui três eixos de atuação: (I ) ofertar cursos profissionalizantes; ( II ) promover orientação ao empreendedorismo; e (III ) viabilizar a comercialização dos produtos elaborados pelas mulheres. O espaço realiza cursos na área de beleza( designer de sobrancelhas, corte e escova de cabelo, limpeza de pele, manicure, SPA dos pés..), na área de gastronomia ( confeitaria, bolos e tortas, doces e salgados, hamburguês gourmet, comida chinesa..) Estética ( depilação, drenagem linfática,..)artesanato ( bijuterias, biscuit..) corte e costura.
                  </p>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4">
                  As mulheres que procurarem o serviço deverão estar de posse da sua documentação pessoal ( RG, CPF e comprovante de residência).
                </p>

                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2><br/>
                <p className="mb-4">
                  As mulheres que procurarem o serviço deverão estar de posse da sua documentação pessoal ( RG, CPF e comprovante de residência).
                </p>
                
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO</h2>
                <p className="mb-4">Imediato</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">PRESTAÇÃO DO SERVIÇO/FORMA</h2>
                <p className="mb-4">Presencial</p>

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
          <h2 className="font-bold text-blue-800 mt-4 mb-4"></h2>
            <p>
              Telefone: (81) 99975-3918 <br />
              E-mail:  sec.especialdamulher@gmail.com <br />
              Endereço: Rua Doutor Luis Regueira número 85 – Mercado das Mangueiras primeiro <br />
              Andar- Prazeres <br />
              <br />
              Horário de atendimento: segunda a sexta feira de 08h às 17h
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

export default Mulher;
