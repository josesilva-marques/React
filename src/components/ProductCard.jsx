function ProductCard({ produto }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img
        src={produto.image}
        alt={produto.title}
        style={{ width: "100px", height: "100px", objectFit: "contain" }}
      />

      <h4 style={{ fontSize: "14px" }}>{produto.title}</h4>

      <p style={{ fontWeight: "bold" }}>R$ {produto.price}</p>
    </div>
  );
}

export default ProductCard;
