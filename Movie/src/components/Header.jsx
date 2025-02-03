import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-page.png";
import "../styles/headerStyles.css";
import "../styles/global.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/home" className="header-logo">
        <img src={logo} alt="Mr. Movies Logo" className="logo-image" /> 
          Mr. Movies
        </Link>
        <nav className="header-nav">
          <Link to="/home" className="nav-link">
            Inicio
          </Link>
          <Link to="/series" className="nav-link">
            Series
          </Link>
          <Link to="/movies" className="nav-link">
            Películas
          </Link>
        </nav>
      </div>
      <div className="header-right">
      <Link to="/">
        <button className="login-button">Log out</button>
        </Link>
        <Link to="/register">
          <button className="trial-button">Iniciar tu prueba gratis</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
