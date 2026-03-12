import { useQuery } from "@tanstack/react-query";
import { buscarProdutos } from "../services/produtosService";

export function useProdutos(categoria) {
  return useQuery({
    queryKey: ["produtos", categoria],
    queryFn: async () => {
      return await buscarProdutos(categoria);
    },
  });
}
