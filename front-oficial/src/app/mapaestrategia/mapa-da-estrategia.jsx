"use client";

import PdfViewer from '../components/PdfViewer';

const Maparegiona1 = () => {
  return (
    <div>
      <div className="p-20">
        <h1 className="text-center text-[20px]">
          O mapa publicado está em formato PDF. Caso não consiga abrir o
          arquivo, clique aqui para fazer o download do arquivo em PDF.
        </h1>
      </div>

      <div className='pb-20'>
        <PdfViewer />
      </div>
    </div>
  );
};

export default Maparegiona1;
