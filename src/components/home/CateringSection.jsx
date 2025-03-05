import React from "react";
import "../../styles/CateringSection.css";
import planningImg from "../../assets/home-page/planning.webp";
import grillersImg from "../../assets/home-page/grillers.webp";
import meatsImg from "../../assets/home-page/meats.webp";
import personalizedImg from "../../assets/home-page/personalized.webp";
import grillerExp from "../../assets/home-page/experiencia-parrillera.webp";
import cateringCorp from "../../assets/home-page/catering-corporativo.webp";
import cateringPriv from "../../assets/home-page/catering-privado.webp";

function CateringSection() {
  return (
    <section className="catering-section">
      <h2>¡Nos encargamos de TODO, tú solo disfruta!</h2>
      <p>
        Contamos con los mejores parrilleros que te harán vivir una experiencia
        parrillera única. Llegamos donde estés y te armamos la parrillada. Te
        llevamos las parrillas, las carnes, los acompañamientos, el menaje,
        mesas de presentación y atención personalizada.
      </p>
      <div className="services">
        <ServiceItem img={planningImg} title="Planificación y logística" />
        <ServiceItem img={grillersImg} title="Parrilleros especialistas" />
        <ServiceItem img={meatsImg} title="Carnes, parrillas y menaje" />
        <ServiceItem img={personalizedImg} title="Atención personalizada" />
      </div>
      <div className="combos">
        <h3>Combos desde S/ 70 soles por persona</h3>
        <p>
          Todos nuestros combos incluyen carnes de la mejor calidad y
          acompañamientos con el sello parrillero.
        </p>
        <button className="view-menu-button">VER CARTA</button>
        <p className="discover-options">
          Descubre otras opciones de catering....
        </p>
      </div>
      <div className="categories">
        <CategoryItem img={grillerExp} title="Experiencia Parrillera" />
        <CategoryItem img={cateringCorp} title="Catering Corporativo" />
        <CategoryItem img={cateringPriv} title="Catering Privado" />
      </div>
    </section>
  );
}

function ServiceItem({ img, title }) {
  return (
    <div className="service-item">
      <img src={img} alt={title} className="service-img" />
      <h4>{title}</h4>
    </div>
  );
}

function CategoryItem({ img, title }) {
  return (
    <div className="category-item">
      <img src={img} alt={title} className="category-img" />
      <h4>{title}</h4>
    </div>
  );
}

export default CateringSection;
