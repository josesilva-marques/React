// src/services/produtosService.js

export async function adicionarCarrinho(produto) {
  // Exemplo de chamada a API
  // const response = await fetch("/api/carrinho", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(produto),
  // });
  // return response.json();

  // Para teste local
  return Promise.resolve(produto);
}

export async function buscarProdutos(categoria, pagina) {
  return Promise.resolve([
    {
      id: 1,
      nome: "Produto A",
      categoria,
      preco: 99.90,
      imagem: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      nome: "Produto B",
      categoria,
      preco: 149.90,
      imagem: "https://via.placeholder.com/150"
    }
  ]);
}
