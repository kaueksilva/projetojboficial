import React, { useState } from 'react';
import { FaStream, } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";
import { BsQuestionCircleFill } from "react-icons/bs";


const CartaDeServico = ({ dadosGerais, setorPublico, duvidas }) => {
  const [activeTab, setActiveTab] = useState("dados-gerais");

  return (
    <div className="container mx-auto my-10 p-5 border rounded shadow-lg max-w-7xl">

      {/* Tabs */}
      <div className="flex border-b mb-4">
      <button te
        onClick={() => setActiveTab("dados-gerais")} 
        className={`flex ims-center gap-2 p-4 ${
          activeTab === "dados-gerais" 
            ? "font-semibold text-blue-800 border-b-2 border-blue-800" 
            : "text-gray-600"
        }`}
      >
        <FaStream className="text-lg" />
        DADOS GERAIS
      </button>


        {/* Botão SETOR PÚBLICO */}
<button 
  onClick={() => setActiveTab("setor-publico")} 
  className={`flex items-center gap-2 p-4 ${
    activeTab === "setor-publico" 
      ? "font-semibold text-blue-800 border-b-2 border-blue-800" 
      : "text-gray-600"
  }`}
>
  <FaBuildingUser className="text-lg" />
  SETOR PÚBLICO
</button>

{/* Botão DÚVIDAS */}
<button 
  onClick={() => setActiveTab("duvidas")} 
  className={`flex items-center gap-2 p-4 ${
    activeTab === "duvidas" 
      ? "font-semibold text-blue-800 border-b-2 border-blue-800" 
      : "text-gray-600"
  }`}
>
  <BsQuestionCircleFill className="text-lg" />
  DÚVIDAS
</button>

      </div>
      
      {/* Conteúdo das abas */}
      <div className="tab-content">
        {activeTab === "dados-gerais" && (
          <div>
            <div>
              {dadosGerais}
            </div>
          </div>
        )}
        {activeTab === "setor-publico" && (
          <div>
            {setorPublico}
          </div>
        )}
        {activeTab === "duvidas" && (
          <div>
            <div>
              {duvidas}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartaDeServico;
