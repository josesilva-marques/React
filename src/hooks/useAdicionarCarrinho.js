import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adicionarCarrinho } from "../services/produtosService"; // corrigido: produtosService

export function useAdicionarCarrinho() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: adicionarCarrinho,

    onMutate: async (novoProduto) => {
      console.log("Produto adicionado otimisticamente", novoProduto);
    },
    onError: (error) => {
      console.log("Erro ao adicionar produto", error);
    },
    onSuccess: () => {
      console.log("Produto confirmado no carrinho");
      queryClient.invalidateQueries(["carrinho"]);
    },
  });
}
