import { Link } from 'react-router-dom'; 
import './style.css';

function Menu() {
  return (
    <nav className="c-menu">
      <Link to="/">Lista</Link> 
      <Link to="/capturados">Capturados</Link> 
      <Link to="/aleatorios">Aleatorio</Link> 
      <Link to="/usuario">Usuario</Link> 
      <Link to="/favoritos">Favoritos</Link> 
    </nav>
  );
}

export default Menu;
