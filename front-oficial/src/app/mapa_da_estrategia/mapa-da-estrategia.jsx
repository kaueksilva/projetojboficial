"use client";

import PdfViewer from "../../components/PdfViewer";

const Mapaestrategia = () => {
  return (
    <div>
      <div className="p-20">
        <h1 className="text-center text-[20px]">
          Os endereços estão publicados em formato PDF. Para fazer download
          clique{" "}
          <a
            href="/pdf/Mapa-da-estrategia.pdf"
            download
            className="text-blue-500 underline hover:text-blue-700"
          >
            AQUI
          </a>
        </h1>
      </div>

      <div className="pb-20">
        <PdfViewer />
      </div>
    </div>
  );
};

export default Mapaestrategia;
