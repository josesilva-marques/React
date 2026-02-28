import { useState } from "react";
import { useProdutos } from "./hooks/useProdutos";

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
    <div>
      <h1>Catálogo</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {produtosPaginados.map((produto) => (
          <div
            key={produto.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={produto.image}
              alt={produto.title}
              style={{ width: "100%", height: "100px", objectFit: "contain" }}
            />
            <h4 style={{ fontSize: "14px" }}>{produto.title}</h4>
            <p style={{ fontWeight: "bold" }}>R${produto.price}</p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => handleCategoriaChange("all")}>Todos</button>
        <button onClick={() => handleCategoriaChange("electronics")}>
          Eletrônicos
        </button>
        <button onClick={() => handleCategoriaChange("jewelery")}>Joias</button>
        <button onClick={() => handleCategoriaChange("men's clothing")}>
          Masculino
        </button>
        <button onClick={() => handleCategoriaChange("women's clothing")}>
          Feminino
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
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
