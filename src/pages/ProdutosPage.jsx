import { useState } from "react";
import { useProdutos } from "..//hooks/useProdutos";

const [categoria, setCategoria] = useState("");
const { data, isLoading, isError } = useProdutos(categoria);

<div style={{ marginBottom: "20px" }}>
  <button onClick={() => setCategoria("")}>Todos</button>
  <button onClick={() => setCategoria("electronics")}>Eletrônicos</button>
  <button onClick={() => setCategoria("jewelery")}>Joias</button>
  <button onClick={() => setCategoria("men's clothing")}>Masculino</button>
  <button onClick={() => setCategoria("women's clothing")}>Feminino</button>
</div>;
export function ProdutosPage() {
  return (
    <div>
      <h1>Catálogo de Produtos</h1>
    </div>
  );
}

export default ProdutosPage;
