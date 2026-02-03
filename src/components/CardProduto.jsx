function CardProduto(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "150px",
      }}
    >
      <h3>{props.nome}</h3>
      <p>Preço: R$ {props.preco}</p>
    </div>
  );
}

export default CardProduto;
