function Carrinho({ total }) {
  if (total === 0) {
    return <p>🛒 Carrinho vazio</p>;
  }
  return <p>Total de itens: {total}</p>;
}

export default Carrinho;
