import { useMutation } from "@tanstack/react-query";
import { adicionarCarrinho } from "../services/produtoService";

export function useAdicionarCarrinho() {
  return useMutation({
    mutationFn: adicionarCarrinho,
  });
}
