import "normalize.css";
import "./App.css";
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
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "./Components/Header/Header";

function App() {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveSlide(swiperRef.current.swiper.realIndex);
    }
  };

  return (
    <div className="app-container">
      <Header goToSlide={goToSlide} activeSlide={activeSlide} />
      <Swiper
        ref={swiperRef}
        speed={600}
        parallax={true}
        modules={[Parallax, Pagination]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide id="home">
          <div
            className="slide-content"
            style={{ backgroundImage: `url(${Arrangement})` }}
          >
            <div className="home-slide-click-contents">
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
        <SwiperSlide id="about" className="about-slide">
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
        <SwiperSlide id="gallery">
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
              <Form />
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
