import React from "react";
import libroReclamaciones from "../../assets/icons/libro-de-reclamaciones-2020.png";

function FooterReclamaciones() {
  return (
    <div className="footer-column">
      <img
        src={libroReclamaciones}
        alt="Libro de Reclamaciones"
        className="libro-reclamaciones"
      />
    </div>
  );
}

export default FooterReclamaciones;
