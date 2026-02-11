import { useState } from "react";
import ExibirNumero from "./components/ExibirNumero";
import BotaoAumentar from "./components/BotaoAumentar";
import BotaoDiminuir from "./components/BotaoDiminuir";

function App() {
  const [numero, setNumero] = useState(0);

  function aumentar() {
    setNumero(numero + 1);
  }

  function diminuir() {
    setNumero(numero - 1);
  }

  return (
    <div>
      <ExibirNumero numero={numero} />
      <BotaoAumentar aumentar={aumentar} />
      <BotaoDiminuir diminuir={diminuir} />
    </div>
  );
}

export default App;
