import { useState, useEffect } from "react";
import { buscarProdutos } from "../services/api";

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const data = await buscarProdutos();
        setProdutos(data);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    };

    carregar();
  }, []);

  return { produtos, carregando, erro };
}
