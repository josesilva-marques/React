import { useState, useEffect } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  console.log(usuarios);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <h2>{usuario.name}</h2>
          <p>{usuario.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
