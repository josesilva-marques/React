function ProductCard({ produto, adicionarAoCarrinho }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <img
        src={produto.image}
        alt={produto.title}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />
      <h4>{produto.title}</h4>
      <p>R${produto.price}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
    </div>
  );
}

export default ProductCard;
