function CardProduto({ nome, preco, onComprar }) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Preço: R$ {preco}</p>
      <button onClick={onComprar}>Comprar</button>
    </div>
  );
}

export default CardProduto;
