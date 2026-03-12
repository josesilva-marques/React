console.log("Página carregou");
import { useState } from "react";
import { useProdutos } from "../hooks/useProdutos";
import ProductCard from "../components/ProductCard";

function ProdutosPage() {
  const [categoria, setCategoria] = useState("");

  const { data, isLoading, isError } = useProdutos(categoria);

  if (isLoading) {
    return <p>Carregando produtos...</p>;
  }

  if (isError) {
    return <p>Erro ao carregar produtos.</p>;
  }

  const produtos = data || [];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1>Catálogo de Produtos</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setCategoria("")}>Todos</button>
        <button onClick={() => setCategoria("electronics")}>Eletrônicos</button>
        <button onClick={() => setCategoria("jewelery")}>Joias</button>
        <button onClick={() => setCategoria("men's clothing")}>
          Masculino
        </button>
        <button onClick={() => setCategoria("women's clothing")}>
          Feminino
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default ProdutosPage;
