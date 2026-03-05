export async function buscarProdutos(categoria) {
  let url = "https://fakestoreapi.com/products";

  if (categoria && categoria !== "all") {
    url = `https://fakestoreapi.com/products/category/${categoria}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return await response.json();
}

export async function adicionarCarrinho(produto) {
  const response = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      date: new Date().toISOString(),
      products: [{ productId: produto.id, quantity: 1 }],
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao adicionar produto ao carrinho");
  }

  return await response.json();
}
