import { useState, useEffect } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Erro ao buscar produtos: ");
        }

        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    };

    buscarProdutos();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {carregando && <p>Carregando produtos...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {!carregando &&
        !erro &&
        produtos.map((produto) => (
          <div
            key={produto.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{produto.title}</h3>
            <p>R$ {produto.price}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
