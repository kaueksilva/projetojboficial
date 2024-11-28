import Auditoria from "./auditoria";
import Model from "../../../components/model-page";
import Link from "next/link";

export const metadata = {
  title: "AUDITORIA - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        titulo={"AUDITORIA"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              Início
            </Link>
            &nbsp;»
            <span className="brightness-125"> AUDITORIA</span>
          </span>
        }
      >
        <Auditoria/>
      </Model>
    </div>
  );
}
