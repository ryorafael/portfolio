import React from "react";
import "./intro.css";
import { Link as ScrollLink } from "react-scroll";
import { GrContact } from "react-icons/gr";
import myPdf from "../../assets/myPdfFile.pdf";

const Intro = () => {
  const openPDF = () => {
    window.open(myPdf, "_blank");
  };
  return (
    <section id="intro" className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Ryo Rafael</span>
          <br />
          Fullstack Developer
        </span>
        <p className="introPara">
          I am a fullstack dev looking for an internship starting from september
          2024 for one year, 4 days a week.
        </p>
        <ScrollLink to="about" smooth={true} duration={500} className="btn">
          <button className="btn" onClick={openPDF}>
            <GrContact className="btnIcon" />
          </button>
        </ScrollLink>
      </div>
      <img src="" alt="" className="bg" />
    </section>
  );
};

export default Intro;
