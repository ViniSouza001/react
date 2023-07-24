// essa parte fora da função servirá apenas para importar componentes

import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName.js'
import Pessoa from './components/Pessoa.js'
import List from './components/List'

function App() {
  // aqui dentro da função ficará todo o código e a lógica

  const nome = "Mateuzin"

  return (
    <div className='App'>
      <HelloWorld />
      <SayMyName nome="Vinicius" />
      <SayMyName nome={nome} />
      <Pessoa
        foto="https://conteudo.imguol.com.br/c/noticias/2015/04/09/9abr2015---hamster-sirio-mesocricetus-auratus-1428629091243_300x300.jpg.webp"
        nome="Vinicius"
        idade='18'
        profissao="Programador Jr"
      />
      <List />
    </div>
  );
}

// aqui embaixo será apenas a exportação
export default App;
