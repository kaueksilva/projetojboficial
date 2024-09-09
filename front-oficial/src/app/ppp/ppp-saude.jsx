"use client"; 
import '../style/globals.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';


const PPP = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    // Função para alternar o estado
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div
        className="w-full flex"
        style={{
            background: "radial-gradient(circle, #003476, #6EC1E4)",
            }} >


            {/* Começo da div pai */}
            <div className="flex-1 flex-col mx-80">

            {/* texto e imagem */}
                <div className="flex flex-col bg-white mt-36 pb-20 pt-14 pl-20 pr-20 rounded-tl-[100px] rounded-br-[100px]">
                    <p className='montserrat-regular'>
                    O MUNICÍPIO DO JABOATÃO DOS GUARARAPES, por intermédio da SECRETARIA
                    DE SAÚDE, comunica a ABERTURA DE CONSULTA PÚBLICA e a REALIZAÇÃO DE
                    AUDIÊNCIA PÚBLICA referentes às minutas de edital e contratação de
                    projeto-piloto de Parceria Público-Privada, na modalidade concessão
                    administrativa, para construção, modernização e serviços de
                    manutenção predial e de equipamentos, bem como de vigilância e
                    limpeza, de 5 (cinco) Unidades de Saúde da Família (USF), pelo prazo
                    de 19 anos. <br/>
                    <br/> 
                    São objetivos da audiência e da consulta pública: (i)
                    assegurar transparência e participação social no processo de
                    estruturação do projeto; (ii) coletar contribuições (opiniões,
                    críticas, sugestões, dúvidas, etc.) formuladas pela sociedade civil,
                    com vistas ao aperfeiçoamento das minutas supracitadas.<br/>
                    <br/> 
                    A AUDIÊNCIA PÚBLICA será realizada em ambiente virtual, através de
                    VIDEOCONFERÊNCIA, com transmissão ao vivo, no dia 20/12/2023, das 9h
                    às 11h. Os interessados em participar deverão acessar o link <b>GOOGLE
                    MEETS</b>. Na ocasião, serão apresentados os principais aspectos que
                    compõem o projeto e, respeitadas as limitações de tempo e ordem de
                    inscrições, coletadas as contribuições e dúvidas dos participantes.<br/> 
                    <br/> 
                    A CONSULTA PÚBLICA ocorrerá entre os dias 06/12/2023 e 19/01/2024
                    até às 23h59. As contribuições deverão ser encaminhadas ao endereço
                    eletrônico oficial pppsaude@jaboatao.pe.gov.br, por escrito, no
                    formato do modelo disponível neste sítio, em arquivo editável. Após
                    finalização da consulta pública, as contribuições, acompanhadas das
                    respostas e considerações da Prefeitura de Jaboatão dos Guararapes,
                    serão publicadas no mesmo sítio eletrônico, previamente à abertura
                    do processo licitatório. Não serão consideradas contribuições que
                    não observem o formato estabelecido ou cujo teor não se relacione
                    com o objeto da consulta. <br/> 
                    <br/> 
                    Potenciais licitantes interessados em
                    sanar dúvidas referentes às minutas de edital e contrato poderão
                    participar de reuniões virtuais de ROAD SHOW, com duração de até uma
                    hora, a serem realizadas entre os dias 08/01/2024 a 19/01/2024,
                    mediante agendamento a ser solicitado até o dia 05/01/2024, por meio
                    do endereço eletrônico: pppsaude@jaboatao.pe.gov.br.
                    </p>
                    <img
                    src= {"/images/usf-ppp.png"}
                    className="mt-8 w-auto h-auto mx-20 rounded-tl-[100px] rounded-br-[100px]"
                    />
            </div>

                {/* Titulo 1 */}
            <div className="flex flex-col mt-24 mb-4">
                <h2 className="barlow-condensed-bold text-4xl font-bold text-center text-[#FAC41B] drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                EDITAL DE CONCORRÊNCIA PÚBLICA INTERNACIONAL N.º [●]/20[●] 
                </h2>
            </div>
                
                {/* Acordeão */}
            <div className="flex flex-col">
                {/* 1.EDITAL */}
                <div className="flex flex-col mb-4">
                    <button 
                        onClick={() => toggleAccordion('1')} 
                        className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                    <h3>EDITAL</h3>
                    {openAccordion === '1' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                {openAccordion === '1' && (
                <div className="pl-6 bg-white p-5 rounded-lg overflow-hidden transition-[max-height] duration-500">
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/EDITAL.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    FAÇA DOWNLOAD DO EDITAL
                    </a>
                </div>
                )}
                </div>

                {/* 2. ANEXO 04.1 - APÊNDICE 1 - PROGRAMA DE NECESSIDADES */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('2')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 04.1 - APÊNDICE 1 - PROGRAMA DE NECESSIDADES</h3>
                        {openAccordion === '2' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>

                {/* Abre o acordeão */}
                {openAccordion === '2' && (
                    <div className="pl-6 bg-white p-5 rounded-lg">
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.1-APENDICE-1-PROGRAMA-DE-NECESSIDADES.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.1 - APÊNDICE 1 - PROGRAMA DE NECESSIDADES
                    </a>
                </div>
                )}
                </div>

                {/* 3.ANEXO 04.1 - APÊNDICE 3 - MEMORIAL DESCRITIVO  */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('3')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 04.1 - APÊNDICE 3 - MEMORIAL DESCRITIVO</h3>
                        {openAccordion === '3' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                {openAccordion === '3' && (
                    <div className="pl-6 bg-white p-5 rounded-lg">
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.1-APENDICE-3-MEMORIAL-DESCRITIVO.xlsx" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.1 - APÊNDICE 3 - MEMORIAL DESCRITIVO
                    </a>
                </div>
                )}
                </div>

                {/* 4.ANEXO 04.1 - DIRETRIZES MÍNIMAS DE PROJETOS E OBRAS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('4')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 04.1 - DIRETRIZES MÍNIMAS DE PROJETOS E OBRASO</h3>
                        {openAccordion === '4' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                {openAccordion === '4' && (
                    <div className="pl-6 bg-white p-5 rounded-lg">
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.1-DIRETRIZES-MINIMAS-DE-PROJETOS-E-OBRAS.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.1 - DIRETRIZES MÍNIMAS DE PROJETOS E OBRAS
                    </a>
                </div>
                )}
                </div>


            </div>

            {/* Titulo2 - ANEXO 04.1 - APÊNDICE 2 - PROJETOS BÁSICOS REFERENCIAIS */}
            <div className="flex flex-col mt-24 mb-4">
                <h2 className="barlow-condensed-bold text-4xl font-bold text-center text-[#FAC41B] drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
                ANEXO 04.1 - APÊNDICE 2 - PROJETOS BÁSICOS REFERENCIAIS 
                </h2>
            </div>


            {/* BOTAO DE REGULAMENTO DA AUDIÊNCIA */}
            <div className="flex flex-col mb-4">
            <a
                href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/REGULAMENTO-DA-AUDIENCIA-PUBLICA-PPP-SAUDE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className='flex justify-center items-center montserrat-bold text-white text-xl pt-3 pb-3 pl-6 rounded-full border-2 border-white hover:border-[#003476] bg-[#2257AE] hover:bg-white hover:text-[#003476]'
            >
                <h3>REGULAMENTO DA AUDIÊNCIA PÚBLICA PPP - SAÚDE</h3>
            </a>

            
            </div>
            
            
            <div>
                
            </div>

            {/* Titulo3 - data room */}
            <div className="flex flex-col mt-24 mb-4">
                <h2 className="barlow-condensed-bold text-4xl font-bold text-center text-[#FAC41B] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                DATA ROOM 
                </h2>
            </div>
        </div>
        </div>
);
};

export default PPP;
