import React from "react";
import "./works.css";
import portfolioimg from "../../assets/portfolioreact.png";
import lefoufrog from "../../assets/lefoufrog.png";
import catsocialmedia from "../../assets/catsocialmedia.png";
import dataviz from "../../assets/datavizapi.png"



const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">Filler text</span>
      <div className="worksImgs">
        <div className="worksImgContainer">
      <a href="https://github.com/ryorafael/portfolio" target="_blank" rel="noopener noreferrer">
    <img src={portfolioimg} alt="" className="worksImg" />
      </a>
      </div>
      <div className="worksImgContainer">
        <a href="https://lefoufrogproject.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img src={lefoufrog} alt="" className="worksImg" />
      </a>
      </div>
        <div className="worksImgContainer">
        <a href="https://github.com/adatechschool/reseau-social-php-ryo-walid-nicolas" target="_blank" rel="noopener noreferrer">
        <img src={catsocialmedia} alt="" className="worksImg" />
      </a>
      </div>
      <div className="worksImgContainer">
        <a href="https://github.com/adatechschool/projet-collectif-dataviz-ryo-taous-nadege" target="_blank" rel="noopener noreferrer">
        <img src={dataviz} alt="" className="worksImg" />
      </a>
      </div>
      </div>
      <button className="worksbtn">See More</button>
    </section>
  );
};
export default Works;
