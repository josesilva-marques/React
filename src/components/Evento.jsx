import { useState } from "react";

function Evento() {
  const [texto, setTexto] = useState("Ainda não clicou");

  function clicar() {
    setTexto("Clicou no botão!");
  }

  return (
    <div>
      <p>{texto}</p>
      <button onClick={clicar}>Clique aqui</button>
    </div>
  );
}

export default Evento;
