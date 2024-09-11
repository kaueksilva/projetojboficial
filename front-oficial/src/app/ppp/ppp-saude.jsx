"use client"; 
import '../style/globals.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';


const PPP = () => {

const [activeTab, setActiveTab] = useState(1);

const tabs = [
    { id: 1, label: "TIPOLOGIA 2A", content: (
        <ul style={{ listStyleType: "disc" }}>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-12-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
            <strong>IMPLANTAÇÃO COM COBERTURA - (TIPOLOGIA 2)</strong> 
            </a>
        </li>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-12-USF-002-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
            <strong>PLANTA DE CIVIL - (TIPOLOGIA 2)</strong>
            </a>
        </li>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-12-USF-003-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
            <strong>PLANTA DE LAYOUT (TIPOLOGIA 2)</strong>
            </a>
        </li>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-12-USF-004-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
            <strong>PLANTA DE PISO E ACABAMENTOS - (TIPOLOGIA 2)</strong>
            </a>
        </li>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-12-USF-005-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'> 
            <strong>PLANTA DE FORRO / TETO - (TIPOLOGIA 2)</strong>
            </a>
        </li>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-12-USF-006-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
            <strong>PLANTA DE SITUAÇÃO - (TIPOLOGIA 2)</strong>
            </a>
        </li>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-12-USF-007-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
            <strong>ELEVAÇÕES - (TIPOLOGIA 2)</strong>
            </a>
        </li>
        </ul>
    )
    },
    { id: 2, label: "TIPOLOGIA 2B", content: (
        <ul style={{ listStyleType: "disc" }}>
        <li>
            <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-16-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
            <strong>ESTUDO DE IMPLANTAÇÃO - (TIPOLOGIA 2B)</strong>
            </a>
        </li>
        </ul>
    ) 
    },
    { id: 3, label: "TIPOLOGIA 3A", content:(
        <ul>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>IMPLANTAÇÃO COM COBERTURA - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-002-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CIVIL - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-003-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE LAYOUT - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-004-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE PISO E ACABAMENTOS - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-005-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE FORRO / TETO - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-006-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CORTES - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-007-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE ELEVAÇÕES - (TIPOLOGIA 3A)</strong></a></li>
        </ul>
    ) 
    },
    { id: 4, label: "TIPOLOGIA 3B", content: ( 
        <ul>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-23-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>IMPLANTAÇÃO COM COBERTURA - (TIPOLOGIA 3B)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-23-USF-002-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CIVIL - (TIPOLOGIA 3B)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-23-USF-003-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE LAYOUT - (TIPOLOGIA 3B)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-23-USF-004-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE PISO E ACABAMENTOS - (TIPOLOGIA 3B)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-23-USF-005-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE FORRO / TETO - (TIPOLOGIA 3B)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-23-USF-006-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CORTES - (TIPOLOGIA 3B)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-23-USF-007-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE ELEVAÇÕES - (TIPOLOGIA 3B)</strong></a></li>
        </ul>
    ) 
    },
    { id: 5, label: "TIPOLOGIA 3C", content: (
    <ul style={{ listStyleType: "disc" }}>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-18-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>ESTUDO DE IMPLANTAÇÃO - (TIPOLOGIA 3C)</strong></a></li>
    </ul>) 
    },
    { id: 6, label: "TIPOLOGIA 3D", content: (
    <ul style={{ listStyleType: "disc" }}>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-21-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>ESTUDO DE IMPLANTAÇÃO - (TIPOLOGIA 3D)</strong></a></li>
    </ul>)
    },
    { id: 7, label: "TIPOLOGIA 4A", content: (
    <ul style={{ listStyleType: "disc" }}>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-28-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>IMPLANTAÇÃO COM COBERTURA - (TIPOLOGIA 4A)</strong></a></li>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-28-USF-002-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CIVIL - (TIPOLOGIA 4A)</strong></a></li>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-28-USF-003-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE LAYOUT - (TIPOLOGIA 4A)</strong></a></li>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-28-USF-004-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE PISO E ACABAMENTOS - (TIPOLOGIA 4A)</strong></a></li>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-28-USF-005-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE FORRO / TETO - (TIPOLOGIA 4A)</strong></a></li>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-28-USF-006-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CORTES - (TIPOLOGIA 4A)</strong></a></li>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-28-USF-007-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE ELEVAÇÕES - (TIPOLOGIA 4A)</strong></a></li>
    </ul>) 
    },
    { id: 8, label: "TIPOLOGIA 4B", content: (
    <ul style={{ listStyleType: "disc" }}>
        <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-38-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>ESTUDO DE IMPLANTAÇÃO - (TIPOLOGIA 4B)</strong></a></li>
    </ul>)
    },
];



    const [openAccordion, setOpenAccordion] = useState(null);

    // Função para alternar o estado
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div
        className="w-full flex"
        style={{
            background: "radial-gradient(circle at center, #003476, #6EC1E4)",
            }} >


            {/* Começo da div pai */}
            <div className="flex-1 flex-col mx-80 mb-56">

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
                <h2 className="Barlow-Condensed-Bold text-4xl font-bold text-center text-[#FAC41B] drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] ">
                EDITAL DE CONCORRÊNCIA PÚBLICA INTERNACIONAL N.º [●]/20[●] 
                </h2>
            </div>

                {/* ACORDEÃO */}
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
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '1' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                        <a 
                            href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/EDITAL.pdf" 
                            className="montserrat-regular no-underline hover:underline"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            FAÇA DOWNLOAD DO EDITAL
                        </a>
                    </div>
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
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '2' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.1-APENDICE-1-PROGRAMA-DE-NECESSIDADES.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.1 - APÊNDICE 1 - PROGRAMA DE NECESSIDADES
                    </a>
                </div>
                
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
                <div 
                    className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '3' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                    style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.1-APENDICE-3-MEMORIAL-DESCRITIVO.xlsx" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.1 - APÊNDICE 3 - MEMORIAL DESCRITIVO
                    </a>
                </div>
                
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
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '4' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.1-DIRETRIZES-MINIMAS-DE-PROJETOS-E-OBRAS.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.1 - DIRETRIZES MÍNIMAS DE PROJETOS E OBRAS
                    </a>
                </div>
                
                </div>

                {/* 5.ANEXO 04.2 - APÊNDICE 1 - MOBILIÁRIOS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('5')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 04.2 - APÊNDICE 1 - MOBILIÁRIOS</h3>
                        {openAccordion === '5' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '5' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.2-APENDICE-1-MOBILIARIOS.xlsx" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.2 - APÊNDICE 1 - MOBILIÁRIOS
                    </a>
                </div>
                </div>

                {/* 6. ANEXO 04.2 - APÊNDICE 2 - EQUIPAMENTOS MÉDICO ASSISTENCIAIS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('6')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 04.2 - APÊNDICE 2 - EQUIPAMENTOS MÉDICO ASSISTENCIAIS</h3>
                        {openAccordion === '6' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '6' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.2-APENDICE-1-MOBILIARIOS.xlsx" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.2 - APÊNDICE 2 - EQUIPAMENTOS MÉDICO ASSISTENCIAIS
                    </a>
                </div>
                </div>

                {/* 7. ANEXO 04.2 - MOBILIÁRIO E EQUIPAMENTOS MÉDICO-ASSISTENCIAIS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('7')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 04.2 - MOBILIÁRIO E EQUIPAMENTOS MÉDICO-ASSISTENCIAIS</h3>
                        {openAccordion === '7' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '7' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.2-MOBILIARIO-E-EQUIPAMENTOS-MEDICO-ASSISTENCIAIS.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.2 - MOBILIÁRIO E EQUIPAMENTOS MÉDICO-ASSISTENCIAIS
                    </a>
                </div>
                </div>

                {/* 8. ANEXO 04.3 - SELEÇÃO DE TERRENOS E CONDICIONANTES */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('8')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 04.3 - SELEÇÃO DE TERRENOS E CONDICIONANTES</h3>
                        {openAccordion === '8' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '8' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-04.3-SELECAO-DE-TERRENOS-E-CONDICIONANTES.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 04.3 - SELEÇÃO DE TERRENOS E CONDICIONANTES
                    </a>
                </div>
                </div>

                {/* 9. ANEXO 05 - CADERNO DE ENCARGOS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('9')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 05 - CADERNO DE ENCARGOS</h3>
                        {openAccordion === '9' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '9' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-05-CADERNO-DE-ENCARGOS.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 05 - CADERNO DE ENCARGOS
                    </a>
                </div>
                </div>

                {/* 10. ANEXO 06 - FASE DE TRANSIÇÃO */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('10')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 06 - FASE DE TRANSIÇÃO</h3>
                        {openAccordion === '10' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '10' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-06-FASE-DE-TRANSICAO.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 06 - FASE DE TRANSIÇÃO
                    </a>
                </div> 
                </div>

                {/* 11. ANEXO 07 - DIRETRIZES MÍNIMAS SOCIOAMBIENTAIS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('11')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 07 - DIRETRIZES MÍNIMAS SOCIOAMBIENTAIS</h3>
                        {openAccordion === '11' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                {openAccordion === '11' && (
                    <div className="pl-6 bg-white p-5 rounded-lg">
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-07-DIRETRIZES-MINIMAS-SOCIOAMBIENTAIS-.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 07 - DIRETRIZES MÍNIMAS SOCIOAMBIENTAIS
                    </a>
                </div>
                )}
                </div>

                {/* 12. ANEXO 08 - SISTEMA DE MENSURAÇÃO DE DESEMPENHO */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('12')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 08 - SISTEMA DE MENSURAÇÃO DE DESEMPENHO</h3>
                        {openAccordion === '12' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '12' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-08-SISTEMA-DE-MENSURACAO-DE-DESEMPENHO.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 08 - SISTEMA DE MENSURAÇÃO DE DESEMPENHO
                    </a>
                </div> 
                </div>

                {/* 13. ANEXO 09 - MECANISMO DE PAGAMENTO*/}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('13')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 09 - MECANISMO DE PAGAMENTO</h3>
                        {openAccordion === '13' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '13' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-08-SISTEMA-DE-MENSURACAO-DE-DESEMPENHO.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 09 - MECANISMO DE PAGAMENTO
                    </a>
                </div>
                </div>

                {/* 14. ANEXO 10 - CONDIÇÕES GERAIS DA APÓLICE DE SEGUROS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('14')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 10 - CONDIÇÕES GERAIS DA APÓLICE DE SEGUROS</h3>
                        {openAccordion === '14' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                {openAccordion === '14' && (
                    <div className="pl-6 bg-white p-5 rounded-lg">
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-10-CONDICOES-GERAIS-DA-APOLICE-DE-SEGUROS.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 10 - CONDIÇÕES GERAIS DA APÓLICE DE SEGUROS
                    </a>
                </div>
                )}
                </div>

                {/* 15. ANEXO 11 - DIRETRIZES PARA O CONTRATO DE NOMEAÇÃO DA INSTITUIÇÃO FINANCEIRA DEPOSITÁRIA */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('15')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 11 - DIRETRIZES PARA O CONTRATO DE NOMEAÇÃO DA INSTITUIÇÃO FINANCEIRA DEPOSITÁRIA</h3>
                        {openAccordion === '15' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '15' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-11-DIRETRIZES-PARA-O-CONTRATO-DE-NOMEACAO-DA-INSTITUICAO-FINANCEIRA-DEPOSITARIA.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 11 - DIRETRIZES PARA O CONTRATO DE NOMEAÇÃO DA INSTITUIÇÃO FINANCEIRA DEPOSITÁRIA
                    </a>
                </div>
                </div>

                {/* 16. ANEXO 12 - VERIFICADOR INDEPENDENTE */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('16')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 12 - VERIFICADOR INDEPENDENTE</h3>
                        {openAccordion === '16' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '16' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-12-VERIFICADOR-INDEPENDENTE.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 12 - VERIFICADOR INDEPENDENTE
                    </a>
                </div>
                </div>

                {/* 17. ANEXO 13 - DEFINIÇÕES DO CONTRATO E SEUS ANEXOS */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('17')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>ANEXO 13 - DEFINIÇÕES DO CONTRATO E SEUS ANEXOS</h3>
                        {openAccordion === '17' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '17' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/ANEXO-13-DEFINICOES-DO-CONTRATO-E-SEUS-ANEXOS.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    ANEXO 13 - DEFINIÇÕES DO CONTRATO E SEUS ANEXOS
                    </a>
                </div>
                </div>

                {/* 18. MINUTA DE CONTRATO */}
                <div className="flex flex-col mb-4">
                    <button 
                    onClick={() => toggleAccordion('18')} 
                    className='flex justify-between items-center montserrat-bold bg-[#00183f] text-white text-xl pt-3 pb-3 pl-6 rounded-full'
                    >
                        <h3>MINUTA DE CONTRATO</h3>
                        {openAccordion === '18' ? <FaMinus className='mr-6' /> : <FaPlus className='mr-6' />}
                    </button>
                {/* Abre o acordeão */}
                    <div 
                        className={`pl-6 bg-white rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === '18' ? 'max-h-[500px] p-5' : 'max-h-0 p-0'}`}
                        style={{ transitionProperty: 'max-height, padding' }}
                    >
                    <a 
                    href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/MINUTA-DE-CONTRATO.pdf" 
                    className="montserrat-regular no-underline hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    MINUTA DE CONTRATO
                    </a>
                </div> 
                </div>
            </div>


            {/* Titulo2 - ANEXO 04.1 - APÊNDICE 2 - PROJETOS BÁSICOS REFERENCIAIS */}
            <div className="flex flex-col mt-24 mb-4">
                <h2 className="Barlow-Condensed-Bold text-4xl font-bold text-center text-[#FAC41B] drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
                ANEXO 04.1 - APÊNDICE 2 - PROJETOS BÁSICOS REFERENCIAIS 
                </h2>
            </div>


                {/* BOTAO DE REGULAMENTO DA AUDIÊNCIA */}
                <div className="flex flex-col mb-4">
                    <button
                        onClick={() => window.open("https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/REGULAMENTO-DA-AUDIENCIA-PUBLICA-PPP-SAUDE.pdf", "_blank", "noopener noreferrer")}
                        className='roboto-medium flex justify-center items-center text-white text-xl pt-3 pb-3 pl-6 rounded-full border-2 border-white hover:border-[#003476] bg-[#2257AE] hover:bg-white hover:text-[#003476]'
                    >
                        <h3 className="font-barlow-condensed-bold">
                            REGULAMENTO DA AUDIÊNCIA PÚBLICA PPP - SAÚDE
                        </h3>
                    </button>
                </div>
                
                
            {/* !!!ABAS!!! */}
            <div className="container mx-auto bg-white">
            
            {/* Header das Abas */}
            <div className="flex mb-4 bg-[#E4E4E4]">
                {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={`roboto-black text-lg pt-3 px-5 text-start ${
                    activeTab === tab.id
                        ? "text-[#61AACE] bg-white"
                        : "text-[#003476]"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
                ))}
            </div>

            {/* Conteúdo das Abas */}
            <div className="p-4">
                {tabs.map(
                (tab) =>
                    activeTab === tab.id && (
                    <div
                        key={tab.id}
                        className="text-[#333333] ml-9 pb-10 text-lg"
                    >
                        {tab.content}
                        
                    </div>
                    
                    )
                )}
            </div>
            </div>


            {/* Titulo3 - data room */}
            <div className="flex flex-col mt-24 mb-4">
                <h2 className="Barlow-Condensed-Bold text-4xl font-bold text-center text-[#FAC41B] drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                DATA ROOM 
                </h2>
            </div>

            {/* BOTÕES */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-5/6">

                    {/* APRESENTAÇÃO DO PROJETO */}
                    <button
                        onClick={() => window.open("https://jaboatao.pe.gov.br/wp-content/uploads/2024/01/PPP_SAUDA_DA_FAMILIA_JABOATAO___Apresentacao_do_Projeto.pdf", "_blank", "noopener noreferrer")}
                        className='roboto-medium flex justify-center items-center text-white text-xl pt-3 pb-3 pl-6 rounded-full border-2 border-white hover:border-[#003476] bg-[#2257AE] hover:bg-white hover:text-[#003476] mb-4'
                    >
                        <h3 className="font-barlow-condensed-bold">
                        APRESENTAÇÃO DO PROJETO
                        </h3>
                    </button>

                    {/* FORMULÁRIO PARA PEDIDO DE ESCLARECIMENTOS E APRESENTAÇÃO DE SUGESTÕES */}
                    <button
                        onClick={() => window.open("https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/FORMULARIO-PARA-PEDIDO-DE-ESCLARECIMENTOS-E-APRESENTACAO-DE-SUGESTOES.xlsx", "_blank", "noopener noreferrer")}
                        className='roboto-medium flex justify-center items-center text-white text-xl pt-3 pb-3 pl-6 rounded-full border-2 border-white hover:border-[#003476] bg-[#2257AE] hover:bg-white hover:text-[#003476] mb-4'
                    >
                        <h3 className="font-barlow-condensed-bold">
                        FORMULÁRIO PARA PEDIDO DE ESCLARECIMENTOS E APRESENTAÇÃO DE SUGESTÕES
                        </h3>
                    </button>

                    {/* PLANO DE NEGÓCIOS REFERENCIAL (PNR) */}
                    <button
                        onClick={() => window.open("hhttps://jaboatao.pe.gov.br/wp-content/uploads/2023/12/PLANO-DE-NEGOCIOS-REFERENCIAL-PNR.pdf", "_blank", "noopener noreferrer")}
                        className=' flex justify-center items-center text-white text-xl pt-3 pb-3 pl-6 rounded-full border-2 border-white hover:border-[#003476] bg-[#2257AE] hover:bg-white hover:text-[#003476] mb-4'
                    >
                        <h3 className="roboto-medium">
                        PLANO DE NEGÓCIOS REFERENCIAL (PNR)
                        </h3>
                    </button>

                    {/* ATA DA AUDIÊNCIA PÚBLICA PPP SAÚDE PARA FAMÍLIA */}
                    <button
                        onClick={() => window.open("https://jaboatao.pe.gov.br/wp-content/uploads/2024/02/Ata_e_Apresentacao_da_Audiencia_Publica_JAB_vf.pdf", "_blank", "noopener noreferrer")}
                        className='flex justify-center items-center text-white text-xl pt-3 pb-3 pl-6 rounded-full border-2 border-white hover:border-[#003476] bg-[#2257AE] hover:bg-white hover:text-[#003476] mb-4'
                    >
                        <h3 className="roboto-medium">
                        ATA DA AUDIÊNCIA PÚBLICA PPP SAÚDE PARA FAMÍLIA
                        </h3>
                    </button>

                    {/* APRESENTAÇÃO POWERPOINT DA  AUDIÊNCIA PÚBLICA PPP SAÚDE PARA FAMÍLIA  */}
                    <button
                        onClick={() => window.open("https://jaboatao.pe.gov.br/wp-content/uploads/2024/02/Apresentacao-do-PPP-Saude-Familia.pdf", "_blank", "noopener noreferrer")}
                        className='flex justify-center items-center text-white text-xl pt-3 pb-3 pl-6 rounded-full border-2 border-white hover:border-[#003476] bg-[#2257AE] hover:bg-white hover:text-[#003476] mb-4'
                    >
                        <h3 className="roboto-medium">
                        APRESENTAÇÃO POWERPOINT DA  AUDIÊNCIA PÚBLICA PPP SAÚDE PARA FAMÍLIA 
                        </h3>
                    </button>


                </div>

                
            </div>

        </div>
        </div>
);
};

export default PPP;
