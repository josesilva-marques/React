import { useQuery } from "@tanstack/react-query";
import { buscarProdutos } from "../services/produtosService"; // corrigido: produtosService

export function useProdutos(categoria, pagina) {
  return useQuery({
    queryKey: ["produtos", categoria, pagina],
    queryFn: () => buscarProdutos(categoria, pagina),
  });
}
