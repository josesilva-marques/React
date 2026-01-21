import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contatos, setContatos] = useState([]);

  function adicionarContato() {
    if (nome === "" || telefone === "") return;

    setContatos([...contatos, { nome: nome, telefone: telefone }]);

    setNome("");
    setTelefone("");
  }

  function removerContato(indexParaRemover) {
    const novaLista = contatos.filter((_, index) => index !== indexParaRemover);
    setContatos(novaLista);
  }

  return (
    <div>
      <h1>Lista de Contatos</h1>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />

      <button onClick={adicionarContato}>Adicionar</button>

      {contatos.length === 0 && <p>Nenhum contato cadastrado</p>}

      <ul>
        {contatos.map((contato, index) => (
          <li key={index}>
            {contato.nome} - {contato.telefone}
            <button onClick={() => removerContato(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
