import { useEffect } from "react";
import VLibras from "vlibras-nextjs";

function Vlibras() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras.js";
    script.async = true;
    script.onload = () => {
      if (window.VLibras) {
        window.VLibras.init();
      }
    };
    document.head.appendChild(script);

    return () => {
      script.onload = null; // Limpando o evento após a desmontagem
    };
  }, []);

  return (
    <div>
      <VLibras forceOnload />
    </div>
  );
}

export default Vlibras;
