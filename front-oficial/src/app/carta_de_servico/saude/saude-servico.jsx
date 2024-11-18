"use client";

import React from 'react';
import SideMenu from '../../../components/SideMenu';
import { GiHealthNormal } from "react-icons/gi";

const ambiente = () => {
  return (
    <div className="flex mx-4 sm:mx-10 md:mx-20 lg:mx-36 xl:mx-72 my-10">
      <SideMenu activeItem="Saude" />
      <div className="w-3/4 p-4">        
        {/* Conteúdo principal */}
        <div className="mt-4">
          {[
            {
              title: 'Marcação de Consultas e Exames – Central de Regulação na Carta de Serviço da Saúde',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO A regulação é o mecanismo de gestão que possibilita que o usuário seja atendidopelos diferentes serviços de saúde especializados da rede própria e conveniada noSUS. A organização, controle, gerenciamento e priorização de acesso',
              link: '/carta_de_servico/saude/marcacao-de-consultas-e-exames-central-de-regulacao-na-carta-de-servico-da-saude' 
            },
            
            {
              title: 'Centro de Vigilância Ambiental (CVA)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Centro de Vigilância Ambiental (CVA) – Jaboatão é o primeiro município do estado a contar com um CVA equipado com área isolada para análise de zoonoses. O equipamento, responsável por atuar na observação,',
              link: '/carta_de_servico/saude/centro-de-vigilancia'
            },
            {
              title: 'Centro de Referência em Saúde do Trabalhador (CEREST)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Centro de Referência em Saúde do Trabalhador (CEREST) – É um local de atendimento especializado em Saúde do Trabalhador. Além de atender diretamente o trabalhador, serve como uma fonte geradora de conhecimento, ou',
              link: '/carta_de_servico/saude/centro-de-referencia-em-saude-do-trabalhador'
            },
            {
              title: 'Central de informações Estratégicas de Vigilância em Saúde (CIEVS-PE))',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Central de informações Estratégicas de Vigilância em Saúde (CIEVS-PE) – É uma unidade componente da Rede Nacional de Monitoramento e Respostas às Emergências em Saúde Pública, que tem por objetivos a articulação de',
              link: '/carta_de_servico/saude/central-de-informacoes-estrategicas-de-vigilancia-em-saude'
            },
            {
              title: 'UBS',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO UBS – Unidade Básica de Saúde – O que é uma UBS? De acordo com a PNAB (Política Nacional de Atenção Básica) todos os estabelecimentos de saúde que prestem ações e serviços de',
              link: '/carta_de_servico/saude/ubs'
            },
            {
              title: 'Ouvidoria SUS',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Ouvidoria – É canal democrático de comunicação e articulação com a Gestão Municipal no sentido de melhorar a qualidade dos serviços de saúde prestados. O (a) cidadão (ã) pode procurar o atendimento da',
              link: '/carta_de_servico/saude/ouvidoria-sus'
            },
            {
              title: 'Laboratório Municipal',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Laboratório Municipal – Possui a missão de usar de excelência técnica nas análises laboratoriais, a fim de atender de forma adequada e completa as necessidades da população atendidas nas unidades da Rede Municipal',
              link: '/carta_de_servico/saude/laboratorio-municipal'
            },
            {
              title: 'Centro de Tratamento e Abordagem a Fumantes',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Centro de Tratamento e Abordagem ao Fumante – Conta com equipe multidisciplinar composta por: médico, assistente social, psicólogo, auxiliares de enfermagem e auxiliar administrativo. O serviço atende por demanda espontânea, sendo realizadas atividades',
              link: '#'
            },
            {
              title: 'Centro de Testagem e Aconselhamento em IST/AIDS – CTA',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Centro de Testagem e Aconselhamento em IST/AIDS – CTA – Atende a população realizando testes de HIV, sífilis e hepatite B, além de ser uma referência no atendimento às doenças sexualmente transmissíveis (DST).',
              link: '#'
            },
            {
              title: 'Centro de Referência em Saúde da Mulher (CRSM)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Centro de Referência da Mulher – Presta assistência de média complexidade às mulheres do município. Serviços oferecidos: – Tratamento de Lesões;– Colposcopia;– Ultrassonografia;– Atendimento ginecológico;– Mastologia;– Climatério;– Planejamento Reprodutivo;– Pré-natal de alto risco;',
              link: '#'
            },
            {
              title: 'Academia da Saúde',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Academia de Saúde. É uma estratégia de promoção e produção do cuidado com a saúde, a partir da implantação de espaços públicos. Contam com infraestrutura apropriada, equipamentos e profissionais qualificados. As academias da',
              link: '#'
            },
            {
              title: 'Centro de Especialidades Odontológicas (CEO)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO  Centro de Especialidades Odontológicas (CEO) visa suprir a necessidade da população em reabilitação oral. Realizam diagnóstico bucal, com ênfase no diagnóstico e detecção do câncer bucal, periodontia especializada, cirurgia oral menor dos tecidos',
              link: '#'
            },
            {
              title: 'Serviço de Atendimento Domiciliar (SAD)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Serviço de Atendimento Domiciliar (SAD) – É uma forma de atenção à saúde, oferecida na moradia do paciente e caracterizado por um conjunto de ações de promoção à saúde, prevenção e tratamento des',
              link: '#'
            },
            {
              title: 'Rede de Atenção Psicossocial (RAPS)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Rede de Atenção Psicossocial (RAPS) – Tem como finalidade a ampliação e articulação de pontos de atenção a saúde para pessoas com sofrimento ou transtorno mental e com necessidades decorrentes do uso de',
              link: '#'
            },
            {
              title: 'Policlínica da Criança e do Adolescente',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Policlínica da Criança e do Adolescente, antigo Centro de Referência da Saúde da Criança e do Adolescente (Cresça), tem como perfil o atendimento clínico voltado à habilitação e reabilitação de jovens entre 0',
              link: '#'
            },
            {
              title: 'Cuidar Bem',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Cuidar bem – É um programa de transporte eletivo criado pela Secretaria de Saúde da Prefeitura Municipal de Jaboatão dos Guararapes, que tem o objetivo de fornecer transporte de qualidade para usuários dos',
              link: '#'
            },
            {
              title: 'Controle de Animais Suspeitos (Diagnóstico) com Esporotricose ou Leishmaniose',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Controle de animais suspeito (diagnóstico) com esporotricose ou leishmaniose. A Vigilância Ambiental em Saúde constitui-se no conjunto de ações e serviços que proporcionam o conhecimento e a detecção de fatores de risco do',
              link: '#'
            },
            {
              title: 'Serviços de Atenção Especializada em HIV-AIDS (SAE)',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Serviços de Atenção Especializada em HIV-AIDS (SAE) – O SAE é uma unidade assistencial de caráter ambulatorial, que propícia o vínculo do paciente portador do vírus HIV/Aids e outras IST’s (Infecções Sexualmente Transmissíveis).',
              link: '#'
            },
            {
              title: 'Centro de Reabilitação e Fisioterapia',
              description:
                'DADOS GERAIS SETORES PÚBLICOS DÚVIDAS DADOS GERAIS DESCRIÇÃO Centro de Reabilitação e Fisioterapia – Visam à melhoria da qualidade de vida dos usuários, a reintegração à vida social e a atividade laboral, propiciando recuperação da condição física, fonoaudiologia e psicossocial no',
              link: '#'
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start mb-4 border-b pb-4">
              <div className="w-16 h-16 text-[#003476] text-9xl flex items-center justify-center rounded">
                <GiHealthNormal  />
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
