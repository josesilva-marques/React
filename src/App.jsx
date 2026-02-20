import { useEffect, useState } from "react";
import { useProdutos } from "./hooks/useProdutos";
import ProductCard from "./components/ProductCard";

function App() {
  const { produtos, carregando, erro } = useProdutos();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const categorias = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  // Filtragem por categoria e busca
  const produtosFiltrados = produtos
    .filter((produto) =>
      categoriaSelecionada === "all"
        ? true
        : produto.category === categoriaSelecionada,
    )
    .filter((produto) =>
      produto.title.toLowerCase().includes(busca.toLowerCase()),
    );

  // Paginação
  const produtosPorPagina = 6;
  const indiceFinal = paginaAtual * produtosPorPagina;
  const indiceInicial = indiceFinal - produtosPorPagina;
  const produtosPaginados = produtosFiltrados.slice(indiceInicial, indiceFinal);

  // Resetar página ao mudar filtros
  useEffect(() => {
    setPaginaAtual(1);
  }, [categoriaSelecionada, busca]);

  return (
    <div>
      <h1>Lista de Produtos</h1>

      {/* Botões de categoria */}
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

      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
      />

      {/* Mensagens de carregamento/erro */}
      {carregando && <p>Carregando produtos...</p>}
      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {/* Lista de produtos */}
      {!carregando && !erro && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {produtosPaginados.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}

      {/* Paginação */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setPaginaAtual(paginaAtual - 1)}
          disabled={paginaAtual === 1}
        >
          Anterior
        </button>
        <span style={{ margin: "0 10px" }}>Página {paginaAtual}</span>
        <button
          onClick={() => setPaginaAtual(paginaAtual + 1)}
          disabled={indiceFinal >= produtosFiltrados.length}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default App;
