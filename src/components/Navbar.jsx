import '../NavBar.css';

const  Navbar = () => {
    return(
        <div>
            <nav className="navbar">
                <div className="logo">LOGO</div>
                <ul className="nav-links">
                    <li><a href="/inicio">Inicio</a></li>
                    <li className="dropdown">
                        <a href="#">Rutas turisticas</a>
                    <ul className="dropdown-content">
                        <li><a href="/cultura-historia">Cultura e historia</a></li>
                        <li><a href="/gastro-comercio">Gastronomia y comercio</a></li>
                        <li><a href="/aventura-verde">Rutas verdes y aventura</a></li>
                        <li><a href="/turismo-religioso">turismo religiso</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li className="dropdown">
                        <a href="#">Más servicios</a>
                        <ul className="dropdown-content">
                            <li><a href="#">Hoteles</a></li>
                            <li><a href="#">Agencias afiliadas</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="separador"></div>
        </div>
    )
}

export default Navbar;