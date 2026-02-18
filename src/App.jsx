import { useState } from "react";
import { useProdutos } from "./hooks/useProdutos";
import ProductCard from "./components/ProductCard";

function App() {
  const { produtos, carregando, erro } = useProdutos();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");

  const categorias = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const produtosFiltrados =
    categoriaSelecionada === "all"
      ? produtos
      : produtos.filter((produto) => produto.category === categoriaSelecionada);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            style={{ marginRight: "10px" }}
          >
            {cat}
          </button>
        ))}
      </div>

      <h1>Lista de Produtos</h1>
      {carregando && <p>Carregando produtos...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {!carregando && !erro && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
