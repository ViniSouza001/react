// essa parte fora da função servirá apenas para importar componentes

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Empresa from './pages/Empresas';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';
function App () {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path='/contatos' element={<Contatos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

// aqui embaixo será apenas a exportação
export default App;
