import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logos/LOGO-PPP-WEB-V2.avif";
import searchIcon from "../assets/icons/search.png";
import userIcon from "../assets/icons/user.png";
import storeIcon from "../assets/icons/store.png";

function Navbar({ currentPage, setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("menu-open");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleMenuToggle}>
            <div className={`menu-icon-bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`menu-icon-bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`menu-icon-bar ${menuOpen ? "open" : ""}`}></div>
          </div>
          <img
            src={logo}
            alt="Logo Parrillas Premium"
            className="navbar-logo"
          />

          <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a
                  href="#"
                  className={currentPage === "home" ? "active" : ""}
                  onClick={() => setCurrentPage("home")}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={currentPage === "aboutUs" ? "active" : ""}
                  onClick={() => setCurrentPage("aboutUs")}
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={currentPage === "services" ? "active" : ""}
                  onClick={() => setCurrentPage("services")}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={currentPage === "store" ? "active" : ""}
                  onClick={() => setCurrentPage("store")}
                >
                  Tienda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={currentPage === "contact" ? "active" : ""}
                  onClick={() => setCurrentPage("contact")}
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={currentPage === "blog" ? "active" : ""}
                  onClick={() => setCurrentPage("blog")}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-icons">
            <img src={searchIcon} alt="Buscar" className="icon" />
            <img src={userIcon} alt="Usuario" className="icon" />
            <img src={storeIcon} alt="Tienda" className="icon" />
          </div>
        </div>
      </nav>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#"
              className={currentPage === "home" ? "active" : ""}
              onClick={() => setCurrentPage("home")}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "aboutUs" ? "active" : ""}
              onClick={() => setCurrentPage("aboutUs")}
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "services" ? "active" : ""}
              onClick={() => setCurrentPage("services")}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "store" ? "active" : ""}
              onClick={() => setCurrentPage("store")}
            >
              Tienda
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "contact" ? "active" : ""}
              onClick={() => setCurrentPage("contact")}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="#"
              className={currentPage === "blog" ? "active" : ""}
              onClick={() => setCurrentPage("blog")}
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
