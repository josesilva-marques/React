function FormContato({
  nome,
  telefone,
  setNome,
  setTelefone,
  adicionarContato,
}) {
  return (
    <form onSubmit={adicionarContato} className="form-box">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <button type="submit" disabled={!nome}>
        Adicionar
      </button>
    </form>
  );
}

export default FormContato;
