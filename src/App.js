import './App.css';
 
function App() {
  return (
 
    <div className="App">
      <header>
        <h1>Acervo de Documentos</h1>
        <div className='infos'>
          <button className="information">Informações</button>
          <button className="documents">Documentos</button>
          <button className="contact">Fale Conosco</button>
 
        </div>
      </header>
      <div className="content">
        <p1> Olá estudante e pesquisador, este projeto foi criado para facilitar e otimizar suas pesquisas. Junto da comunidade podemos criar um acervo utilizando links de documentos difíceis de se localizar na internet, criando assim uma rota mais curta e simples para o seu objetivo. Você também pode encaminhar um link para nós, aumentando mais o número de documentos registrados e facilitando a vida de outros pesquisadores. Olá estudante e pesquisador, este projeto foi criado para facilitar e otimizar suas pesquisas. Junto da comunidade podemos criar um acervo utilizando links de documentos difíceis de se localizar na internet, criando assim uma rota mais curta e simples para o seu objetivo. Você também pode encaminhar um link para nós, aumentando mais o número de documentos registrados e facilitando a vida de outros pesquisadores.
          Ao final da página você encontrará um campo para poder preencher com seu nome, sobrenome, email, e o link que gostaria de agregar na plataforma, desde já agradeço.
          Atenciosamente, Marcos V. A. Gomes (Criador da plataforma).</p1>
        <div className="links"></div>
      </div>
      <form>
        <p>Nos envie seu documento</p>
        <div className='items-form'>
          <input placeholder='Nome' type='text' />
          <input placeholder='Sobrenome' type='text' />
          <input placeholder='E-Mail' type='text' />
          <input placeholder='Link' type='text' />
          <input type='submit' />
        </div>
      </form>
    </div>
  );
}

export default App;
