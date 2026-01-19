import { useState } from "react";

function Lista() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa !== "") {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  }
  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      {tarefas.length === 0 ? (
        <p>Nenhuma tarefa adicionada.</p>
      ) : (
        <ul>
          {tarefas.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Lista;
