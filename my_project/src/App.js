// essa parte fora da função servirá apenas para importar componentes

import './App.css';
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional';

function App () {
  // aqui dentro da função ficará todo o código e a lógica

  const nome = "Mateuzin"

  return (
    <div className='App'>
      <h1>Renderização condicional</h1>
      <Condicional />
    </div>
  );
}

// aqui embaixo será apenas a exportação
export default App;
