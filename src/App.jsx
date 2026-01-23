import { useState, useEffect } from "react";

function App() {
  console.log("Componente renderizou");

  const [nome, setNome] = useState("");

  useEffect(() => {
    console.log("2️⃣ useEffect SEM dependências (página abriu)");
  }, []);

  useEffect(() => {
    console.log("3️⃣ useEffect COM dependência: nome mudou →", nome);
  }, [nome]);

  return (
    <div>
      <h2>Entendendo quando o codigo roda</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite algo"
      />
    </div>
  );
}

export default App;
