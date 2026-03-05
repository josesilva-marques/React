import { useAdicionarCarrinho } from "../hooks/useAdicionarCarrinho";

function ProductCard({ produto }) {
  const { mutate, isLoading, data, error } = useAdicionarCarrinho();

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

      <button onClick={() => mutate(produto)} disabled={isLoading}>
        {isLoading ? "Adicionando..." : "Adicionar ao Carrinho"}
      </button>

      {/* Feedback visual */}
      {data && (
        <p style={{ color: "green" }}>Produto adicionado com sucesso!</p>
      )}
      {error && <p style={{ color: "red" }}>Erro ao adicionar produto.</p>}
    </div>
  );
}

export default ProductCard;
