import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        titulo="Primeiro Card"
        descricao="Esse é meu primeiro card em React"
      />
      <Card titulo="Segundo Card" descricao="Estou aprendendo props" />
    </>
  );
}

export default App;
