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

// Nova função para adicionar ao carrinho
export async function adicionarCarrinho(produto) {
  const response = await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });

  if (!response.ok) {
    throw new Error("Erro ao adicionar produto ao carrinho");
  }

  return response.json();
}
