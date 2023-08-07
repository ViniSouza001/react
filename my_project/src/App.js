// essa parte fora da função servirá apenas para importar componentes

import './App.css';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App () {
  // aqui dentro da função ficará todo o código e a lógica
  const [nome, setNome] = useState()

  return (
    <div className='App'>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

// aqui embaixo será apenas a exportação
export default App;
