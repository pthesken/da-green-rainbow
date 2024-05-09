import "normalize.css";
import "./App.css";
import Logo from "./assets/images/logo2.png";
import Arrangement from "./assets/images/arrangement.jpg";
import Image1 from "./assets/images/image1.jpeg";
import Image2 from "./assets/images/image2.jpg";
import Image3 from "./assets/images/image3.jpg";
import Image4 from "./assets/images/image4.jpg";
//why is one jpeg rest are jpg?
import Form from "./Components/Form";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoVenmo } from "react-icons/io5";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  // Create a reference to the Form
  const formRef = useRef(null);

  // Function to scroll to the Form component
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="nav-bar">
        {/* consolidate styles knock out one */}

        {/* space evenly  */}
        <div className="icons-container">
          <a href="mailto:tuni0627@icloud.com" title="Send us an email">
            <MdEmail />
          </a>
          <a
            href="https://www.instagram.com/dagreenrainbowdesignz"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Instagram"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://venmo.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our Venmo"
          >
            <IoLogoVenmo />
          </a>
        </div>
        {/*  */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-bar-form-button-container">
          <button className="nav-bar-form-button" onClick={scrollToForm}>
            <strong>PLAN MY PARTY</strong>
          </button>
        </div>
      </div>
      <div className="content-container">
        <div className="opening-photo-container">
          <img src={Arrangement} alt="Arrangement" />
        </div>
        <div className="about">
          <p>
            At DA GREEN RAINBOW DESIGNZ, we aim to design with creativity and
            aloha spirit through our distinctive decorations. Whether you're a
            local family, a visiting tourist, or a business seeking to elevate
            your event, we are dedicated to making your vision a reality with
            passion, professionalism, and the unmistakable spirit of Kauai. We
            offer a wide variety of balloon backdrops, floral creations, party
            or wedding decorating services for any Kauai event!
          </p>
        </div>

        <Form formRef={formRef} />

        <div className="photos">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Image1} alt="" />
              <h1>Hello</h1>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image4} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="footer">
          footer
          <div className="contact-icons">icons</div>
        </div>
      </div>
    </>
  );
}

export default App;
