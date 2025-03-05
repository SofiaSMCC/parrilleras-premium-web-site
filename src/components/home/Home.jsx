import React from "react";
import "../../styles/Home.css";
import portadaImage from "../../assets/home-page/portada-catering.webp";
import Overlay from "./Overlay";
import CateringSection from "./CateringSection";

function Home() {
  return (
    <div className="home">
      <Overlay />
      <CateringSection />
    </div>
  );
}

export default Home;
