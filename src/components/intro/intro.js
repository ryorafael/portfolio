import React from "react";
import "./intro.css";
import { FaDownload } from "react-icons/fa6";
import myPdf from "../../assets/myPdfFile.pdf";
import hazeImg from "../../assets/hazedrawing.png"

const Intro = () => {
  const openPDF = () => {
    window.open(myPdf, "_blank");
  };
  return (
    <section id="intro" className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName">
            {" "}
            Ryo Rafael
          </span>
          <br />
          Fullstack Developer
        </span>
        <p className="introPara">
          I am looking for an internship starting from September
          2024.
        </p>
          <button className="btn" onClick={openPDF}>
            <FaDownload className="btnIcon" />
            <span className="btnText">Downloadable version of my resume</span>
          </button>
      </div>
      <img src={hazeImg} alt="illustration by xopolin" className="bg" />
    </section>
  );
};

export default Intro;
