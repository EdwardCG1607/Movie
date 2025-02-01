import React from "react";
import "../styles/footerStyles.css";
import appleStore from "../assets/apple-store.webp";
import googlePlay from "../assets/google-play.webp";
import microsoftStore from "../assets/microsoft-store.webp";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import xIcon from "../assets/x-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-links">
            <a href="/home">Inicio</a>
            <a href="/terms">Términos y Condiciones</a>
            <a href="/privacy">Políticas y privacidad</a>
            <a href="/collection">Declaración de colección</a>
            <a href="/help">Ayuda</a>
            <a href="/account">Cuenta</a>
          </div>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="X (Twitter)" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-apps">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appleStore} alt="Download on the App Store" />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlay} alt="GET IT ON Google Play" />
            </a>
            <a
              href="https://www.microsoft.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={microsoftStore} alt="Get it from Microsoft" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © 2018 Mr. Movies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
