"use client";

import React, { useEffect } from 'react';

const PesquisaSatisfacao = () => {
  useEffect(() => {
    // Lógica do carregaPagina
    let tituloServico = document.querySelector('h1.elementor-heading-title.elementor-size-default')?.innerText;
    let categoryService = document.querySelector('span.elementor-post-info__terms-list-item')?.innerText;

    if (categoryService === "SERVIÇOS DE ALVARÁ, ANÁLISE E AUTORIZAÇÕES") {
      categoryService = "GESTÃO URBANA";
    }

    let title = document.querySelector('.title');
    let category = document.querySelector('.category');
    
    if (title && category) {
      title.value = tituloServico;
      category.value = categoryService;
    }
  }, []);

  return (
    // <div className="max-w-md mx-auto m-8 p-6 border border-gray-300 rounded-lg shadow-lg">
    //   <h1 className="text-center text-2xl font-bold text-[#003476] mb-6">Pesquisa de Satisfação</h1>

    //   <label htmlFor="opcao" className="block text-center text-[#00224e] mb-4">Foram informações úteis?</label>

    //   <select
    //     id="opcao"
    //     className="w-full p-2 mb-6 border border-gray-300 rounded-lg"
    //   >
    //     <option>Selecione</option>
    //     <option>Não</option>
    //     <option>Sim</option>
    //   </select>

    //   <div id="oculto1" className="hidden"></div>
    //   <div id="oculto2" className="hidden"></div>

    //   <div className="flex justify-center">
    //     <button
    //       type="submit"
    //       id="botao-formulario"
    //       className="px-6 py-2 text-white bg-[#014daf] rounded-full transition-colors hover:bg-[#002e6a]"
    //     >
    //       Enviar
    //     </button>
    //   </div>
    // </div>
    <div></div>
  );
};

export default PesquisaSatisfacao;
