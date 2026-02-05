function CardProduto({ nome, preco, onComprar }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "150px",
      }}
    >
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
      <button onClick={onComprar}>Comprar</button>
    </div>
  );
}

export default CardProduto;
