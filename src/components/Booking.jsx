import "../styles/Booking.css";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

function Booking() {
  return (
    <nav className="booking">
      <div className="booking-container">
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
          <FaTiktok className="icon" />
        </div>
        <div className="booking-text">
          <span>RESERVA TU EXPERIENCIA PARRILLERA</span>
          <FaArrowRight className="arrow" />
        </div>
      </div>
    </nav>
  );
}

export default Booking;
