import "./App.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";
import Store from "./components/store/Store";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "aboutUs":
        return <AboutUs />;
      case "services":
        return <Services />;
      case "store":
        return <Store />;
      case "contact":
        return <Contact />;
      case "blog":
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
