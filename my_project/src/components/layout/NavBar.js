import { Link } from "react-router-dom"
import styles from './Navbar.modules.css'

function NavBar () {
   return (
      <ul className="list">
         <li className="item"><Link to='/'>Home</Link></li>
         <li className="item">
            <Link to="/empresa">Empresa</Link>
         </li>
         <li className="item">
            <Link to="/contatos">Contatos</Link>
         </li>
      </ul>
   )
}

export default NavBar