import { useQuery } from "@tanstack/react-query";
import { buscarProdutos } from "../services/produtoService";

export function useProdutos() {
  return useQuery({
    queryKey: ["produtos"],
    queryFn: buscarProdutos,
  });
}
