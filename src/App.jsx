import "normalize.css";
import "./App.css";
import Arrangement from "./assets/images/arrangement.jpg";
import Image1 from "./assets/images/image1.jpeg";
import Image2 from "./assets/images/image2.jpg";
import Image3 from "./assets/images/image3.jpg";
import Image4 from "./assets/images/image4.jpg";
// import Image5 from "./assets/images/image5.jpg";
import Image6 from "./assets/images/image6.jpg";

import Form from "./Components/Form";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoVenmo } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "./Components/Header/Header";
import { useMediaQuery } from "react-responsive";

function App() {
  const swiperRef = useRef(null);
  const homeContentRef = useRef(null);
  const aboutContentRef = useRef(null);
  const galleryContentRef = useRef(null);
  const contactContentRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [elementHeight, setElementHeight] = useState(0);
  const [style, setStyle] = useState("");
  useEffect(() => {
    // if (contentRefs[activeSlide].current) {
    //   setElementHeight(contentRefs[activeSlide].current.clientHeight);
    // }
    if (activeSlide === 0 && homeContentRef.current) {
      console.log(homeContentRef.current.clientHeight);
      setElementHeight(homeContentRef.current.clientHeight);
    }
    if (activeSlide === 1 && aboutContentRef.current) {
      setElementHeight(aboutContentRef.current.clientHeight);
    }
    if (activeSlide === 2 && galleryContentRef.current) {
      console.log(galleryContentRef.current.clientHeight);
      setElementHeight(galleryContentRef.current.clientHeight);
    }
    if (activeSlide === 3 && contactContentRef.current) {
      console.log(contactContentRef.current.clientHeight);
      setElementHeight(contactContentRef.current.clientHeight);
    }
  }, [activeSlide]);

  const slideLeft = () => {
    if (activeSlide === 0) {
      goToSlide(3);
      return;
    }
    swiperRef.current.swiper.slidePrev();
    setActiveSlide(swiperRef.current.swiper.realIndex);
  };

  const slideRight = () => {
    if (activeSlide === 3) {
      goToSlide(0);
      return;
    }
    swiperRef.current.swiper.slideNext();
    setActiveSlide(swiperRef.current.swiper.realIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveSlide(swiperRef.current.swiper.realIndex);
    }
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveSlide(swiperRef.current.swiper.realIndex);
    }
  };
  console.log("activeSlide", activeSlide);
  return (
    <div className="app-container">
      <Header goToSlide={goToSlide} activeSlide={activeSlide} />
      <Swiper
        className={style}
        ref={swiperRef}
        speed={600}
        parallax={true}
        modules={[Parallax, Pagination]}
        onSlideChange={handleSlideChange}
        pagination={{ clickable: true }}
        style={{ height: `${elementHeight}px` }}
      >
        <SwiperSlide id="home">
          <div
            className="slide-content"
            ref={homeContentRef}
            style={{ backgroundImage: `url(${Arrangement})` }}
          >
            <div className="home-slide-click-contents">
              <div className="home-slide-body-text">
                <div className="title" data-swiper-parallax="-300">
                  Plan My Party
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  Make your events memorable
                </div>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <button onClick={() => goToSlide(3)}>Plan My Party</button>
              </div>
              <div className="social-icons" data-swiper-parallax="-100">
                <a
                  href="https://www.instagram.com/dagreenrainbowdesignz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare size={30} />
                </a>
                <a
                  href="mailto:tuni0627@icloud.com"
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
                onClick={slideLeft}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={slideRight}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide id="about" className="about-slide">
          <div
            className="slide-content"
            ref={aboutContentRef}
            style={{ backgroundImage: `url(${Image6})` }}
          >
            <div className="about-text-content">
              <div className="title" data-swiper-parallax="-300">
                <h2>About Us</h2>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  At DA GREEN RAINBOW DESIGNZ, we aim to design with creativity
                  and aloha spirit through our distinctive decorations. Whether
                  you're a local family, a visiting tourist, or a business
                  seeking to elevate your event, we are dedicated to making your
                  vision a reality with passion, professionalism, and the
                  unmistakable spirit of Kauai. We offer a wide variety of
                  balloon backdrops, floral creations, party or wedding
                  decorating services for any Kauai event!
                </p>
              </div>
            </div>
            <div className="navigation-arrows">
              <IoIosArrowBack
                className="arrow arrow-left"
                onClick={slideLeft}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={slideRight}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide id="gallery">
          <div className="slide-content no-bg-slide" ref={galleryContentRef}>
            <div className="title" data-swiper-parallax="-300">
              Gallery
            </div>
            <div className="image-gallery-grid" data-swiper-parallax="-100">
              <img src={Image1} alt="Gallery 1" />
              <img src={Image2} alt="Gallery 2" />
              <img src={Image3} alt="Gallery 3" />
              <img src={Image4} alt="Gallery 4" />
            </div>
            <div className="navigation-arrows">
              <IoIosArrowBack
                className="arrow arrow-left"
                onClick={slideLeft}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={slideRight}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="contact" className="no-bg-slide">
          <div className="slide-content" ref={contactContentRef}>
            <div className="title" data-swiper-parallax="-300">
              Contact Us
            </div>
            <div className="text" data-swiper-parallax="-100">
              <Form />
            </div>
            <div className="navigation-arrows">
              <IoIosArrowBack
                className="arrow arrow-left"
                onClick={slideLeft}
              />
              <IoIosArrowForward
                className="arrow arrow-right"
                onClick={slideRight}
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
