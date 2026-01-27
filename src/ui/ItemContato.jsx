function ItemContato({ contato, removerContato }) {
  return (
    <li>
      {contato.nome} - {contato.telefone}
      <button onClick={() => removerContato(contato.id)}>❌</button>
    </li>
  );
}

export default ItemContato;
