import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../assets/it-job.jpeg";
import Banner2 from "../assets/banner2.jpeg";
import Banner3 from "../assets/banner3.jpeg";
import ThemeButton from "./ThemeButton";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleNavigation = (link) => {
    navigate(link);
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>WANT A SIX FIGURE IT JOB</h3>
            <p>Sign up below for more information of careers in tech </p>
            <div className="h-100 d-flex align-items-center justify-content-center">
              <ThemeButton
                text="Registration"
                handleClick={() => handleNavigation("/registration")}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Our Expertise</h3>
            <p>
              We provide quality training and prepare students for the future
              job market in the software industry.
            </p>
            <div className="h-100 d-flex align-items-center justify-content-center">
              <ThemeButton
                text="Our Services"
                handleClick={() => handleNavigation("/our-strength")}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>Our IT School</h3>
            <p style={{ color: "black" }}>
              We provide our students' quality teaching and ONE-to-ONE
              mentoring.
            </p>
            <p style={{ color: "black" }}>
              Let's build something great together. Come see what we're all
              about.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
