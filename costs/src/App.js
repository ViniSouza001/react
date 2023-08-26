import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Container from './components/layouts/Container'

function App () {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/company">Empresas</Link>
        <Link to="/contacts">Contatos</Link>
        <Link to="/newproject">Novo projeto</Link>
      </header>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
