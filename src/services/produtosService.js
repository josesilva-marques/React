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
}
