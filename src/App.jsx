import { useState } from "react";
import CardProduto from "./components/CardProduto";

function App() {
  const [produtos] = useState([
    { id: 1, nome: "Arroz", preco: 20 },
    { id: 2, nome: "Feijão", preco: 10 },
    { id: 3, nome: "Macarrão", preco: 8 },
  ]);

  return (
    <div>
      <h1>Catalógo de Produtos</h1>
      <div style={{ display: "flex" }}>
        {produtos.map((produto) => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
