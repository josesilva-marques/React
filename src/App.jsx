import { useState, useEffect } from "react";
import CardProduto from "./components/CardProduto";

function App() {
  // states
  const [carrinho, setCarrinho] = useState(() => {
    const valorSalvo = localStorage.getItem("carrinho");
    return valorSalvo ? Number(valorSalvo) : 0;
  });

  useEffect(() => {
    localStorage.setItem("carrinho", carrinho);
  }, [carrinho]);

  // funções
  function comprar() {
    setCarrinho(carrinho + 1);
  }
  const produtos = [
    { id: 1, nome: "Arroz", preco: 10 },
    { id: 2, nome: "Feijão", preco: 8 },
    { id: 3, nome: "Macarrão", preco: 6 },
  ];

  // tela
  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      {carrinho === 0 ? (
        <p>🛒 Carrinho vazio</p>
      ) : (
        <p>🛒 Itens no carrinho: {carrinho}</p>
      )}
      <div style={{ display: "flex" }}>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            onComprar={comprar}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
