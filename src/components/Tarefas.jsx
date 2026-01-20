import { useState } from "react";

function Tarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarTarefa() {
    if (novaTarefa !== "") {
      setLista([...lista, novaTarefa]);
      setNovaTarefa("");
    }
  }

  return (
    <div>
      <h2>Minhas Tarefas</h2>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tarefas;
