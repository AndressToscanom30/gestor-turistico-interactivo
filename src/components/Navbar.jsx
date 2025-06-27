import { Link } from 'react-router-dom';
import '../NavBar.css';

const  Navbar = () => {
    return(
        <div>
            <nav className="navbar">
                <div className="logo">LOGO</div>
                <ul className="nav-links">
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li className="dropdown">
                        <Link to="">Rutas turisticas</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/cultura-historia">Cultura e historia</Link></li>
                        <li><Link to="/gastro-comercio">Gastronomia y comercio</Link></li>
                        <li><Link to="/aventura-verde">Rutas verdes y aventura</Link></li>
                        <li><Link to="/turismo-religioso">turismo religiso</Link></li>
                    </ul>
                    </li>
                    <li><Link to="#">Eventos</Link></li>
                    <li><Link to="#">Contacto</Link></li>
                    <li className="dropdown">
                        <Link to="#">Más servicios</Link>
                        <ul className="dropdown-content">
                            <li><Link to="#">Hoteles</Link></li>
                            <li><Link to="#">Agencias afiliadas</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="separador"></div>
        </div>
    )
}

export default Navbar;