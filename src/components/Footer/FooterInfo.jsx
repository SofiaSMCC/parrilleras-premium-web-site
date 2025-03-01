import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function FooterInfo() {
  return (
    <div className="footer-column">
      <h2>Parrillas Premium Perú</h2>
      <p className="footer-description">
        Catering parrillero líder del Perú con más de 10 años de experiencia.
      </p>
      <div className="footer-contact-us">
        <p>¡Contáctanos aquí!</p>
      </div>
      <div className="footer-social-icons">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaYoutube className="icon" />
        <FaTiktok className="icon" />
      </div>
    </div>
  );
}

export default FooterInfo;
