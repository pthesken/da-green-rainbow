import "normalize.css";
import "./App.css";
import Logo from "./assets/images/logo2.png";
import Arrangement from "./assets/images/arrangement.jpg";
import Image1 from "./assets/images/image1.jpeg";
import Image2 from "./assets/images/image2.jpg";
import Image3 from "./assets/images/image3.jpg";
import Image4 from "./assets/images/image4.jpg";
import Form from "./Components/Form";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoVenmo } from "react-icons/io5";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  const formRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav-bar-form-button-container">
          {/* <button className="nav-bar-about-button" onClick={scrollToAbout}>
            <strong>ABOUT US</strong>
          </button> */}
          <button className="nav-bar-form-button" onClick={scrollToForm}>
            <strong>PLAN MY PARTY</strong>
          </button>
        </div>
        <div className="icons-container">
          <a
            href="mailto:tuni0627@icloud.com"
            title="Send us an email"
            className="email-icon"
          >
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
      </div>
      <div className="content-container">
        <div className="photos">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            cssMode={true}
            // navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Image1} alt="Image 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image2} alt="Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} alt="Image 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image4} alt="Image 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Arrangement} alt="Arrangement" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="about" ref={aboutRef}>
          <strong>About Us</strong>
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

        <Form ref={formRef} />
      </div>
    </>
  );
}

export default App;
