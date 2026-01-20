import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");

  function enviarFormulario() {
    alert("Você digitou: " + nome);
  }
  return (
    <div>
      <h2>Formulário</h2>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={enviarFormulario}>Enviar</button>
    </div>
  );
}
export default Formulario;
