"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { IoSchoolSharp } from "react-icons/io5";

const Animais = () => {
  return (
    <div className="flex mx-72 my-10">
      <SideMenu activeItem="animais" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Matrícula On-line',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Forma de ingresso para os estudantes novatos que desejam estudar na Rede Pública de Ensino da Secretaria',
              link: '#'
            },
            {
              title: 'Solicitação de Documentação das Escolas Extintas',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Os documentos das escolas extintas ficam arquivados na Secretaria Municipal de Educação. Caso a escola na qual',
              link: '#'
            },
            {
              title: 'Transferência Escolar',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Os pais ou responsáveis devem comparecer à unidade de ensino na qual o estudante está matriculado, para',
              link: '#'
            },
            {
              title: 'Transferência Escolar em Rede (Estudantes Veteranos)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Consiste na transferência dos estudantes veteranos de uma unidade de ensino da nossa rede para outra também',
              link: '#'
            },
            {
              title: 'Transporte Escolar',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Consiste no deslocamento do estudante matriculado em nossa Rede de Ensino da sua moradia ou ponto previamente',
              link: '#'
            },
            {
              title: 'Sala de Recursos Multifuncionais',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Os (As) estudantes com deficiência, Transtornos Globais do Desenvolvimento, Transtorno do Espectro Autista e Altas Habilidades ou',
              link: '#'
            },
            {
              title: 'Material Escolar',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO:  Material escolar. Site da Secretaria Municipal de Educação REQUISITOS: Ser estudante da Rede Pública Municipal do Jaboatão',
              link: '#'
            },
            {
              title: 'Atendimento Domiciliar Educacional',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Atendimento educacional especializado prestado aos alunos impossibilitados de frequentar as aulas em razão de tratamento de saúde',
              link: '#'
            },
            {
              title: 'Fardamento Escolar',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Fardamento escolar Site da Secretaria Municipal de Educação REQUISITOS: Ser estudante da Rede Pública Municipal do Jaboatão',
              link: '#'
            },
            {
              title: 'Matrícula em Turmas da Educação Infantil, Ensino Fundamental e Eja a qualquer tempo',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: Forma de ingresso para os estudantes que desejam estudar na Rede Pública de Ensino da Secretaria Municipal',
              link: '#'
            },
            {
              title: 'Programa de Leitura “Escola Que Lê Faz a Mudança Acontecer”',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: Programa de Leitura “Escola que lê faz a mudança acontecer”. O Programa tem como objetivo incentivar o',
              link: '#'
            },
            {
              title: 'Instituições Conveniadas (Filantrópicas, Comunitárias e Confessionais)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO: As entidades mantenedoras e/ou representativas de instituições educacionais privadas que sejam comunitárias, filantrópicas ou confessionais, sem fins',
              link: '#'
            },
            {
              title: 'Curso Preparatório (Programa Jaboatão Prepara)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO O Programa Jaboatão Prepara é um curso preparatório para ingresso dos nossos estudantes dos 9º anos nas',
              link: '#'
            },
            {
              title: 'Curso de Libras',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Curso oferecido à população do município do Jaboatão dos Guararapes, preferencialmente aos profissionais das nossas unidades de',
              link: '#'
            },
            {
              title: 'Curso de Braille (Tiflologia)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Curso oferecido para capacitação dos profissionais das nossas unidades de ensino da Secretaria Municipal de Educação e Esportes,',
              link: '#'
            },
            {
              title: 'Credenciamento de Novas Unidades Municipais de Ensino Públicas ou Privadas',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A Secretaria Municipal de Educação e Esportes do Jaboatão dos Guararapes se responsabiliza pelo credenciamento, correção e',
              link: '#'
            },
            {
              title: 'Correção de Fluxo',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Os estudantes, matriculados nos anos iniciais do Ensino Fundamental (1º ao 5º ano), não alfabetizados, em defasagem',
              link: '#'
            },
            {
              title: 'Alimentação Escolar',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO  Trata-se do fornecimento de alimentação para todos os estudantes da educação básica, através do Programa Nacional de',
              link: '#'
            },
            {
              title: 'Apoio ao Estudante com Deficiência',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Os estudantes com deficiência, mediante solicitação da escola onde estejam matriculados, recebem o apoio de um profissional,',
              link: '#'
            },
            {
              title: 'Certificado e Histórico Escolar',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Documento recebido pelo estudante das unidades de ensino da Rede Pública Municipal do Jaboatão dos Guararapes, ao',
              link: '#'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <IoSchoolSharp />
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

export default Animais;
