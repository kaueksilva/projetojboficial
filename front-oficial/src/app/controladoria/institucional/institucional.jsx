"use client";

import { TbTargetArrow } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";

import { useState } from "react";

const Institucional = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="border-t border-[#FFC719] bg-[radial-gradient(circle_at_center,#2F70A5,#073D7D)] pb-[100px]">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg my-10 p-8 text-[#003476]">
        {/* Título */}
        <h2 className="text-4xl text-center mb-4 Montserrat-Bold font-bold">SOBRE</h2>
        <div className="border-b-2 border-[#003476] w-20 mx-auto mb-6"/>

        {/* Texto principal */}
        <p className="text-center leading-relaxed mb-12 roboto-regular text-lg">
        A Controladoria Geral do Município do Jaboatão dos Guararapes – CGM,
          tem como missão assegurar a adequada aplicação dos recursos públicos
          municipais, fortalecendo a gestão, a participação social e
          contribuindo para a oferta dos serviços públicos com qualidade. O
          órgão desempenha papel fundamental na gestão pública do município,
          contribuindo para a proteção dos recursos públicos, auxiliando na
          tomada de decisões, promovendo transparência e a prestação de contas,
          identificando, avaliando e mitigando riscos, além de constantemente
          fomentar a melhoria contínua dos processos e serviços públicos
          municipais. A CGM é responsável por propor medidas, procedimentos e
          práticas que assegurem a eficiência, transparência e conformidade das
          ações administrativas, bem como, a salvaguarda dos ativos e o
          cumprimento das leis e regulamentos.
        </p>

        {/* Missão, Visão e Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <TbTargetArrow className="text-[#003476] text-4xl" />
              <h3 className="text-4xl font-bold">Missão</h3>
            </div>
            <div className="border-b-2 border-[#003476] w-16 mx-auto mb-6"/>
            <p className="text-lg">
              Assegurar a adequada aplicação dos recursos públicos, fortalecendo
              a gestão e a participação social, contribuindo para uma oferta dos
              serviços públicos com qualidade.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaEye className="text-[#003476] text-4xl" />
              <h3 className="text-4xl font-bold">Visão</h3>
            </div>
            <div className="border-b-2 border-[#003476] w-16 mx-auto mb-6"/>
            <p className="text-lg">
              Ser reconhecido pela sociedade como um órgão estratégico para a
              transparência na gestão pública, necessária ao controle social.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-3 mb-6">
              <IoDiamond className="text-[#003476] text-4xl" />
              <h3 className="text-4xl font-bold">Nossos Valores</h3>
            </div>
            <div className="border-b-2 border-[#003476] w-16 mx-auto mb-6"/>
            <ul className="text-lg">
              <li>Ética</li>
              <li>Integridade</li>
              <li>Transparência</li>
              <li>Colaboração</li>
              <li>Comprometimento</li>
            </ul>
          </div>
        </div>

        {/* Publicações */}
        <div className="mt-12">
          <h3 className="Montserrat-Bold text-3xl font-bold text-[#003476] mb-6 text-center">PUBLICAÇÕES:</h3>

          {["RELATÓRIO GERENCIAL", "ORIENTAÇÕES E RECOMENDAÇÕES", "LEGISLAÇÃO"].map((title, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleContent(index)}
                className="w-full text-left bg-[#003470] text-white text-bold py-4 px-6 rounded-md hover:bg-[#001f57] hover:text-[#ffffff] transition-all duration-500 ease-in-out transform active:translate-y-1 "
              >
                {title}
              </button>
              {activeIndex === index && (
                <div className="bg-white  p-6 border border-gray-300 mt-4 rounded-md">
                  {/* Conteúdos diferentes para cada título */}
                  {index === 0 && (
            <div>
              <h4 className="text-xl font-semibold mb-2">2024</h4>
              <ul className="list-disc pl-6">
                <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2024/05/Relatorio-1o-Trimestre-2024.pdf" target="_blank">Relatório de Gestão CGM 1º trimestre</a></li>
                <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2024/09/Relatorio-2o-Trimestre-2024-6.pdf" target="_blank">Relatório de Gestão CGM 2º trimestre</a></li>
              </ul>
              <h4 className="text-xl font-semibold mb-2 mt-4">2023</h4>
              <ul className="list-disc pl-6">
                <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/06/Informativo-CGM-Jan-a-Mai.pdf" target="_blank">Relatório de Gestão CGM 1º e 2º trimestre</a></li>
                <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/10/Informativo-CGM-2o-trimestre-Jun-a-Set-3.pdf" target="_blank">Relatório de Gestão CGM 3º trimestre</a></li>
                <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2024/02/Relatorio-Trimestral-CGM-out-a-Dez.pdf" target="_blank">Relatório de Gestão CGM 4º trimestre</a></li>
              </ul>
            </div>
                  )}
                  {index === 1 && (
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Conteúdo das ORIENTAÇÕES E RECOMENDAÇÕES</h4>
                      <a href="https://portaldatransparencia.jaboatao.pe.gov.br/orientacoes-e-recomendacoes/" target="_blank">Acesse aqui</a>
                    </div>
                  )}
                  {index === 2 && (
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Conteúdo da LEGISLAÇÃO</h4>
                      <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/09/Lei-407-A-2010-CONTROLE-INTERNO.pdf" target="_blank">Lei 407-A-2010 Controle Interno</a>
                      <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/09/Lei-824-2004-Institui-a-Controladoria.pdf" target="_blank">Lei 284 2004 - Institui a Controladoria</a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TIME CGM */}
        <div className="mt-12">
          <h3 className="Montserrat-Bold text-4xl font-bold text-white mb-6 text-center">TIME CGM:</h3>
          <div className="border-b-1 border-white w-32 mx-auto mb-6"/>
          {/* Aqui você pode adicionar mais conteúdo sobre a equipe */}
        </div>
      </div>

       {/* TIME CGM */}
       <div className="mt-12">
          <h3 className="Montserrat-Bold text-4xl font-bold text-white mb-6 jusrtify-center text-center">TIME CGM:</h3>
          <div className="border-b-2 border-white w-60 mx-auto mb-6"/>

          <img src="/images/CGM.png" alt="CGM" className="mx-auto" />

        </div>


    </section>
  );
};

export default Institucional;
