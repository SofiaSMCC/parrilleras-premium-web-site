import React from "react";
import "../../styles/Overlay.css";
import portadaImage from "../../assets/home-page/portada-catering.webp";

function Overlay() {
  return (
    <div
      className="overlay"
      style={{ backgroundImage: `url(${portadaImage})` }}
    >
      <div className="overlay-darken"></div>
      <div className="overlay-content">
        <h1>CATERING PARRILLERO</h1>
        <p className="price">DESDE S/ 70 POR PERSONA</p>
        <button className="quote-button">COTIZA AQUÍ</button>
      </div>
    </div>
  );
}

export default Overlay;
