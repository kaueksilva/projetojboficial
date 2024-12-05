"use client";

import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Exibir o popup ao carregar a página
    setIsVisible(true);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-4/5 max-w-md">
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
          >
            &times;
          </button>
          <a
            href="https://matricula-online-2025.jaboatao.pe.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/popup/POPUP.png"
              alt="Promoção"
              className="rounded-md cursor-pointer w-full"
            />
          </a>
        </div>
      </div>
    )
  );
};

export default Popup;
