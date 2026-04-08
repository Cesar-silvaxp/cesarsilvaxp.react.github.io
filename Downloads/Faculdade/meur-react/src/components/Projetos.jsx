function Projetos() {
  const projetos = [
    {
      titulo: "Projeto Portfólio",
      descricao: "Meu primeiro site usando HTML, CSS e JavaScript.",
      link: "https://github.com/Cesar-silvaxp?tab=repositories"
    },
    {
      titulo: "Sistema Web",
      descricao: "Projeto de sistema com foco em aplicações web.",
      link: "https://github.com/Cesar-silvaxp?tab=repositories"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      {projetos.map((projeto, index) => (
        <article key={index}>
          <h3>{projeto.titulo}</h3>
          <p>{projeto.descricao}</p>
          <a href={projeto.link} target="_blank">
            Ver no GitHub
          </a>
        </article>
      ))}
    </section>
  );
}

export default Projetos;