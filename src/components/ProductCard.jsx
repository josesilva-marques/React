import { useAdicionarCarrinho } from "../hooks/useAdicionarCarrinho";

function ProductCard({ produto }) {
  const { mutate, isLoading: isAdding } = useAdicionarCarrinho();

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "10px",
        padding: "16px",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img src={produto.image} alt={produto.title} />

      <h3
        style={{
          fontSize: "14px",
          minHeight: "40px",
        }}
      >
        {produto.title}
      </h3>

      <p
        style={{
          fontWeight: "bold",
          marginTop: "10px",
          color: "#2563eb",
          fontSize: "16px",
        }}
      >
        ${produto.price}
      </p>

      <button
        onClick={() => mutate(produto)}
        disabled={isAdding}
        style={{
          marginTop: "12px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          background: "#2563eb",
          color: "#fff",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {isAdding ? "Adicionando..." : "Adicionar ao carrinho"}
      </button>
    </div>
  );
}

export default ProductCard;
