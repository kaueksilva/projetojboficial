import Home from "./Home";
import Popup from "../components/Popup";

export const metadata = {
  title: "HOME - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Home />
      <Popup />
    </div>
  );
}
