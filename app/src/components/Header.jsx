import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo" onClick={() => scrollToSection("accueil")}>
          Vincent Vignali
        </h1>

        {/* NAVIGATION DESKTOP */}
        <nav className="nav-desktop">
          <button onClick={() => scrollToSection("accueil")}>Accueil</button>
          <button onClick={() => scrollToSection("a-propos")}>À propos</button>
          <button onClick={() => scrollToSection("projets")}>Projets</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </nav>

        {/* MENU BURGER (VISIBLE EN MOBILE) */}
        <div
          className="burger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>

      {/* NAVIGATION MOBILE */}
      <nav ref={menuRef} className={`nav-mobile ${menuOpen ? "open" : ""}`}>
        <button onClick={() => scrollToSection("accueil")}>Accueil</button>
        <button onClick={() => scrollToSection("a-propos")}>À propos</button>
        <button onClick={() => scrollToSection("projets")}>Projets</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
