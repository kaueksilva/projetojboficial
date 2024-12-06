import Jbdosguararapes from "./jaboatao-dos-guararapes";
import Model from "../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "Jaboatão dos Guararapes - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/jaboatao.jpg"}
        titulo={"JABOATÃO DOS GUARARAPES"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">JABOATÃO DOS GUARARAPES</span>
          </span>
        }
      >
        <Jbdosguararapes />
      </Model>
    </div>
  );
}
