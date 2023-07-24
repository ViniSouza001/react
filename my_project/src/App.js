// essa parte fora da função servirá apenas para importar componentes

import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {

  // aqui dentro da função ficará todo o código e a lógica
  const idade = 31
  var nome = "Vinicius"

  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/180"

  return (
    <div className='App'>
      <h1>Olá React!</h1>
      <p>Seja bem vindo {nome}</p>
      <p>Você possui {idade} anos</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld />
    </div>
  );
}

// aqui embaixo será apenas a exportação
export default App;
