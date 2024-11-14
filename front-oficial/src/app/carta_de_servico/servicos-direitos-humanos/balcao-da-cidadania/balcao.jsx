"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartaDeServico from "../../../../components/carta-de-servicos";
import PesquisaSatisfacao from "../../../../components/PesquisaSatisfacao";

const Servicos = () => {

  // Exemplo de URLs ou caminhos das imagens
  const images = [
    "/images/carrosel/balcao01.jpeg",
    "/images/carrosel/balcao02.jpeg",
    "/images/carrosel/balcao03.jpeg",
    "/images/carrosel/balcao04.jpeg",
    "/images/carrosel/balcao05.jpeg",
    "/images/carrosel/balcao06.jpeg",
    "/images/carrosel/balcao07.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Velocidade da transição (em milissegundos)
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Tempo de transição entre as imagens (em milissegundos)
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  

  return (
    <div className="container mx-auto my-10 p-5 max-w-7xl">
      <CartaDeServico
        dadosGerais={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 w-full">
              <div className="pr-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">DESCRIÇÃO</h2>
                <ul className="mb-4">
                  <li>
                    O Programa Balcão da Cidadania está vinculado à Secretaria
                    Executiva de Direitos Humanos, da Família e de Política
                    sobre Drogas da Secretaria Municipal de Assistência Social e
                    Cidadania, visa à garantia dos direitos e o acesso à
                    cidadania para a população mais carente do município. Como
                    forma de possibilitar a prática dos direitos e deveres do
                    cidadão, oferta gratuitamente serviços como:
                    <br />
                    – Encaminhamento para emissão de documentos básicos:
                    Certidão de Nascimento, de Casamento e de Óbito (a partir da
                    2º via); – Cadastramento da Carteira de Livre Acesso (para
                    pessoas com deficiência); <br />
                    – Emissão de RG em 02 Postos Avançados: um Posto na sede do
                    Balcão da Cidadania – Prazeres e o outro Posto na sede da
                    Regional 02 – Cavaleiro. A 1ª via é gratuita e, a partir da
                    2ª mediante pagamento de taxa estipulada pelo Instituto de
                    Identificação Tavares Buri – IITB;
                    <br />– Acompanhamento dos processos de Registros Tardios.
                  </li>
                </ul>
                <h2 className="font-bold text-blue-800 mt-4">REQUISITOS</h2>

                <h2 className="font-bold text-blue-800 mt-4">
                  PRINCIPAIS ETAPAS:
                </h2>
              </div>

              <div className="pl-10 w-full">
                <h2 className="font-bold text-blue-800 mt-4">PREVISÃO:</h2>
                <p className="mt-4 mb-4">Variável</p>
                <h2 className="font-bold text-blue-800 mt-4">PÚBLICO ALVO:</h2>
                <p className="mb-4">Cidadão</p>
                <h2 className="font-bold text-blue-800 mt-4">
                  PRESTAÇÃO DO SERVIÇO/FORMA:
                </h2>
                <p className="mb-4">Presencial</p>
                <h2 className="font-bold text-blue-800 mt-4">TAXAS</h2>
                <ul>
                  <li>Emissão de RG:</li>
                  <li>
                    A 1ª via é gratuita e, a partir da 2ª, mediante pagamento de
                    taxa estipulada pelo IITB. Cobrança estabelecida pelo
                    Instituto de Identificação Tavares Buril – IITB:
                  </li>
                  <li>– 2ª via da Carteira de Identidade – Gratuita;</li>
                  <li>– Pessoas acima 65 anos – Gratuita.</li>
                </ul>
              </div>
            </div>
          </>
        }
        setorPublico={
          <>
            <h2 className="font-bold text-blue-800 mt-4">ENDEREÇO:</h2>
            <p className="mt-4">
              Rua Almirante Dias Fernandes, nº 271-A, Prazeres – Jaboatão dos
              Guararapes/PE. Próximo ao antigo Clube Intermunicipal.
            </p>
            <p className="mt-4">
              Horário de atendimento: das 08h às 16h, de segunda a sexta-feira.
            </p>
            <p className="mt-4">Telefone: (81) 9.9388-5214</p>
            <p className="mt-4">E-mail: balcaodacidadaniajg@gmail.com</p>
            <p className="mt-4">
              <strong>Obs:</strong> Para emissão de RG, o usuário também pode
              solicitar no endereço abaixo: Posto avançado na sede da Regional
              02 – Rua Severino Monteiro s/n – Cavaleiro. Em frente ao Banco do
              Brasil.
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
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* Carrossel abaixo do card */}
      <div className="mt-24 mb-28">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-4">
              <img 
                src={src}
                alt={`Imagem ${index + 1}`}
                className="cursor-pointer object-cover w-72 mb-3 rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      <PesquisaSatisfacao/>

    </div>
  );
};

export default Servicos;
