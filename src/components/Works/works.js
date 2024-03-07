import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./works.css";
import portfolioimg from "../../assets/portfolioreact.png";
import lefoufrog from "../../assets/lefoufrog.png";
import catsocialmedia from "../../assets/catsocialmedia.png";
import dataviz from "../../assets/datavizapi.png";

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I have done multiple group projects and personal projects that you can
        see below
      </span>
      <Slider {...settings}>
        <div className="worksImgContainer">
          <a
            href="https://github.com/ryorafael/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={portfolioimg} alt="" className="worksImg" />
            <p className="worksDesc">Developed my portfolio using react.js and other libraries that have been imported.</p>
          </a>
        </div>
        <div className="worksImgContainer">
          <a
            href="https://lefoufrogproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={lefoufrog} alt="" className="worksImg" />
            <p className="worksDesc">
              Developed a website for the restaurant Le Fou Frog, where I used
              HTML, CSS and Javascript. Eventually will configure an API for
              taking reservations and automatically sending them to the server.
            </p>
          </a>
        </div>
        <div className="worksImgContainer">
          <a
            href="https://github.com/adatechschool/reseau-social-php-ryo-walid-nicolas"
            target="_blank"
            rel="noopener noreferrer">
            <img src={catsocialmedia} alt="" className="worksImg" />
            <p className="worksDesc">Reconfiguration of code that was given to us as a group of 2, 
            we had to sort out the code and fix the server connections with mySQL and php. 
            </p>
          </a>
        </div>
        <div className="worksImgContainer">
          <a
            href="https://github.com/adatechschool/projet-collectif-dataviz-ryo-taous-nadege"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={dataviz} alt="" className="worksImg" />
            <p className="worksDesc">
              In a group of 3 we deployed a website and integrated a weather and
              geolocation API. We used JSON and asynchronous methods.
            </p>
          </a>
        </div>
      </Slider>
      <button className="worksbtn">See More</button>
    </section>
  );
};

export default Works;
