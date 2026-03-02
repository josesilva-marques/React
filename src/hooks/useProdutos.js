import { useQuery } from "@tanstack/react-query";
import { buscarProdutos } from "../services/produtoService";

export function useProdutos(categoria) {
  return useQuery({
    queryKey: ["produtos", categoria],
    queryFn: () => buscarProdutos(categoria),
    staleTime: 1000 * 60 * 5, // 5 minutos
    keepPreviousDara: true,
  });
}
