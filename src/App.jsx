import { useState } from "react";
import { useProdutos } from "./hooks/useProdutos";
import ProductCard from "./components/ProductCard";

function App() {
  const { produtos, carregando, erro } = useProdutos();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");
  const [busca, setBusca] = useState(""); // <-- ADICIONE ESTA LINHA

  const categorias = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const produtosFiltrados = produtos
    .filter(
      (produto) =>
        categoriaSelecionada === "all"
          ? true
          : produto.category === categoriaSelecionada, // <-- corrigido: era "produtos.category"
    )
    .filter((produto) =>
      produto.title.toLowerCase().includes(busca.toLowerCase()),
    );

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
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
      />

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
