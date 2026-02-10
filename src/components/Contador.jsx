import { useState } from "react";
import ExibirNumero from "./ExibirNumero";

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <ExibirNumero valor={numero} />
      <p>Valor: {numero}</p>
      <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
      <button onClick={diminuir}>-</button>
    </div>
  );
}
export default Contador;
