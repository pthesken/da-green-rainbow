// App.jsx

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
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const swiperRef = useRef(null);

  const goToFormSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(3); // Slide to the form slide (index 3)
    }
  };

  return (
    <div className="app-container">
      <header>
        <img src={Logo} alt="Logo" />
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <Swiper
        ref={swiperRef}
        speed={600}
        parallax={true}
        autoplay={{ delay: 5000 }}
        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="slide-content"
            style={{ backgroundImage: `url(${Arrangement})` }}
          >
            <div className="title" data-swiper-parallax="-300">
              Plan My Party
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Make your events memorable
            </div>
            <div className="text" data-swiper-parallax="-100">
              <button onClick={goToFormSlide}>Plan My Party</button>
            </div>
            <div className="social-icons" data-swiper-parallax="-100">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare size={30} />
              </a>
              <a
                href="mailto:someone@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail size={30} />
              </a>
              <a
                href="https://venmo.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoVenmo size={30} />
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-content"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <div className="title" data-swiper-parallax="-300">
              About Us
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                At DA GREEN RAINBOW DESIGNZ, we aim to design with creativity
                and aloha spirit through our distinctive decorations. Whether
                you're a local family, a visiting tourist, or a business seeking
                to elevate your event, we are dedicated to making your vision a
                reality with passion, professionalism, and the unmistakable
                spirit of Kauai. We offer a wide variety of balloon backdrops,
                floral creations, party or wedding decorating services for any
                Kauai event!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="slide-content"
            style={{ backgroundImage: `url(${Image2})` }}
          >
            <div className="title" data-swiper-parallax="-300">
              Gallery
            </div>
            <div className="image-gallery" data-swiper-parallax="-100">
              <img src={Image1} alt="Gallery 1" />
              <img src={Image2} alt="Gallery 2" />
              <img src={Image3} alt="Gallery 3" />
              <img src={Image4} alt="Gallery 4" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="no-bg-slide">
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-300">
              Contact Us
            </div>
            <div className="text" data-swiper-parallax="-100">
              <Form />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <footer>
        <p>&copy; 2024 DA GREEN RAINBOW DESIGNZ. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
