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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const pauseAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const resumeAutoplay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const handleInputFocus = () => {
    pauseAutoplay();
  };

  const handleInputBlur = () => {
    resumeAutoplay();
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      pauseAutoplay();
    };

    const handleUserStopInteraction = () => {
      resumeAutoplay();
    };

    // Add event listeners for user interaction
    document.addEventListener("focus", handleUserInteraction, true);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("mousedown", handleUserInteraction);

    // Add event listeners to resume autoplay when user stops interacting
    document.addEventListener("blur", handleUserStopInteraction, true);
    document.addEventListener("mouseup", handleUserStopInteraction);

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("focus", handleUserInteraction, true);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("mousedown", handleUserInteraction);
      document.removeEventListener("blur", handleUserStopInteraction, true);
      document.removeEventListener("mouseup", handleUserStopInteraction);
    };
  }, []);

  return (
    <div className="app-container">
      <header>
        <img src={Logo} alt="Logo" />
        <nav>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              goToSlide(0);
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              goToSlide(1);
            }}
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              goToSlide(3);
            }}
          >
            Contact
          </a>
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
        <SwiperSlide id="home">
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
              <button onClick={() => goToSlide(3)}>Plan My Party</button>
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
            <div className="navigation-arrows">
              <IoIosArrowBack
                className="arrow arrow-left"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="about">
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
            <div className="navigation-arrows">
              <IoIosArrowBack
                className="arrow arrow-left"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
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
            <div className="navigation-arrows">
              <IoIosArrowBack
                className="arrow arrow-left"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="contact" className="no-bg-slide">
          <div className="slide-content">
            <div className="title" data-swiper-parallax="-300">
              Contact Us
            </div>
            <div className="text" data-swiper-parallax="-100">
              <Form onFocus={handleInputFocus} onBlur={handleInputBlur} />
            </div>
            <div className="navigation-arrows">
              <IoIosArrowBack
                className="arrow arrow-left"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={() => swiperRef.current.swiper.slideNext()}
              />
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
