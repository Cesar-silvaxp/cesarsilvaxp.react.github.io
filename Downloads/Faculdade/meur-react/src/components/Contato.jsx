function Contato() {
  return (
    <section id="contato">
      <h2>Contato</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Mensagem enviada com sucesso!");
        }}
      >
        <label>Nome:</label>
        <input type="text" required />

        <label>E-mail:</label>
        <input type="email" required />

        <label>Mensagem:</label>
        <textarea></textarea>

        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  );
}

export default Contato;