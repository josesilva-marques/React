import { useState, useEffect } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProdutos(data);
        setCarregando(false);
      })
      .catch(() => setCarregando(false));
  }, []);
  return (
    <div>
      <h1>Lista de Produtos</h1>
      {carregando && <p>Carregando...</p>}
      {produtos.map((produto) => (
        <div
          key={produto.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h3>{produto.title}</h3>
          <p>R$ {produto.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
