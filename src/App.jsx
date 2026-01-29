import Catalogo from "./ui/Catalogo";

const produtos = [
  { id: 1, nome: "camiseta", preco: 49.9 },
  { id: 2, nome: "Bone", preco: 29.9 },
  { id: 3, nome: "Tenis", preco: 199.9 },
];

function App() {
  return (
    <div className="container">
      <h1>Catálogo</h1>
      <Catalogo produtos={produtos} />
    </div>
  );
}

export default App;
