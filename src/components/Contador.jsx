import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  function aumentar() {
    setNumero(numero + 1);
  }
  function diminuir() {
    setNumero(numero - 1);
  }

  return (
    <div>
      <h2>Contador</h2>
      <p>Número: {numero}</p>

      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  );
}
export default Contador;
