// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <button onClick={() => scrollToSection("accueil")}>Accueil</button>
        <button onClick={() => scrollToSection("a-propos")}>À propos</button>
        <button onClick={() => scrollToSection("projets")}>Projets</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>

      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/vincent-vignali-57642b193/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8.5 8.98h4.8v2.03h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 5.99 3.33 5.99 7.66V24h-5v-6.54c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.51 1.7-2.51 3.45V24h-5V8.98z" />
          </svg>
        </a>
        <a
          href="https://github.com/Vvignali"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.384c.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.084-.729.084-.729 1.205.086 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.997.107-.776.418-1.306.76-1.606-2.665-.3-5.466-1.336-5.466-5.943 0-1.313.467-2.384 1.236-3.223-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 5.8a11.52 11.52 0 012.998.404c2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.223 0 4.62-2.805 5.64-5.475 5.932.43.372.815 1.102.815 2.222v3.293c0 .32.217.694.825.576A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <p className="footer-credit">
        © {new Date().getFullYear()} Vincent Vignali. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
