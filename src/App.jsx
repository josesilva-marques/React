import { useProdutos } from "./hooks/useProdutos";
import ProductCard from "./components/ProductCard";

function App() {
  const { produtos, carregando, erro } = useProdutos();

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {carregando && <p>Carregando produtos...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {!carregando && !erro && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
