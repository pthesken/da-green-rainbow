import { useState } from "react";
import "normalize.css";
import "./App.css";
import Logo from "./assets/images/logo.png";
import Arrangement from "./assets/images/arrangement.jpg";

function App() {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="contact-icons">icons</div>
      </div>
      <div className="content-container">
        <div className="opening-photo-container">
          <img src={Arrangement} alt="Arrangement" />
        </div>
        <div className="about">
          <p>
            At DA GREEN RAINBOW DESIGNZ, our mission is simple yet profound: to
            spread joy, creativity, and aloha spirit through our distinctive
            decorations. Whether you're a local family, a visiting tourist, or a
            business seeking to elevate your event, we are dedicated to making
            your vision a reality with passion, professionalism, and the
            unmistakable spirit of Kauai. We offer decorating, _____, _____,
            services for events on Kauai.
          </p>
        </div>
        <div className="form">form</div>
        <div className="photos">photos</div>
        <div className="footer">
          footer
          <div className="contact-icons">icons</div>
        </div>
      </div>
    </>
  );
}

export default App;
