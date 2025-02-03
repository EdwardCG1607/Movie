import React from "react";
import { Link } from "react-router-dom";
import ('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
import logo from "../assets/Logo-page.png";
import "../styles/headerStylestwo.css";
import "../styles/global.css";


const Headerlogin = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="header-logo">
        <img src={logo} alt="Mr. Movies Logo" className="logo-image" /> 
          Mr. Movies
        </Link>
      </div>
      <div className="header-right">
        <Link to="/register">
        <button className="trial-button">Iniciar tu prueba gratis</button>
        </Link>
      </div>
    </header>
  );
};

export default Headerlogin;