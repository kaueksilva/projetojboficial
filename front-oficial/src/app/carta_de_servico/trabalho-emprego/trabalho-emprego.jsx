"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { FaUsers } from "react-icons/fa";

const ambiente = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Trabalho e Emprego" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Qualificação Profissional',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Qualificação Profissional para a população do município do Jaboatão dos Guararapes. O município do Jaboatão, por meio',
              link: '/carta_de_servico/trabalho-emprego/qualificacao-profissional'
            },
            
            {
              title: 'Programa Jovem Mais Jaboatão',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Programa Jovem Mais Jaboatão. Por meio da Coordenação, o projeto procura atender juventude de 15 a 29',
              link: '/carta_de_servico/trabalho-emprego/programa-jovem-mais-jaboatao'
            },
            {
              title: 'Economia Solidária',
              description:
                'DADOS GERAIS SETORES PÚEconomia SolidáriBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Economia Solidária. Fomento as ações dos empreendimentos econômicos solidários do município do Jaboatão dos Guararapes. Por meio',
              link: '/carta_de_servico/trabalho-emprego/economia-solidaria'
            },
            {
              title: 'Economia Criativa',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Economia Criativa. Fomento as ações dos empreendimentos econômicos criativos do município do Jaboatão dos Guararapes. A gestão municipal',
              link: '/carta_de_servico/trabalho-emprego/economia-criativa'
            },
            {
              title: 'Serviços ao Empregador',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Serviços ao Empregador. A Agência do Trabalhador do Jaboatão dispõe ainda de um banco de talentos qualificado',
              link: '/carta_de_servico/trabalho-emprego/secretaria-executiva-de-trabalho-qualificacao-e-empreendedorismo'
            },
            {
              title: 'Seguro Desemprego',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O Seguro Desemprego é um dos benefícios da Seguridade Social e tem a finalidade de garantir assistência financeira',
              link: '/carta_de_servico/trabalho-emprego/seguro-desemprego'
            },
            {
              title: 'Oferta de Vagas',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Ofertas de vagas. O trabalhador que estiver procurando emprego poderá realizar buscas e cadastrar seu currículo no',
              link: '/carta_de_servico/trabalho-emprego/oferta-de-vagas'
            },
            {
              title: 'Intermediação de Mão de Obra',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A intermediação de mão-de-obra é um serviço ofertado pela Secretaria Executiva de Trabalho, Qualificação e Empreendedorismo, através',
              link: '/carta_de_servico/trabalho-emprego/intermediacao-de-mao-de-obra'
            },
            {
              title: 'Emissão da Carteira de Trabalho (CTPS)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Carteira de Trabalho e Previdência Social (CTPS) é um documento obrigatório para toda pessoa que venha',
              link: '/carta_de_servico/trabalho-emprego/emissao-da-carteira-de-trabalho-ctps'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaUsers />
              </div>
              <div className="ml-4">
                <a href={item.link}>
                  <h2 className="font-bold text-2xl hover:text-[#003476] hover:underline">{item.title}</h2>
                </a>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ambiente;
