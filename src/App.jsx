import { useState, useEffect } from "react";
import { buscarProdutos } from "./services/api";
import ProductCard from "./components/ProductCard";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const data = await buscarProdutos();
        setProdutos(data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    };

    carregar();
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {carregando && <p>Carregando produtos...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      {!carregando && !erro && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
