function Header({ alternarTema, temaEscuro }) {
  return (
    <header>
      <nav>
        <h1>César Silva</h1>

        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <button onClick={alternarTema}>
          {temaEscuro ? "Escuro" : "Claro"}
        </button>
      </nav>
    </header>
  );
}

export default Header;