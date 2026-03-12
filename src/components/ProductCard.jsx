function ProductCard({ produto }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        background: "#fff",
      }}
    >
      <img
        src={produto.image}
        alt={produto.title}
        style={{
          height: "150px",
          objectFit: "contain",
        }}
      />

      <h3>{produto.title}</h3>

      <p>${produto.price}</p>

      <button>Adicionar ao carrinho</button>
    </div>
  );
}

export default ProductCard;
