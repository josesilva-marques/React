import { useState } from "react";
import CardProduto from "./components/CardProduto";

function App() {
  const [carrinho, setCarrinho] = useState(0);
  const produtos = [
    { id: 1, nome: "Arroz", preco: 20 },
    { id: 2, nome: "Feijão", preco: 10 },
    { id: 3, nome: "Macarrão", preco: 8 },
  ];

  function comprar() {
    setCarrinho(carrinho + 1);
  }
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
