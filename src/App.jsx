import { useState, useEffect } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dados) => {
        setUsuarios(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro(true);
        setCarregando(false);
      });
  }, []);

  console.log(usuarios);
  if (carregando) {
    return <p>Carregando...</p>;
  }
  if (erro) {
    return <p>Ocorreu um erro ao buscar os dados 😢.</p>;
  }
  return (
    <div>
      <h1>Usuários</h1>
      {usuarios.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
