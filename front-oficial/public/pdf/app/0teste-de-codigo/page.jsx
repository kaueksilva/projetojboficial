"use client";
import { useState } from 'react';
import '../style/globals.css'

export default function Tabs() {


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
            <ul style={{ listStyleType: "disc" }}>
            <li>
                <a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-16-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'>
                <strong>ESTUDO DE IMPLANTAÇÃO - (TIPOLOGIA 2B)</strong>
                </a>
            </li>
            </ul>
        ) 
        },
        { id: 4, label: "TIPOLOGIA 3B", content: ( 
        <ul style={{ listStyleType: "disc" }}>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-001-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>IMPLANTAÇÃO COM COBERTURA - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-002-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CIVIL - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-003-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE LAYOUT - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-004-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE PISO E ACABAMENTOS - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-005-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE FORRO / TETO - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-006-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE CORTES - (TIPOLOGIA 3A)</strong></a></li>
            <li><a href="https://jaboatao.pe.gov.br/wp-content/uploads/2023/12/DES-ARQ-JAB-05-USF-007-RE.pdf" target="_blank" rel="noopener" className='hover:text-[#1DB2F1] transition-colors duration-300'><strong>PLANTA DE ELEVAÇÕES - (TIPOLOGIA 3A)</strong></a></li>
        </ul> ) 
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

    return (
        <div className="container mx-auto">
        {/* Header das Abas */}
        <div className="flex justify-center mb-4 border-b-2" style={{ borderColor: '#FFFFFF96' }}>
            {tabs.map((tab) => (
            <button
                key={tab.id}
                className={`roboto-bold text-lg py-2 px-4 focus:outline-none ${
                activeTab === tab.id
                    ? "text-[#61AACE] border-b-4 border-[#61AACE] "
                    : "text-[#003476]"
                }`}
                onClick={() => setActiveTab(tab.id)}
            >
                {tab.label}
            </button>
            ))}
        </div>

        {/* Conteúdo das Abas */}
        <div className="p-4 bg-white rounded-lg">
            {tabs.map(
            (tab) =>
                activeTab === tab.id && (
                <div
                    key={tab.id}
                    className="text-gray-700 "
                >
                    {tab.content}
                    
                </div>
                
                )
            )}
        </div>
        </div>
    );
}
