import { useState } from "react";

function App() {
  const [produtos] = useState([
    { id: 1, nome: "Arroz", preco: 20 },
    { id: 2, nome: "Feijão", preco: 10 },
    { id: 3, nome: "Macarrão", preco: 8 },
  ]);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
