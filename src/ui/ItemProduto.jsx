function ItemProduto({ produto }) {
  function comprar() {
    alert(`Você clicou em comprar ${produto.nome}`);
  }
  return (
    <li className="produto">
      <span>{produto.nome}</span>
      <strong>R$ {produto.preco}</strong>
      <button onClick={comprar}>Comprar</button>
    </li>
  );
}
export default ItemProduto;
