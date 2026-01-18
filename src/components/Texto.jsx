import { useState } from "react";

function Texto() {
  const [mensagem, setMensagem] = useState("Olá");

  function mudarTexto() {
    setMensagem("Tudo bem?");
  }

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={mudarTexto}>Mudar Texto</button>
    </div>
  );
}

export default Texto;
