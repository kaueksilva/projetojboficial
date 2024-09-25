import Feriados from "./feriados-municipais";
import Model from "../components/model-page";
import Link from "next/link";

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/calendar.jpg"}
        titulo={"FERIADOS MUNICIPAIS"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;» <span className="brightness-125">FERIADOS MUNICIPAIS</span>
          </span>
        }
      >
        <Feriados />
      </Model>
    </div>
  );
}
