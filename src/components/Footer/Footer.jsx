import React from "react";
import "../../styles/Footer.css";
import FooterInfo from "./FooterInfo";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterReclamaciones from "./FooterReclamaciones";
import FooterNewsletter from "./FooterNewsletter";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterInfo />
        <FooterLinks />
        <FooterServices />
        <FooterReclamaciones />
      </div>
      <FooterNewsletter />
    </footer>
  );
}

export default Footer;
