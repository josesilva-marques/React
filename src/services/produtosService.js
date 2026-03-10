import { API_URL } from "../api/api";
export async function buscarProdutos(categoria) {
  const url = categoria
    ? `${API_URL}/products/category/${categoria}`
    : `${API_URL}/products`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();

  if (isLoading) {
    return <p>Carregando produtos...</p>;
  }
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    }}
  >
    {data.map((produto) => (
      <ProductCard key={produto.id} produto={produto} />
    ))}
  </div>;
}
