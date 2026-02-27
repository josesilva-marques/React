export async function buscarProdutos(categoria) {
  let url = "https://fakestoreapi.com/products";

  if (categoria && categoria !== "all") {
    url = `https://fakestoreapi.com/products/category/${categoria}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}
