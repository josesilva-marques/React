import { useState } from "react";
import { useProdutos } from "./hooks/useProdutos";
import ProductCard from "./components/ProductCard";

function App() {
  const [categoria, setCategoria] = useState("all");
  const [pagina, setPagina] = useState(1);
  const { data: produtos, isLoading, isError, error } = useProdutos(categoria);

  const handleCategoriaChange = (novaCategoria) => {
    setCategoria(novaCategoria);
    setPagina(1);
  };

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro: {error.message}</p>;

  const produtosPorPagina = 6;

  const inicio = (pagina - 1) * produtosPorPagina;
  const fim = inicio + produtosPorPagina;
  const produtosPaginados = produtos.slice(inicio, fim);
  const totalPaginas = Math.ceil(produtos.length / produtosPorPagina);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Produtos</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {produtosPaginados.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          disabled={pagina === 1}
          onClick={() => setPagina((old) => old - 1)}
        >
          Anterior
        </button>

        <span style={{ margin: "0 10px" }}>
          Página {pagina} de {totalPaginas}
        </span>

        <button
          disabled={pagina === totalPaginas}
          onClick={() => setPagina((old) => old + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default App;
