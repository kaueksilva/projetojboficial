"use client";

import PdfViewer2 from "../components/PdfViewer2";

const Equipamentosas = () => {
  return (
    <div>
      <div className="p-20">
        <h1 className="text-center text-[20px]">
          Os endereços estão publicados em formato PDF. Para fazer download
          clique{" "}
          <a
            href="/pdf/Lista-Secretaria.pdf"
            download
            className="text-blue-500 underline hover:text-blue-700"
          >
            AQUI
          </a>
        </h1>
      </div>

      <div className="pb-20">
        <PdfViewer2 />
      </div>
    </div>
  );
};

export default Equipamentosas;
