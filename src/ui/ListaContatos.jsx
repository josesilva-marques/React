import ItemContato from "./ItemContato";

function ListaContatos({ contatos, removerContato }) {
  if (contatos.length === 0) {
    return <p>Lista vazia</p>;
  }
  return (
    <ul>
      {contatos.map((contato) => (
        <ItemContato
          key={contato.id}
          contato={contato}
          removerContato={removerContato}
        />
      ))}
    </ul>
  );
}
export default ListaContatos;
