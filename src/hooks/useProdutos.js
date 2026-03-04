import { useQuery } from "@tanstack/react-query";
import { buscarProdutos } from "../services/produtoService";

export function useProdutos(categoria, pagina) {
  return useQuery({
    queryKey: ["produtos", categoria, pagina],
    queryFn: () => buscarProdutos(categoria),
    keepPreviousDara: true,
  });
}
