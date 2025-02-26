import "../styles/Navbar.css";
import logo from "../assets/logos/LOGO-PPP-WEB-V2.avif";
import searchIcon from "../assets/icons/search.png";
import userIcon from "../assets/icons/user.png";
import storeIcon from "../assets/icons/store.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo Parrillas Premium" className="navbar-logo" />

        <ul className="navbar-menu">
          <li>
            {" "}
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Tienda</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>

        <div className="navbar-icons">
          <img src={searchIcon} alt="Buscar" className="icon" />
          <img src={userIcon} alt="Usuario" className="icon" />
          <img src={storeIcon} alt="Tienda" className="icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
