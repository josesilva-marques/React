function Header({ total }) {
  return(
    <header>
      <h1>🛒 Catálogo</h1>
      <p>Itens no carrinho: {total}</p>
    </header>
  );
}

export default Header;

