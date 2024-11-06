import React, { useState } from 'react';

const CartaDeServico = ({ dadosGerais, setorPublico, duvidas }) => {
  const [activeTab, setActiveTab] = useState("dados-gerais");

  return (
    <div className="container mx-auto my-10 p-5 border rounded shadow-lg">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button 
          onClick={() => setActiveTab("dados-gerais")} 
          className={`p-4 ${activeTab === "dados-gerais" ? "font-semibold text-blue-800 border-b-2 border-blue-800" : "text-gray-600"}`}>
          DADOS GERAIS
        </button>
        <button 
          onClick={() => setActiveTab("setor-publico")} 
          className={`p-4 ${activeTab === "setor-publico" ? "font-semibold text-blue-800 border-b-2 border-blue-800" : "text-gray-600"}`}>
          SETOR PÚBLICO
        </button>
        <button 
          onClick={() => setActiveTab("duvidas")} 
          className={`p-4 ${activeTab === "duvidas" ? "font-semibold text-blue-800 border-b-2 border-blue-800" : "text-gray-600"}`}>
          DÚVIDAS
        </button>
      </div>
      
      {/* Conteúdo das abas */}
      <div className="tab-content">
        {activeTab === "dados-gerais" && (
          <div className="grid grid-cols-2 gap-8">
            <div>
              {dadosGerais}
            </div>
          </div>
        )}
        {activeTab === "setor-publico" && (
          <div>
            <h2 className="font-bold text-blue-800">ENDEREÇO</h2>
            {setorPublico}
          </div>
        )}
        {activeTab === "duvidas" && (
          <div className="grid grid-cols-2 gap-8">
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
