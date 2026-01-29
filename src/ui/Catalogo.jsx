import ItemProduto from "./ItemProduto";

function Catalogo({ produtos }) {
  if (produtos.length === 0) {
    return <p>Catálogo vazio</p>;
  }

  return (
    <ul>
      {produtos.map((produto) => (
        <ItemProduto key={produto.id} produto={produto} />
      ))}
    </ul>
  );
}

export default Catalogo;
