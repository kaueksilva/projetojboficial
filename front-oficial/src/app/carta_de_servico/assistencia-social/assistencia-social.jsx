"use client";

import React from "react";
import SideMenu from "../../../components/SideMenu";
import { FaPeopleRoof } from "react-icons/fa6";

const ambiente = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Assistência Social" />
      <div className="w-3/4 p-4">
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title:
                "Programa de Promoção do Acesso ao Mundo do Trabalho (Acessuas Trabalho)",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa de Promoção do Acesso ao Mundo do Trabalho (Acessuas Trabalho) busca a autonomia das",
              link: "/carta_de_servico/assistencia-social/programa-de-promocao-do-acesso-ao-mundo",
            },

            {
              title:
                "Serviço de Convivência e Fortalecimento de Vínculos – SCFV",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Serviço de Convivência e Fortalecimento de Vínculos – SCFV é ofertado por meio de atividades",
              link: "/carta_de_servico/assistencia-social/servico-de-convivencia-e-fortalecimento",
            },
            {
              title:
                "Proteção em Situações de Calamidades Públicas e Emergenciais",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: Serviço de Proteção em Situações de Calamidades Públicas e Emergenciais é um serviço que promove apoio",
              link: "/carta_de_servico/assistencia-social/protecao-em-situacoes-de-calamidades",
            },
            {
              title:
                "Centro de Referência Especializada em Assistência Social (CREAS)",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Centro de Referência Especializada em Assistência Social (CREAS) é a unidade pública estatal que oferta",
              link: "/carta_de_servico/assistencia-social/centro-de-referencia-especializada",
            },
            {
              title: "Programa Primeira Infância no SUAS – Criança Feliz",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa Primeira Infância no SUAS/grama Criança Feliz tem como o objetivo de apoiar e acompanhar",
              link: "/carta_de_servico/assistencia-social/programa-primeira-infancia",
            },
            {
              title: "Casa de Acolhida Estação Feliz",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: A Casa de Acolhida Estação Feliz é um serviço de gestão direta do município do Jaboatão",
              link: "/carta_de_servico/assistencia-social/casa-de-acolhida-estacao-feliz",
            },
            {
              title: "Programa BPC na Escola",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Programa BPC na Escola em questão tem como objetivo garantir o acesso e a permanência",
              link: "/carta_de_servico/assistencia-social/programa-bpc-na-escola",
            },
            {
              title: "Cadastro Único para Programas Sociais",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: Cadastro Único para Programas Sociais é o cadastro que as famílias de baixa renda podem fazer",
              link: "/carta_de_servico/assistencia-social/cadastro-unico-para-programas-sociais",
            },
            {
              title: "Centro de Referência de Assistência Social – CRAS",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: Unidade pública de atendimento às famílias e indivíduos em situação de vulnerabilidade, se caracterizando como a",
              link: "/carta_de_servico/assistencia-social/centro-de-referencia-de-assistencia-social",
            },
            {
              title: "Acolhimento Familiar",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Serviço de Acolhimento em Família Acolhedora visa ofertar acolhimento para crianças vítimas de violações de",
              link: "/carta_de_servico/assistencia-social/acolhimento-familiar",
            },
            {
              title: "Núcleo de Segurança Alimentar e Nutricional",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: A Política de Segurança Alimentar e Nutricional tem como objetivo garantir o direito de todos ao",
              link: "/carta_de_servico/assistencia-social/nucleo-de-seguranca-alimentar-e-nutricional",
            },
            {
              title: "Abrigo Santa Luzia",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Abrigo Santa Luzia é uma Organização da Sociedade Civil que executa o serviço de acolhimento",
              link: "/carta_de_servico/assistencia-social/abrigo-santa-luzia",
            },
            {
              title: "Abrigo Cristo Redentor",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Abrigo Cristo Redentor é uma organização da Sociedade Civil que executa o serviço de acolhimento",
              link: "/carta_de_servico/assistencia-social/abrigo-cristo-redentor",
            },
            {
              title: "Lar de Maria",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Lar de Maria é uma organização da Sociedade Civil que executa o serviço de acolhimento",
              link: "/carta_de_servico/assistencia-social/lar-de-maria",
            },
            {
              title: "Conselho Tutelar",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: Os Conselhos Tutelares de Jaboatão dos Guararapes são regidos pela Lei Municipal nº 1.546 /2023. São",
              link: "/carta_de_servico/assistencia-social/conselho-tutelar",
            },
            {
              title:
                "Centro de Referência Especializado para População em Situação de Rua",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: O Centro de Referência Especializado para População em Situação de Rua – Centro POP constitui-se em",
              link: "/carta_de_servico/assistencia-social/centro-de-referencia-especializado",
            },
            {
              title: "Auxílio Moradia",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: Entende-se por Auxílio Moradia o benefício destinado ao atendimento de famílias em situação de emergência em",
              link: "/carta_de_servico/assistencia-social/auxilio-moradia",
            },
            {
              title: "Auxílio Funeral",
              description:
                "DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO GERAL: Auxílio Funeral é um benefício eventual auxílio-funeral, constitui-se na prestação gratuita do serviço funerário à população",
              link: "/carta_de_servico/assistencia-social/auxilio-funeral",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <FaPeopleRoof />
              </div>
              <div className="ml-4">
                <a href={item.link}>
                  <h2 className="font-bold text-2xl hover:text-[#003476] hover:underline">
                    {item.title}
                  </h2>
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
