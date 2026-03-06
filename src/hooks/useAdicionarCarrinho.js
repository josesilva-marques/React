import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adicionarCarrinho } from "../services/produtoService";

export function useAdicionarCarrinho() {
  return useMutation({
    mutationFn: adicionarCarrinho,

    onMutate: async (novoProduto) => {
      console.log("Produto adicionado otimisticamente", novoProduto);
    },
    onError: (error) => {
      console.log("Erro ao adicionar produto", error);
    },
    onSucess: () => {
      console.log("Produto confirmado no carrinho");
    },
  });
}
