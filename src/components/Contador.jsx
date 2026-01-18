import { useState } from "react";

function Contador() {
  const [numero, setNumero] = useState(0);

  return (
    <div>
      <h2>Contador</h2>

      <p>Número: {numero}</p>

      <button onClick={() => setNumero(numero + 1)}>+</button>
      <button onClick={() => setNumero(numero - 1)}>-</button>
    </div>
  );
}

export default Contador;
