import { useQuery } from "@tanstack/react-query";
import { buscarProdutos } from "../services/produtoService";

export function useProdutos(categoria) {
  return useQuery({
    queryKey: ["produtos", categoria],
    queryFn: () => buscarProdutos(categoria),
  });
}
