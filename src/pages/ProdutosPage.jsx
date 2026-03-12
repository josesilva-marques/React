import { useState } from "react";
import { useProdutos } from "../hooks/useProdutos";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

function ProdutosPage() {
  const [categoria, setCategoria] = useState("");

  const { data, isLoading, isError } = useProdutos(categoria);

  if (isLoading) {
    // Renderiza skeletons enquanto carrega
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <p>Erro ao carregar produtos.</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
      }}
    >
      {data?.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default ProdutosPage;
