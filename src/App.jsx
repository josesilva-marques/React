import { useProdutos } from "./hooks/useProdutos";

function App() {
  const { data: produtos, isLoading, isError, error } = useProdutos();

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro: {error.message}</p>;

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
        {produtos.map((produto) => (
          <div
            key={produto.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h3>{produto.title}</h3>
            <img src={produto.image} alt={produto.title} width="100" />
            <p>R$ {produto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
