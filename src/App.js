import './App.css';
import { Link, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar'
import ROUTES from './constants/routes'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import './pages/index'
import Layout from './layout'

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
        <a href="https://www.scielo.br/j/topoi/a/FRCsRSBMxZHwc7mD63wSQcM/?format=pdf&lang=pt">
          O pós-abolição como problema histórico: balanços e perspectivas -Ana Maria Rios, Hebe Maria Mattos.
        </a>
        <a href="https://edisciplinas.usp.br/pluginfile.php/4181930/mod_resource/content/1/OC%20Segunda%20Guerra%20Mundial%20%284%29.pdf">
          A SEGUNDA GUERRA MUNDIAL: Causas, Estrutura, Consequências - Osvaldo Coggiola.
        </a>
        <a href="http://objdigital.bn.br/acervo_digital/div_manuscritos/mss1289261/mss1289261.pdf">
        Carta de D. João VI a seu filho, aconselhando não as cortes portuguesas, e resposta de D. Pedro I, de que só aceitará o que for conveniente aos brasileiros.
        </a>
      </div>
      <form>
        <p>Nos envie seu documento</p>
        <div className='items-form'>
          <input placeholder='Nome' type='text' />
          <input placeholder='Sobrenome' type='text' />
          <input placeholder='E-Mail' type='text' />
          <input placeholder='Link' type='text' />
          <input className='submit' type='submit' />
        </div>
      </form>
    </div>
  );
}

export default App;
