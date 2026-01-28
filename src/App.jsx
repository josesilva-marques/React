import "./App.css";
import { useState } from "react";
import Header from "./ui/Header";
import FormContato from "./ui/FormContato";
import ListaContatos from "./ui/ListaContatos";

function App() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  function adicionarContato(e) {
    e.preventDefault();

    const novoContato = {
      id: Date.now(),
      nome,
      telefone,
    };

    setContatos([...contatos, novoContato]);
    setNome("");
    setTelefone("");
  }

  function removerContato(id) {
    setContatos(contatos.filter((c) => c.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <FormContato
        nome={nome}
        telefone={telefone}
        setNome={setNome}
        setTelefone={setTelefone}
        adicionarContato={adicionarContato}
      />
      <ListaContatos contatos={contatos} removerContato={removerContato} />
    </div>
  );
}
export default App;
