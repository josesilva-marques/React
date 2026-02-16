export const buscarProdutos = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos: ");
  }

  const data = await response.json();
  return data;
};
