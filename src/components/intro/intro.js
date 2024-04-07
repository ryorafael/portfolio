import React from "react";
import "./intro.css";
import { FaDownload } from "react-icons/fa6";
import myPdf from "../../assets/ryorafaelcv.pdf";
import hazeImg from "../../assets/hazedrawing.png";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  const openPDF = () => {
    window.open(myPdf, "_blank");
  };
  return (
    <section id="intro" className="intro">
      <div className="introContent">
        <span className="hello">{t("Hello")},</span>
        <span className="introText">
          {t("I'm")}
          <span className="introName"> Ryo Rafael</span>
          <br />
          {t("Fullstack Developer")}
        </span>
        <p className="introPara">
          {t("I am looking for an internship starting from September 2024.")}
        </p>
        <button className="btn" onClick={openPDF}>
          <FaDownload className="btnIcon" />
          <span className="btnText">
            {t("Downloadable version of my resume")}
          </span>
        </button>
      </div>
      <img src={hazeImg} alt={t("illustration by xopolin")} className="bg" />
    </section>
  );
};

export default Intro;
