import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");

  function handleChange(event) {
    setNome(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Nome digitado: ${nome}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário</h2>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
