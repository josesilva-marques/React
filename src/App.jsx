import { useState } from "react";
import CardProduto from "./components/CardProduto";




function App() {
  const [carrinho, setCarrinho] = useState(0);

function comprar(){
  setCarrinho(carrinho + 1);
}
const produto = {
  id: 1,
  nome:"Tênis Nike",
  preco: 299.90
};
    
  return (
    <div>
    <h2>🛒 carrinho: {carrinho}</h2>
    <button onClick={comprar}>Comprar</button>

    <CardProduto
      key={produto.id}
      nome={produto.nome}
      preco={produto.preco}
      onComprar={comprar}
      />
     </div>   
          
        );
      }

export default App;
