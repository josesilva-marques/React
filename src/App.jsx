import { useState, useEffect } from "react";
import Header from "./components/Header";
import Produto from "./components/Produto";
import Carrinho from "./components/Carrinho";

function App() {
  // states
  const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem("carrinho");
    return salvo ? Number(salvo) : 0;
  });

  useEffect(() => {
    localStorage.setItem("carrinho", carrinho);
  }, [carrinho]);

  // funções
  function comprar() {
    setCarrinho(carrinho + 1);
  }

  // tela
  return (
    <div>
      <Header total={carrinho} />
      <Produto nome="Produto A" onComprar={comprar} />
      <Produto nome="Produto B" onComprar={comprar} />
      <Carrinho total={carrinho} />
    </div>
  );
}

export default App;

//
