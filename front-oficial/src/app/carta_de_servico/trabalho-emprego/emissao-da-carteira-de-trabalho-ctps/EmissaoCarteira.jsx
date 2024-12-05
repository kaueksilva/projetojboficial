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
                  <li className="mb-4">A Carteira de Trabalho e Previdência Social (CTPS) é um documento obrigatório para toda pessoa que venha a prestar algum tipo de serviço de atividade econômica, seja nos setores da indústria, do comércio ou mesmo de natureza doméstica.</li>
                  <li className="mT-4">Por determinação do Ministério da Economia, desde 01/03/2020, a Carteira física de trabalho foi substituída pela CARTEIRA DE TRABALHO DIGITAL (CTPS Digital). A Agência do Trabalhador oferece orientação para trabalhadores que encontrem alguma dificuldade no acesso, basta dirigir-se ao posto de atendimento mais próximo de sua residência.</li>
                 
                </ul>
               
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>
                <p className=" mb-4 mt-4">Necessário levar RG e CPF<br/> </p>
              
                <h2 className="font-bold text-blue-800 mt-4">
                PRINCIPAIS ETAPAS:
                </h2>
                <p className="mt-4 mb-4">O trabalhador deverá comparecer a um posto de atendimento da Agência do Trabalhador mais próximo de sua residência ou acessar o serviço através do aplicativo Portal Emprega Brasil <a href="https://empregabrasil.mte.gov.br" className="text-gray-500 hover:underline">(https://empregabrasil.mte.gov.br)</a> e preencher as informações pessoais e profissionais solicitadas.</p>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">
                Presencial e telefone
                </p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <p className="mb-4">Não há cobranças de taxas</p>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
         
          <h2 className="font-bold text-[#144aa7] mt-4">SECRETARIA EXECUTIVA DE TRABALHO, QUALIFICAÇÃO E EMPREENDEDORISMO</h2>
            <p className="mt-4 mb-4 ">Horário de atendimento: 08h às 16h
            </p>
            <h2 className="mt-4 mb-4 text-[#144aa7] font-bold">
            Telefones:
            </h2>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Jaboatão Centro: 81 3482-5487 / 3482-5494 / 3482-5384 – Central de vagas: 99975-2859
            </p>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Curado: 81 3255-1553
            </p>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Piedade: 81 3469-5476
            </p>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Guararapes: 81 3378-1783
            </p>
            <h2 className="mt-4 mb-4 text-[#144aa7] font-bold">
            Endereços:
            </h2>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Jaboatão Centro: Av. Barão de Lucena, s/n – Jaboatão Centro;
            </p>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Curado: Rua Dois, SN – Curado IV;
            </p>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Piedade: Av.Presidente Kennedy, nº 578 – Piedade;
            </p>
            <p className="mt-4 mb-4">
            -Agência do Trabalhador Guararapes: Av. Barreto de Menezes, Prazeres – Mercado Das Mangueiras, 1º Pavimento
            </p>
            
            <h2 className="mt-4 mb-4 text-[#144aa7] font-bold">
            E-mails:
            </h2>
            <p className="mt-4 mb-4">
            – Agência do Trabalhador Jaboatão Centro: <a className="mailto:supervisorcvagas.jaboatao@gmail.com hover:underline text-gray-500">  supervisorcvagas.jaboatao@gmail.com </a>
            </p>
            <p className="mt-4 mb-4">
            Agência do Trabalhador Curado: <a className="mailto:curadopostospvimosd@gmail.com hover:underline text-gray-500"> curadopostospvimosd@gmail.com </a>
            </p>
            <p className="mt-4 mb-4">
            – Agência do Trabalhador Piedade: <a className="mailto:supervisorcvagas.jaboatao@gmail.com hover:underline text-gray-500">  supervisorcvagas.jaboatao@gmail.com </a>
            </p>
            <p className="mt-4 mb-4">
            – Agência do Trabalhador Guararapes: <a className="mailto:postoguarapesimosd@gmail.com hover:underline text-gray-500">  postoguarapesimosd@gmail.com </a>
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
