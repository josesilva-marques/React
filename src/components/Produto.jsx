function Produto({ nome, onComprar }) {
  return (
    <div className="produto">
      <h3>{nome}</h3>
      <button onClick={onComprar}>Comprar</button>
    </div>
  );
}

export default Produto;
