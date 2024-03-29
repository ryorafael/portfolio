import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills">
      <span className="skillTitle">{t("Hard Skills")}</span>
      <span className="skillDesc">
        <p>
          {t(
            "I am skilled in multiple languages such as HTML CSS Javascript PHP Reactjs Nodejs and Expressjs"
          )}
        </p>
        <p>{t("I am learning Swift Python and React Native")}</p>
      </span>
      <div className="skillBar">
        <div className="skillBar">
          <FaHtml5 className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <FaCss3Alt className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <IoLogoJavascript className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <FaPhp className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <RiReactjsFill className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <FaVuejs className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <FaNode className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <SiTailwindcss className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
        <div className="skillBar">
          <IoLogoFigma className="skillBarImg" />
          <div className="skillBarText"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
