import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro((prev) => !prev);
  };

  return (
    <div className={temaEscuro ? "dark-theme" : ""}>
      <Header alternarTema={alternarTema} temaEscuro={temaEscuro} />

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <img src="/perfil.jpg.png" alt="Foto de César Silva" />
          <p>
            Sou estudante do curso superior de Tecnologia em Sistemas para Internet.
          </p>
        </section>

        <Projetos />
        <Contato />
      </main>

      <Footer />
    </div>
  );
}

export default App;