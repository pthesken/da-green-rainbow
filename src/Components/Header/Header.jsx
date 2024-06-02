import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo2.png";

export default function Header({ goToSlide, activeSlide }) {
  return (
    <header>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
        <h1 className="logo-text">Da Green Rainbow Designs</h1>
      </div>
      <nav>
        <a
          href="#home"
          className={activeSlide === 0 ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            goToSlide(0);
          }}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSlide === 1 ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            goToSlide(1);
          }}
        >
          About Us
        </a>
        <a
          href="#gallery"
          className={activeSlide === 2 ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            goToSlide(2);
          }}
        >
          Gallery
        </a>
        <a
          href="#contact"
          className={activeSlide === 3 ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            goToSlide(3);
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
