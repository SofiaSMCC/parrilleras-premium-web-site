import Navbar from "./NavBar";
import Reserva from "./Booking";

function Header({ currentPage, setCurrentPage }) {
  return (
    <header>
      <Reserva />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </header>
  );
}

export default Header;
