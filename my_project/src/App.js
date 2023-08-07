// essa parte fora da função servirá apenas para importar componentes

import './App.css';
import OutraLista from './components/OutraLista';

function App () {
  // aqui dentro da função ficará todo o código e a lógica

  const meusItens = ["React", "Vue", "Angular"]

  return (
    <div className='App'>
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  );
}

// aqui embaixo será apenas a exportação
export default App;
